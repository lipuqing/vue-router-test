var arr = function (nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > k) return false
        k = Math.max(k, i + nums[i])
    }
    return true
}
console.log(arr([7,1,5,9]))