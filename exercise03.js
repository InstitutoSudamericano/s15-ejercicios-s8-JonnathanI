let suma = 0;
let result;
let nums =[10,50,8,4];
let comp =10;
// Ejercicio 3
function sumMayo(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]>comp) {
            suma = suma + nums[i]; 
        }
        
    }
    return suma;
}

result = sumMayo(nums);
console.log(result);
