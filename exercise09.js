let suma = 0;
let result;
let nums =[0,2,1,4];

function sumindiMenElem(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i<nums[i]) {
            suma = suma + nums[i]; 
        }
        
    }
    return suma;
}

result = sumindiMenElem(nums);
console.log(result);
