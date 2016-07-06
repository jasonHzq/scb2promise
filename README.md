# cb2promise

transfer callback async function to a function which return a promise

[![npm version](https://badge.fury.io/js/cb2promise.png)](https://badge.fury.io/js/cb2promise)
[![build status](https://travis-ci.org/jasonHzq/cb2promise.svg)](https://travis-ci.org/jasonHzq/cb2promise)
[![npm downloads](https://img.shields.io/npm/dt/cb2promise.svg?style=flat-square)](https://www.npmjs.com/package/cb2promise)

## usage

```
$ npm i -S cb2promise
```

## example

```
cb2promise(fs.readFile)(filename).than(buffer => {
  const fileContent = buffer.toString();
}, err => {
  console.error(err);
});
```

## notation

the callback function must follow the laws below:

* callback is the last param

* callback params should like `fs` API which receive (err, data)
