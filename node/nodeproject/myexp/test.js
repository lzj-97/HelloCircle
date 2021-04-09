// var express = require('express')
// var cookieParser = require('cookie-parser')

// var app = express()
// app.use(cookieParser())

// app.get('/', function (req, res) {
//   // Cookies that have not been signed
//   console.log('Cookies: ', req.cookies)

//   // Cookies that have been signed
//   console.log('Signed Cookies: ', req.signedCookies)
// })

// app.listen(8080)

// console.log(kk);


const lodash = require("lodash");

let groups = lodash.groupBy({ a: 2.5, b: 2.6, c: 3.7, d: 2.7 });

// let groups = lodash.groupBy([2.1, 2.3, 3.4, 2.6, 3.6], Math.floor);

console.log(groups);

console.log(parseInt(2.7));

let arr;
console.log(arr == null);
console.log(arr == undefined);
console.log(null == undefined);

console.log(arr === null);
console.log(arr === undefined);
console.log(null === undefined);

const _ = require("lodash");

arr = _.difference([1, 1, 2, 3, 4], [3]);
console.log(arr);