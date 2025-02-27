//704. Binary Search 
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.




var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;

    while(left <= right) {
        let mid = left + Math.floor((right-left) / 2);

        if(nums[mid] === target) return mid;

        if(nums[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid+1;
        }
    }
    return -1;
}