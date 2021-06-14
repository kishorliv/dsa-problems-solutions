// https://leetcode.com/problems/first-bad-version/

// Initial solution
// time complexity
// O(n), worst  case
// space complexity
// O(n)

var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let versions = Array(n)
            .fill(null)
            .map((_, i) => i);

        binarySearch();
    };
};

// improved solution, binary search because we know the bad version is always less than the current version

var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let low = 1;
        let high = n;

        while (high >= low) {
            let mid = low + Math.floor((high - low) / 2);
            if (high === low) break;
            if (isBadVersion(mid)) high = mid;
            else low = mid + 1;
        }

        return low;
    };
};
