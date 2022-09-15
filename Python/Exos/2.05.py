def lePlusGrand(tab):
    value = 0
    position = 0
    for i in tab:
        if(value <i):
            value = i
            position = tab.index(i)
            
    return [value, position]


array = [1,333,2,5]

print(lePlusGrand(array))