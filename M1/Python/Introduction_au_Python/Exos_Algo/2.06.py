array = [1,333,2,5,444]

def sum(array):
    result = 0
    for value in array : 
        result += value
    return result

def average(array):
    sumArray = sum(array) // len(array)
    return sumArray

def nbValueMoreAverage(array):
    result = 0
    averageValue =average(array)
    for value in array :
        if(value > averageValue):
            result += 1
    
    return result

print(nbValueMoreAverage(array))

# Complexité linéare O(n) puisque on a qu'une seule boucle 


