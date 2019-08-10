// 题目：输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
// 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

// 根据二叉搜索树的后序遍历的特征进行递归判断。

function VerifySquenceOfBST(sequence)
{
    // write code here
    if(!sequence.length) return false;
    return findBST(sequence, 0, sequence.length - 1)
}

function findBST(sequence, start, end) {
    if (start >= end) {
        return true;
    }
    let i = end;
    while (i > start && sequence[i - 1] > sequence[end]) {
        i--;
    }
    for (let j = i - 1; j >= start; j--) {
        if (sequence[j] > sequence[end]) {
            return false;
        }
    }
    return findBST(sequence, start, i - 1) && findBST(sequence, i, end - 1);
}