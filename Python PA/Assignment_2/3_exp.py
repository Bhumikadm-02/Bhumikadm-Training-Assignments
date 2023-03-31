#new list with all the strings sorted in alphabetical order.
def sortStrings():
    str = input("Enter a list of strings: ")
    list = str.split(" ")
    return sorted(list)

new_list = sortStrings()        #new list with sorted order
print(new_list)


