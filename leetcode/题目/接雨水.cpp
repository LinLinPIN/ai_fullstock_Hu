class Solution
{
public:
    int trap(vector<int> &height)
    {
        int n = height.size();
        int left = 0, right = n - 1;
        int res = 0;
        int pre_max = 0;
        int suf_max = 0;
        while (left < right)
        {
            pre_max = max(pre_max, height[left]);
            suf_max = max(suf_max, height[right]);
            if (pre_max > suf_max)
            {
                res += suf_max - height[right];
                right--;
            }
            else
            {
                res += pre_max - height[left];
                left++;
            }
        }
        return res;
    }
};