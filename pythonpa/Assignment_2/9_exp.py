#new list with the elements squared.
list = []
n = int(input("Enter the length of the list: "))        #length of the list
for i in range(n):
    list.append(int(input("Enter a number: ")))     #appends the list of numbers given by the user

squaredList = [num**2 for num in list]

print("The list with elements squared is:", squaredList)
