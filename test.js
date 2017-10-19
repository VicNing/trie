const assert = require('assert')
const Trie = require('./trie.js')

var trie = new Trie()
trie.insert('abc')
trie.insert('abe')
trie.insert('cfg')

assert.equal(trie.search('abc'),true,'test failed')
assert.equal(trie.search('abe'),true,'test failed')
assert.equal(trie.search('cfg'),true,'test failed')
assert.equal(trie.search('qqq'),false,'test failed')
