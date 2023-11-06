class Solution {
public:
    int maxProduct(vector<string>& words) {
        vector<int>flag;
        for(auto s:words){
            int t=0;
            for(int i=0;i<s.length();i++){
                int u=s[i]-'a';
                t|=(1<<u);
            }
            flag.push_back(t);
        }
        int res=0;
        for(int i=0;i<words.size();i++){
            for(int j=0;j<i;j++){
                if((flag[i]&flag[j])==0)
               {    int x=words[i].length()*words[j].length();
                    res=max(res,x);}
            }
            cout<<flag[i]<<endl;
        }
        return res;
    }
};