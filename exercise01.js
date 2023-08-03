let suma = 0;
let result;
let nums =[10,50,8,4];
let comp=3;
//Primer Array

function sumElements(nums) {
   for (let i = 0; i < nums.length; i++) {
     if (nums[i]%comp==0) {
      suma=suma+nums[i];
     }
     
      
      
   }
   return suma;
}


result=sumElements(nums);

console.log(result);
