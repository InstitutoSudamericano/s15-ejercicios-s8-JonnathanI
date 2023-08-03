let suma = 0;
let result;
let nums =[0,2,1,1];
    
function sumIndiMaEle(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i>nums[i]) {
            suma = suma + nums[i]; 
        }
        
    }
    return suma;
}

result = sumIndiMaEle(nums);
console.log(result);
