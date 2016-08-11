// 添加单词
export const ADD_WORD = 'ADD_WORD'
export function addWord(word,describe){
    return {
        type:ADD_WORD,
        word,
        describe
    }
}
