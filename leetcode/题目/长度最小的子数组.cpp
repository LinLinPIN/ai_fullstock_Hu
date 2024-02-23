class Solution
{
public:
    int minSubArrayLen(int target, vector<int> &nums)
    {
        int n = nums.size();
        int left = 0;
        int ans = n + 1;
        int flag = 0;
        for (int right = 0; right < n; right++)
        {
            flag += nums[right];
            //     while(flag-nums[left]>=target){
            //         flag-=nums[left++];
            // }
            // if(flag>=target)
            // ans=min(ans,right-left+1);
            while (flag >= target)
            {
                ans = min(ans, right - left + 1);
                flag -= nums[left];
                left++;
            }
        }
        return ans <= n ? ans : 0;
    }
};