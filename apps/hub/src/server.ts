import Fastify from 'fastify';
const app=Fastify({logger:true});
const seen=new Map<string,unknown>();
app.get('/health',async()=>({ok:true,service:'mise-hub',fiscal:'SimulatedFdm'}));
app.post('/api/commands',async(req:any,reply)=>{const id=req.body?.command_id;if(!id)return reply.code(400).send({error:'command_id required'});if(seen.has(id))return {replayed:true,result:seen.get(id)};const result={accepted:true,command_id:id};seen.set(id,result);return {replayed:false,result}});
app.post('/api/auth/session',async(req:any)=>({token:'demo-session',staff:req.body?.staff_id??'demo'}));
app.listen({port:Number(process.env.PORT||3001),host:'0.0.0.0'}).catch(err=>{app.log.error(err);process.exit(1)});
