num1 = int(input('First number: '))
num2 = int(input('Second number: '))


def isPositive(number1:int, number2:int)  -> str :
    if(number1 * number2 > 0):
        print('Votre produit est positif')
    else : 
        print('Votre produit est negatif')
    

isPositive(num1, num2)


# Complexité constant O(1) puisque on a que des instructions