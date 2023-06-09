//index.js
const http=require('http');
const server = http.createServer((_req, res)=>{
  res.writehead( 200,{'content-type': 'text/plain'});
  res.end('hello World \n');
});

server.listen( 8080, () =>{
  console.log('Server running at http://localhost:8080/');
});
console.log("Hello,thesathicoaching!");

await asyncFunction();

function normalFunction() {
  doSomething();
}

async function f1() {
  await asyncFunction();
}

const f2 = async () => {
  await asyncFunction();
};

const f3 = async () => await asyncFunction();

async function f4() {
  for await (const num of asyncIterable) {
    console.log(num);
  }
}

// empty functions are valid
async function emptyFunction() {}
const emptyArrowFunction = async () => {};

// generators are also valid
async function* gen() {
  console.log(42);
}
