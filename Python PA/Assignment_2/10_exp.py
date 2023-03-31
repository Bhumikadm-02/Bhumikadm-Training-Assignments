#new list with only the strings that are palindromes.
def isPalindrome(word):
    return word == word[::-1]       #slice is used to read the string in reverse order

word_list = []
n = int(input("Enter the length of the list: "))        #length of the list
for i in range(n):
    word_list.append(input("Enter a word: "))           #appends the list of numbers given by the user

palindromeList = []
for word in word_list:
    if isPalindrome(word):
        palindromeList.append(word)

print("The palindromes in the list are:", palindromeList)
