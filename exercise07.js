let suma = 0;
let result;
let nums =[2,1,4,3];


function sumIndiEle(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]==i) {
            suma = suma + nums[i]; 
        }
        
    }
    return suma;
}

result = sumIndiEle(nums);
console.log(result);
