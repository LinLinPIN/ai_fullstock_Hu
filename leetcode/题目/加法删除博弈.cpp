#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
int t;
bool check(vector<int>a, int k) {
    for (int i = 1; i <= k; i++) {
        sort(a.begin(), a.end());
        if (a.empty())return false;
        int m=a.size()-1;
        while(m>=0&&a[m]>k-i+1)m--;
        if(m==-1)return false;
        a.erase(a.begin()+m);
        if (a.empty())continue;
        a[0] += k - i + 1;
    }
    return true;
}
int main() {
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        vector<int>a(n,0);
        for (int i = 0; i < n; i++)
        {
            int m;
            cin >> m;
            a[i]=m;
        }
        int l = 0, r = n;
        while (l < r) {
            int mid = (l + r + 1) / 2;
            if (check(a, mid))l = mid;
            else r = mid-1;
        }
        cout << l << endl;
    }
    return 0;
}
