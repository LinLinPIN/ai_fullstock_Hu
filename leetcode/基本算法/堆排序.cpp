#include<iostream>
#include<algorithm>
using namespace std;
int a[100010], Size, n, m;
void down(int u) {
    int t = u;
    if (u * 2 <= Size && a[t] > a[u * 2])t = 2 * u;
    if (u * 2 + 1 <= Size && a[u * 2 + 1] < a[t])t = 2 * u + 1;
    if (u != t) {
        swap(a[t], a[u]);
        down(t);
    }
}
int main() {
    cin >> n >> m;
    for (int i = 1; i <= n; i++)
        cin >> a[i];
    Size = n;
    for (int i = n / 2; i; i--)down(i);
    while (m--) {
        cout << a[1] << " ";
        a[1] = a[Size];
        Size--;
        down(1);
    }
    return 0;
}