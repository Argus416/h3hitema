# 2.12 Le temps d’arrêt
# On note Hn la somme Hn = for nk=1 k1 . On admet que H tend vers +∞. 
# Ecrire un algorithme qui détermine le plus petit entier n tel que (H) d'épasse un réel α donné.

def stopTime(n):
   i = 1
   result = 0
   divise = 1 / i
   # (1 / 1) + (1 / 2) + (1 / 3)
   while (i != n + 1):
      result += 1 / i
      i += 1
      
   return result
   
   
   
    
    
        

print( stopTime(3) )