class Solution
{
public:
    long long largestSquareArea(vector<vector<int>> &bottomLeft, vector<vector<int>> &topRight)
    {
        int n = bottomLeft.size();
        long long res = 0;
        for (int i = 0; i < n; i++)
        {
            auto &b1 = bottomLeft[i];
            auto &t1 = topRight[i];
            for (int j = i + 1; j < n; j++)
            {
                auto &b2 = bottomLeft[j];
                auto &t2 = topRight[j];
                int width = min(t2[0], t1[0]) - max(b1[0], b2[0]);
                int height = min(t1[1], t2[1]) - max(b1[1], b2[1]);
                int size = min(width, height);
                if (size > 0)
                {
                    res = max(res, (long long)size * size);
                }
            }
        }
        return res;
    }
};