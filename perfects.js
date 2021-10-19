//const n = prompt("n: ");
const n = 15000
let total = 0;
let arr = [];

function isPerfect(num){
  total = 0;
  for(let i = 1; i < num; i++){
    if(num % i == 0){
      total += i;
    }
  }
  if(total == num){
    return(arr.push(num));
  }
}

for(let i = 1; i <= n; i++){
  isPerfect(i);
}

console.log(arr);
