#number of times each letter appears in the string.
str = input("Enter a string: ")
letterCount = {}    #dictionary to store the letter with its count on letter repitition

for letter in str:
    if letter in letterCount:
        letterCount[letter] += 1        #count increments if the letter exists in the dict
    else:
        letterCount[letter] = 1         #a letter is added to the dict with a count 1

for letter in sorted(letterCount):
    print(letter, ":", letterCount[letter])
