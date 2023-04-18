#sum of all even numbers in the list.
def sum_even_numbers(numbers):
    #initialization
    sum_of_evens = 0

    for num in numbers:
        #checking if the number is even
        if num % 2 == 0:
            sum_of_evens += num

    return sum_of_evens

input_str = input("Enter a list of numbers separated by commas: ")
numList = [int(num) for num in input_str.split(",")]
result = sum_even_numbers(numList)
print("The sum of even numbers in the list is: ",result)
