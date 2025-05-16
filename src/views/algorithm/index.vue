<template>
  <div>求数组中两数之和和目标值相等的两个数字</div>
</template>
<script setup>
// function twoSum(nums, target) {
//   for(let i = 0; i < nums.length; i++) {
//     const anotherNum = target - nums[i]
//     for(let j = i + 1; j < nums.length; j++) {
//       if(nums[j] === anotherNum) {
//         return [nums[i], nums[j]]
//       }
//     }
//   }
//   return []
// }
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [nums[map.get(complement)], nums[i]];
    map.set(nums[i], i);
  }
};

console.log(twoSum([1, 2, 7, 11], 9))

// 求字符串中最长不重复字符的字串长度
</script>