

public class sortanarray {
    public static void main(String[] args) {
        int [] nums = {2, 0, 2, 1, 1, 0};
        sortanarray sortanarray = new sortanarray();
        sortanarray.sortColors(nums);

    }

    public void sortColors(int[] nums) {
        int start = 0;
        int mid = 0;
        int end = nums.length - 1;

        while (mid <= end) {
             switch (nums[mid]) {
                case 0: {
                    swap (nums, start, mid);
                    mid ++;
                    start ++;
                    break;
                }

                case 1: {
                    mid ++;
                    break;
                }

                case 2: {
                    swap ( nums, mid, end);
                    end --;
                    break;
                }

                        }
                    }
                }
            
                public void swap (int [] nums, int i, int j) {
                    int temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                }
    }

