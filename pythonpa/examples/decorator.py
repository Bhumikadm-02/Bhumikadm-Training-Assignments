import time

# define decorator to measure execution time
def time_it(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print("Function square_list took seconds to execute is: ",end_time - start_time)
        return result
    return wrapper

# example function to test the decorator
@time_it
def square_list(nums):
    squared_nums = [num ** 2 for num in nums]
    return squared_nums

# take user input for a list of numbers
nums = input("Enter a list of numbers: ").split()

# convert the input string to a list of integers
nums = [int(num) for num in nums]

# call the decorated function and print the result
result = square_list(nums)
print("The squared numbers are:", result)
