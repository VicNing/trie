class TrieNode {
    constructor(key, level) {
        this.key = key
        this.level = level
        this.children = {}
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(null, 0)
    }

    insert(str) {
        let trieNode = this.root

        for (let i = 0; i < str.length; i++) {
            if (trieNode.children[str[i]]) {
                trieNode = trieNode.children[str[i]]
            } else {
                var node = new TrieNode(str[i], i + 1)
                trieNode.children[str[i]] = node
                trieNode = node
            }
        }
    }

    search(str) {
        let trieNode = this.root

        for (let i = 0; i < str.length; i++) {
            if (trieNode.children[str[i]]) {
                trieNode = trieNode.children[str[i]]
            } else {
                return false
            }
        }
        
        return true
    }
}

module.exports = Trie