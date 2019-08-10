/**
 * @param {number[]} prices
 * @return {number}
 */

// 先求出第一次交易的最大利润，然后进行第二次交易。
// 两次交易不能重叠。我们使用一个数组来保存第一次每一步的最大利润，然后进行反向遍历
class Solution {
    public int maxProfit(int[] prices) {
        int len = prices.length;
        if(len <= 1) return 0;
        int a, b, c, d;
        //d表示从后向前遍历的最大值
        d = Math.max(prices[len-1], prices[len-2]);
        // c表示第一次交易之后的最大利润
        c = Math.max(prices[len-1] - prices[len-2], 0);
        // b表示第二次交易之前的最大值
        b = d;
        // 
        a = c;
        for(int i=len-3; i>=0; i--) {
            //这里结合上面每个变量的意义进行理解，为什么每个变量更新的公式如下。
            a = Math.max(b - prices[i], a);
            b = Math.max(prices[i] + c, b);
            c = Math.max(d - prices[i], c);
            d = Math.max(prices[i], d);
        }
        return a;
    }
}




