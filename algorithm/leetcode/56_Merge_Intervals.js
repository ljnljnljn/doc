/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {
        if(a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1]
    })
    let len = intervals.length, res = [], start = intervals[0][0], end = intervals[0][1];
    for(let i = 1; i < len; i++) {
        let s = intervals[i][0];
        let e = intervals[i][1];
        if(s <= end) {
            end = Math.max(e, end);
        }else {
            res.push([start, end])
            start = s;
            end = e;
        }
    }
    if(start !== undefined) {
        res.push([start, end])
    }
    return res

};
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))