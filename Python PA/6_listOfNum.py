#input list of numbers
numlist = input("Enter a list of numbers: ").split()

#strings to integers
int_list = []
for num in numlist:
    int_list.append(int(num))


#largest and smallest numbers
largest = max(int_list)
smallest = min(int_list)

print("The largest number is: ",largest)
print("The smallest number is: ",smallest)
