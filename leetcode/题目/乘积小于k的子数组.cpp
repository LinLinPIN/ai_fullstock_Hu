class Solution
{
public:
    int numSubarrayProductLessThanK(vector<int> &nums, int k)
    {
        int n = nums.size();
        if (k <= 1)
            return 0;
        int left = 0;
        int flag = 1;
        int res = 0;
        for (int i = 0; i < n; i++)
        {
            flag *= nums[i];
            while (flag >= k)
            {
                flag /= nums[left++];
            }
            res += i - left + 1;
        }
        return res;
    }
};