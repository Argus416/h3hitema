number = int(input('Please write a number: '))
result = 0

for value in range(number + 1):
    result += value

print (result)    

# Complexité linéare O(n) puisque on a qu'une seule boucle 
