function fibonacci(num){
    const fib_nums = [0,1]
    let fibonacci = 0
    if(num ===0 || num === 1){
        return fib_nums[num]
    }

    for(let i = 2; i <= num; i++){
        fibonacci = fib_nums[0] + fib_nums[1]
        fib_nums[0] = fib_nums[1]
        fib_nums[1] = fibonacci
    }
    return fibonacci
}
console.log(fibonacci(0))
console.log(fibonacci(2))
console.log(fibonacci(5))
console.log(fibonacci(8))
console.log(fibonacci(11))