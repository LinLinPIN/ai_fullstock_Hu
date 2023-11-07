class Solution {
public:
    int vowelStrings(vector<string>& words, int left, int right) {
        vector<char>m{'a','e','i','o','u'};
        int res=0;
        for(int i=left;i<=right;i++){
            int n=words[i].length();
            auto first=find(m.begin(),m.end(),words[i][0]);
            auto last=find(m.begin(),m.end(),words[i][n-1]);
            if(first!=m.end()&&last!=m.end())
            res++;
        }
    return res;
    }
};