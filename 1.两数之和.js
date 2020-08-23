// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

var twoSum = function (nums, target) {
  const hashSet = {}
  for (let i = 0; i < nums.length; i++) {
    const val = target - nums[i]
    if (val in hashSet) {
      return [hashSet[val], i]
    }
    hashSet[nums[i]] = i
  }
};



console.log(twoSum([2, 3, 7, 6, 5, 1, 8], 9))