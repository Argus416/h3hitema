numbers1 = [ 1, 2, 3, 4, 5 ]
numbers2 = [ 5, 4, 3, 2, 1 ]
result = 0

for i in numbers1:
    for j in numbers2:
        result += i * j

print (result)    

# Complexité quadratique O(n ^ 2) puisque on a une boucle dans une boucle  