// 设有N个活动时间集合，每个活动都要使用同一个资源，比如说会议场，
// 而且同一时间内只能有一个活动使用，每个活动都有一个使用活动的开始si和结束时间fi，
// 即他的使用区间为（si,fi）,现在要求你分配活动占用时间表，
// 即哪些活动占用该会议室，哪些不占用，使得他们不冲突，
// 要求是尽可能多的使参加的活动最大化，即所占时间区间最大化！

function greedyroom() {
    let s =[1,3,0,5,3,5,6,8,8,2,12];
    let f =[4,5,6,7,8,9,10,11,12,13,14];
    let res = {};
    let marked = [];
    greedChoose(11, s, f, marked)
    for(let i = 0; i < s.length; i++) {
        if(marked[i]) {
            res[s[i]] = f[i]
        }
    }
    return res
}

function greedChoose(len, s, f, flag) {
    flag[0] = true;
    let j = 0;
    for(let i = 1; i < len; i++) {
        if(s[i] >= f[j]) {
            flag[i] = true;
            j = 1;
        }
    }
}