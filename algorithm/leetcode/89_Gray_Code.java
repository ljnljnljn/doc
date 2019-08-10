class Solution {
    public List<Integer> grayCode(int n) {
        if(n == 0) {
            List<Integer> list = new ArrayList<Integer>();
            list.add(0);
            return list; 
        }
        List<Integer> temp = grayCode(n - 1);
        int addNum = 1 << (n - 1);
        ArrayList<Integer> result = new ArrayList<Integer>(temp);
        for(int i = temp.size() - 1; i >= 0; i--) {
            result.add(addNum + temp.get(i));
        }
        return result;
    }
}