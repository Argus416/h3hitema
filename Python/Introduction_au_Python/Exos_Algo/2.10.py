# La multiplication matricielle
arrayOne=  [ 
               1, 0,
               -1, 3
            ]
arrayTwo = [ 
                3, 1,
                2, 1,
            ]

def getRow(arrayTwo:list): 
    """
        Transform row into column
    """
    i = 0
    row = []
    while i != 2:
        row.append([arrayTwo[i], arrayTwo[i + 2]])
        i += 1    
        
    return row

def calcMatrice(arrayOne:list, arrayTwo:list):
    rows = getRow(arrayTwo)
    matrice = []
    i = 0
    while i != len(arrayOne):
        for row in rows:
            value = (arrayOne[i] * row[0]) + arrayOne[i + 1] * row[1]
            matrice.append(value)
        i += 2
    
    return matrice        

print(calcMatrice(arrayOne,arrayTwo))

# Complexité quadratique O(n ^ 2) puisque on a une boucle dans une boucle  
