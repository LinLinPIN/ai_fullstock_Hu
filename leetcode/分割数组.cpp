class Solution
{
public:
    bool isPossibleToSplit(vector<int> &nums)
    {
        unordered_map<int, int> map;
        for (auto x : nums)
        {
            if (++map[x] > 2)
            {
                return false;
            }
        }
        return true;
    }
};