#input a string
string = input("Enter a string: ")

#length of string
length = len(string)
print("The length of the string is: ",length)

#first and last characters of string
firstChar = string[0]
lastChar = string[-1]
print(f"The first character of the string is: ",firstChar)
print(f"The last character of the string is: ",lastChar)

#reverse
reverse = string[::-1]
print(f"The string in reverse order is: ",reverse)
