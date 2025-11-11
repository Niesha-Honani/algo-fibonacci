function fibonacci(num) {
  let n = 0;
  let num1 = 1;
  fib = 0;
  if(num == 0){
    return 0
  }
 
  for(let i = 0; i <= num; i++){
    fib = n - i 
    console.log(fib)
  }
  return fib
  
}

module.exports = fibonacci;
