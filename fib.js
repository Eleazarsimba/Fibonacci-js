function fib(n) {

    const result = [0, 1];
    for (var i = 2; i < n; i++) {
      const n1 = result[i - 2];
      const n2 = result[i - 1];
      result.push(n1 + n2);
    }
    
    console.log(result);
    return result[n - 1];
  }
  
  console.log(fib(8));