let c = []

function instance_of(L, R) {
    L = L.__proto__;
    R = R.prototype;
    while (L !== R) {
        L = L.__proto__
        if (L === null) {
            return false
        }
    }
    return true
}