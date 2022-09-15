# Facturielle

number = int(input('Please write a number: '))

def getFacturielle(number):
    result = 1
    
    for value in range(number + 1):
        if(value != 0):
            result *= value
    
    return result



print(getFacturielle(number))