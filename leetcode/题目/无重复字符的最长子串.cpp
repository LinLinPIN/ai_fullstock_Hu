class Solution
{
public:
    int lengthOfLongestSubstring(string s)
    {
        int n = s.length();
        int res = 0;
        unordered_map<char, int> map;
        int left = 0;
        for (int i = 0; i < n; i++)
        {
            map[s[i]]++;
            while (map[s[i]] > 1)
            {
                map[s[left]]--;
                left++;
            }
            res = max(res, i - left + 1);
        }
        return res;
    }
};