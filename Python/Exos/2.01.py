num1 = input('First number: ')
num2 = input('Second number: ')

def isPositive(number) : 
    number = int(number)
    text = "Number {} is positive".format(number)
    if(number < 0):
        text = "Number {} is negative".format(number)
    print(text)


def isNumber(number) :
    try :
        int(number)
        return True
    
    except ValueError:
        return False
    
while (isNumber(num1) == False) : 
    print('First number invalide')
    num1 = input('First number: ')

while (isNumber(num2) == False) : 
    print('Second number invalide')
    num2 = input('Second number: ')
    
isPositive(num1)
isPositive(num2)

