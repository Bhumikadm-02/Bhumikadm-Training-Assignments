#list of numbers and returns the median value.
def median(numList):
    sorted_list = sorted(numList)
    length = len(sorted_list)
    if length%2 == 0:
        median = (sorted_list[length//2-1] + sorted_list[length//2])/2      #median for the set of 2 even numbers present in the list
    else:
        median = sorted_list[length//2]                 #median for the set of 2 even numbers
    return median

str = input("Enter a list of numbers: ")
numList = [int(num) for num in str.split(",")]
result = median(numList)
print("The median value is: ",result)
