// 题目：请实现一个函数用来找出字符流中第一个只出现一次的字符。
// 例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。
// 当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。


function Init(){
    streamNums = [];   //定义一个全局变量, 不用var
    streamNumsLen = 256;   //定义一个全局变量, 不用var
    streamNumsIndex = 0;   //定义一个全局变量, 不用var
    for(var i = 0; i < streamNumsLen; i++){
        streamNums[i] = -1;
    }
}
function Insert(ch){
    var code = ch.charCodeAt();
    if(streamNums[code] == -1){
        streamNums[code] = streamNumsIndex;
    } else if(streamNums[code] >= 0){
        streamNums[code] = -2;
    }
    streamNumsIndex++;
}
function FirstAppearingOnce(){
    result = '';
    var ch = '';
    var minIndex = Infinity;
    for(var i = 0; i < streamNumsLen; i++){
        if(streamNums[i] >= 0 && streamNums[i] < minIndex){
            ch = String.fromCharCode(i);
            minIndex = streamNums[i];
        }
    }
    return ch == "" ? '#' : ch;
}