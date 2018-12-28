var maxSubArray = function(nums) {
  for ( let i = 0; i < nums.length; i++ ) {
      if ( nums[i-1] > 0 ) {
          nums[i] += nums[i-1];
      }
  }
  return Math.max(...nums);
};