#input list of numbers
num = input("Enter a list of numbers: ").split()

#initialization
int_list = []
for num in num:
    int_list.append(int(num))

even_sum = 0

for num in int_list:
    if num%2 == 0:
        even_sum += num

print("The sum of all even numbers is:",even_sum)
