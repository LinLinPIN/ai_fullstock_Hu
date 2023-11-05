#include<iostream>
#include<vector>
#include<unordered_map>
#include<unordered_set>
using namespace std;
long long res = 0;
int n;
vector<unordered_set<long long > >map;
long long alex(long long x) {
	return sqrtl(x / 2 + 1);
}
int main() {
	cin >> n;
	map.resize(n + 1);
	for (int i = 1; i <= n; i++) {
		long long x;
		cin >> x;
		while (x > 1) {
			if (!map[i - 1].count(x))res++;
			map[i].insert(x);
			x = alex(x);
		}
	}
	cout << res << endl;
	return 0;
}
