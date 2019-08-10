/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set()
    for(let i = 0; i < wordList.length; i++) {
        wordSet.add(wordList[i])
    }
    let res = 0
    let queue = []
    queue.push(beginWord)
    while(queue.length) {
        let len = queue.length
        for(let k = 0; k < len; k++) {
            let word = queue.shift()
            if(word === endWord) {
                return res + 1
            }
            for(let i = 0; i < word.length; i++) {
                let newWord = word
                for(let j = 0; j < 26; j++) {
                    let temp= String.fromCharCode(97 + j)
                    newWord = newWord.split('')
                    newWord[i] = temp
                    newWord = newWord.join('')
                    if(wordSet.has(newWord) && newWord !== word) {
                        queue.push(newWord)
                        wordSet.delete(newWord)
                    }
                }
            }
        }
        res++
    }
    return 0
};

// for(let i = 'a'; i < 'z'; i++) {
//     console.log(i)
// }



console.log(ladderLength("lost", "cost", ["most","fist","lost","cost","fish"]))