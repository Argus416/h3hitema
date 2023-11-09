import os

folderPrefix = "800"

for x in range(1,6):
    folderName = folderPrefix + str(x)
    os.rmdir(folderName)
    # os.mkdir(folderName)