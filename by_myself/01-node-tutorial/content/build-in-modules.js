// Some build-in-module: os,path,fs

//*1.   ========== OS Modules ==========

const os = require("os");

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);

//*2.  ========== FS Modules ==========

const fs = require("fs");

const first = fs.readFileSync("./txt/first.txt", "utf8");
const second = fs.readFileSync("./txt/second.txt", "utf8");

console.log(first, second);

fs.writeFileSync("./txt/first.txt", `This is the text`);

//*3 . ========= HTTP Module =========

const http = require("http");

const server = http.createServer((res, rep) => {
  rep.write("Hell, this is first time created server!");
  rep.end();
});

server.listen(3000);

//* =============NPM:  =============

/*
 * npm i : for particular project
 * npm i -g : global for any project
 * package.json : manifest file (store important infor about project/packages)
 * npm init -y : everything default
 *
 */
