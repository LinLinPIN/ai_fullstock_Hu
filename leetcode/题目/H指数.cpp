class Solution {
public:
    int hIndex(vector<int>& citations) {
        int len=citations.size();
        int l=0,r=len;
        while(l<r){
            int mid=(l+r+1)/2;
            if(check(citations,mid))l=mid;
            else r=mid-1;
    }
    return l;
    }
    bool check(vector<int> a,int mid){
        int ans=0;
        for(int i:a){
            if(i>=mid)ans++;
        }
    return ans>=mid;}
};