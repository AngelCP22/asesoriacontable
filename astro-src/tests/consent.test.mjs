import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { stripTypeScriptTypes } from 'node:module';
import { runInNewContext } from 'node:vm';
import { randomUUID } from 'node:crypto';
const source=stripTypeScriptTypes(await readFile(new URL('../src/scripts/analytics.ts',import.meta.url),'utf8')).replaceAll('export ','');
function app({gpc=false,dnt=false}={}) {
  const callbacks={}, stored=new Map(), sessions=new Map(), sent=[];
  const storage=map=>({getItem:key=>map.get(key)??null,setItem:(key,value)=>map.set(key,value),removeItem:key=>map.delete(key)});
  const panel={hidden:true,querySelector:()=>({focus(){}})};
  const sandbox={crypto:{randomUUID},Blob,navigator:{globalPrivacyControl:gpc,doNotTrack:dnt?'1':'0',sendBeacon:(url,body)=>{sent.push({url,body});return true;}},window:{location:{pathname:'/'}},localStorage:storage(stored),sessionStorage:storage(sessions),document:{documentElement:{dataset:{}},querySelector:selector=>selector==='[data-privacy-choice]'?panel:{addEventListener:(name,fn)=>callbacks[selector]=fn},addEventListener(){}}};
  runInNewContext(source+';initAnalytics();',sandbox);
  return {callbacks,stored,sessions,sent,panel,sandbox};
}
test('no consent creates no identifiers or events; accepting enables, rejecting revokes',()=>{
  const a=app();assert.equal(a.sent.length,0);assert.equal(a.stored.size,0);assert.equal(a.panel.hidden,false);
  a.callbacks['[data-privacy-accept]']();assert.equal(a.sent.length,1);assert.ok(a.stored.has('soluciones_analytics_visitor'));
  a.callbacks['[data-privacy-reject]']();runInNewContext('trackWhatsapp("header")',a.sandbox);assert.equal(a.sent.length,1);assert.equal(a.stored.has('soluciones_analytics_visitor'),false);assert.equal(a.sessions.size,0);
  a.callbacks['[data-privacy-settings]']();assert.equal(a.panel.hidden,false);
});
for(const privacy of [{gpc:true},{dnt:true}]) test(`privacy signal overrides acceptance ${JSON.stringify(privacy)}`,()=>{const a=app(privacy);a.callbacks['[data-privacy-accept]']();assert.equal(a.sent.length,0);assert.equal(a.stored.has('soluciones_analytics_visitor'),false);});
