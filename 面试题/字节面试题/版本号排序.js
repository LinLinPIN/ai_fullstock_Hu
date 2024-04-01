function sortVersions(versions) {
    return versions.sort((a, b) => {
        const aParts = a.split('.').map(Number);
        const bParts = b.split('.').map(Number);

        for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
            const numA = i < aParts.length ? aParts[i] : 0;
            const numB = i < bParts.length ? bParts[i] : 0;

            if (numA < numB) {
                return -1; //  从小到大排序
            } else if (numA > numB) {
                return 1;
            }
        }

        return 0;
    });
}
let arr1 = ['1.45.0', '1.5', '1.455', '3.3.', '1.545']
let arr2 = ['1.2', '1.34', '1.4', '3.3.3.3.3.3', '6.2']
let arr3 = ['1.5', '1.45.0', '3.3.3.3.3.3', '6']
console.log(sortVersions(arr1));
console.log(sortVersions(arr2));
console.log(sortVersions(arr3));