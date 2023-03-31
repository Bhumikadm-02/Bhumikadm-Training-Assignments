#new string with all the vowels removed.
def removeVowels(string):
    vowels = "aeiouAEIOU"
    result = ""
    for char in string:
        if char not in vowels:
            result += char
    return result

str = input("Enter a string: ")
result = removeVowels(str)
print("The string with vowels removed is: ",result)


