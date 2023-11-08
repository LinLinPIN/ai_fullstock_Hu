class Solution {
public:
    int findTheLongestBalancedSubstring(string s) {
        int n=s.length();
        int index=0,res=0;
        while(index<n){
            int a=0,b=0;
            while(s[index]=='0'&&++a>=0&&index<n)index++;
            while(s[index]=='1'&&++b>=0&&index<n)index++;
            res=max(min(a,b)*2,res);
        }
        return res;
    }
};