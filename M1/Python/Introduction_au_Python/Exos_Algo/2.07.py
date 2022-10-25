vectorOne = [ 6 , 5 ]
vectorTwo = [ -2 , 4 ]

def multiVector(vecOne, vecTwo):
    index = 0
    result = [0,0]
    while(index != 2):
        result[index] = vecOne[index] + vecTwo[index]
        index += 1
    
    return result

print(multiVector(vectorOne, vectorTwo))


# Complexité linéare O(n) puisque on a qu'une seule boucle 
