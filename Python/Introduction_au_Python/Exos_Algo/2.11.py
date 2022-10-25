def FIBO(n):
    fnOne = 0
    fnTwo = 1
    fn = fnOne + fnTwo
    i = 1
    
    result = []
    
    while ( i != n ): 
        fnTwo = fnOne
        fnOne = fn
        fn = fnOne + fnTwo
        result.append(fn)
        i += 1
    
    return result    

print(FIBO(10))

# Complexité linéare O(n) puisque on a qu'une seule boucle 
