let suma = 0;
let result;
let nums =[12,14,5,7];
let comp =7;

function sumMulti(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]%comp==0) {
            suma = suma + nums[i]; 
        }
        
    }
    return suma;
}

result = sumMulti(nums);
console.log(result);
