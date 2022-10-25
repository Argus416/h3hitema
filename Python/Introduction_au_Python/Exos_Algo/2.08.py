array= [ 6 ,7 ,8 ,7 ,6 ,5 ,4 ,5 ,6 ,7 ,6 ,7 ,8 ,9 ,7 ,9 ,0 ]

def isSuperior(nbOne, nbTwo):
    if(nbOne < nbTwo):
        return True
    return False


def sort(array):
    sortedArray = []
    if(len(array) == 0):
        return sortedArray
    else: 
        smallerNumber = array[0]
        indexSmallerNumber = 0
        
        for i in range(len(array)) : 
            if(smallerNumber > array[i]):
                smallerNumber = array[i]
                indexSmallerNumber = i

        sortedArray.append(smallerNumber)
        del array[indexSmallerNumber]
        
        return sortedArray + sort(array)
            
print(sort(array))

# Complexité logarithmique O(log(n)) puisque on a une fonction recursive 