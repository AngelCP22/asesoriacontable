import test from 'node:test';
import assert from 'node:assert/strict';
import { onRequest } from '../functions/api/analytics.js';
const origin = 'https://solucionestacontable.com';
const payload = {event_id:'11111111-1111-4111-8111-111111111111',visitor_id:'22222222-2222-4222-8222-222222222222',session_id:'33333333-3333-4333-8333-333333333333',event_name:'page_view',page_path:'/'};
function context({method='POST',headers={},body=payload,env}={}) {
  const calls=[];
  return {calls, request:new Request(origin+'/api/analytics',{method,headers:{'Content-Type':'application/json',Origin:origin,...headers},...(method==='GET'||method==='HEAD'?{}:{body:typeof body==='string'?body:JSON.stringify(body)})}),env:env ?? {ANALYTICS_DB:{prepare(sql){return {bind(...values){return {async run(){ calls.push({sql,values}); }}}}}}},waitUntil(){}};
}
test('valid event is parameterized and response is hardened',async()=>{const ctx=context();const r=await onRequest(ctx);assert.equal(r.status,202);assert.equal(ctx.calls.length,1);assert.match(ctx.calls[0].sql,/VALUES \(\?/);assert.equal(r.headers.get('Cache-Control'),'no-store');assert.match(r.headers.get('Content-Security-Policy'),/frame-ancestors 'none'/);});
for(const other of ['https://evil.example','https://www.solucionestacontable.com','null','']) test(`reject origin ${other}`,async()=>{const c=context({headers:{Origin:other}});assert.equal((await onRequest(c)).status,403);assert.equal(c.calls.length,0);});
for(const method of ['GET','PUT','DELETE','OPTIONS','HEAD']) test(`reject ${method}`,async()=>assert.equal((await onRequest(context({method}))).status,405));
for(const page_path of ['/secret?password=value','//evil.test','/api/clients','/sire-api/']) test(`reject arbitrary path ${page_path}`,async()=>assert.equal((await onRequest(context({body:{...payload,page_path}}))).status,400));
test('reject malformed, oversized and non-JSON payloads',async()=>{assert.equal((await onRequest(context({body:'{'}))).status,400);assert.equal((await onRequest(context({body:'x'.repeat(4097)}))).status,413);assert.equal((await onRequest(context({headers:{'Content-Type':'text/plain'}}))).status,415);});
test('storage unavailable fails explicitly',async()=>assert.equal((await onRequest(context({env:{}}))).status,503));
