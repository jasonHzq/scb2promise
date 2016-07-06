import assert from 'assert';
import fs from 'fs';
import scb2promise from '../src/';
import path from 'path';
import 'babel-polyfill';

describe('it should transfer fs API to promise', () => {
  it('should transfer fs.readdir to promise', async done => {
    const testPath = path.join(process.cwd(), 'test');

    const files = await scb2promise(fs.readdir)(testPath);

    assert.strictEqual(files[1], 'index.js');
    done();    
  });

  it('should transfer fs.readFile to promise', async done => {
    const expectPath = path.join(process.cwd(), 'test', 'expect');

    const word = await scb2promise(fs.readFile)(expectPath);

    assert.strictEqual(word.toString(), "it's a test\n");
    done();
  });
});
