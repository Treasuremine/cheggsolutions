//index.js
const http=require('http');
const server = http.createServer((req, res)=>{
  res.writehead( 200,{'content-type': 'text/plain'});
  res.end('hello World \n');
});

server.listen( 8080, () =>{
  console.log('Server running at http://localhost:8080/');
});
console.log("Hello,thesathicoaching!");
