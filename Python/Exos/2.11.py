def FIBO(n):
    fnOne = 0
    fnTwo = 1
    fn = fnOne + fnTwo
    i = 1
    
    while ( i != n ): 
        fnTwo = fnOne
        fnOne = fn
        fn = fnOne + fnTwo
        i += 1
    
    return fn
    
        
        
print(FIBO(3))