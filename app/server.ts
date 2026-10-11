const file=Bun.file(new URL('../index.html',import.meta.url));
const server=Bun.serve({hostname:'127.0.0.1',port:4318,fetch(req){const p=new URL(req.url).pathname;return p==='/'||p==='/index.html'?new Response(file,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store'}}):new Response('Not found',{status:404});}});
console.log(`Study app ready: ${server.url}`);
