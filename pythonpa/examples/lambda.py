#lambda and comprehension program to filter even no.s and double the odd no.s
list = []
n = int(input("Enter the length of the list: "))
for i in range(n):
    list.append(int(input("Enter a number: ")))


filteredList = list(map(lambda x: x*2, filter(lambda x: x%2 != 0,list)))
#map function is used to double the odd numbers 
#filter function is used to filter out even numbers

print("Filtered and doubled list:", filteredList)



