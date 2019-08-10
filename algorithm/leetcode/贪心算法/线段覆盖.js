// 在一维空间中告诉你N条线段的起始坐标与终止坐标，
// 要求求出这些线段一共覆盖了多大的长度
function lineCover() {
    let s = [2,3,4,5,6,7,8,9,10,11];
    let f = [3,5,7,6,9,8,12,10,13,15];
    
    let totalLen = 3 - 2;
    for(let i = 1, j = 0; i < s.length; i++) {
        if(s[i] >= f[j]) {
            totalLen += (f[i] - s[i]);
        }else {
            if(f[i] <= f[j]) continue;
            else {
                totalLen += f[i] - f[j];
                j = i
            } 
        }
    }
    return totalLen
}