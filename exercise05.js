let suma = 0;
let result;
let nums =[12,3,5,7];
let comp =3;

function sumElements3(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]%comp==0) {
            suma = suma + nums[i]; 
        }
        
    }
    return suma;
}

result = sumElements3(nums);
console.log(result);
