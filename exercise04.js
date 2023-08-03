let suma = 0;
let result;
let nums =[1,1,0,0];
let comp =0;

function sumIndi(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]==comp) {
            suma = suma + i; 
        }
        
    }
    return suma;
}

result = sumIndi(nums);
console.log(result);
