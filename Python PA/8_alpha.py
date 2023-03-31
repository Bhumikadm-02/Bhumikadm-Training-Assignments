a = []

#input the names
while True:
    name = input("Enter a name: ")
    if name == "end":
        break
    a.append(name)

#sort the list of names in alphabetical order
a.sort()
print("Names is sorted order:")
for name in a:
    print(name)
