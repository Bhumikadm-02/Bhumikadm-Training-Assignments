#a new list with the elements that appear in both lists.
def commonElements(l1, l2):
    set1 = set(l1)
    set2 = set(l2)
    elements = list(set1.intersection(set2))
    return elements

str1 = input("Enter the numbers in list 1: ")
list1 = [int(num) for num in str1.split(",")]
str2 = input("Enter the numbers in list 2: ")
list2 = [int(num) for num in str2.split(",")]
result = commonElements(list1, list2)
print("The common elements are: ",result)
