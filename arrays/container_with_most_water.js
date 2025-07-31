/**
 * @param {number[]} height
 * @return {number}
 */

function maxArea(height) {
    let maxWater = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const area = Math.min(height[i], height[j]) * (j - i);
            maxWater = Math.max(maxWater, area);
        }
    }
    return maxWater;
}
