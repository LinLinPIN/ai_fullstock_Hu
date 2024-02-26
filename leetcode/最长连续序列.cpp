class Solution
{
public:
    int longestConsecutive(vector<int> &nums)
    {
        unordered_map<int, int> map;
        int res = 0;
        for (auto x : nums)
        {
            map[x]++;
        }
        for (auto x : nums)
        {
            if (map[x - 1])
                continue;
            int len = 0;
            while (map[x++])
                len++;
            res = max(res, len);
        }
        return res;
    }
};