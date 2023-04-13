#Write a function called is_prime that accepts a number and returns True if it is a prime number, and False otherwise.

#Step 1: Write a failing test case

def is_prime():
    assert is_prime(7) == True
    
#Step 2: Write the minimal code required to pass the test

def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, num):
        if num % i == 0:
            return False
    return True
print(is_prime(7))

#Step 3: Run the test and refactor the code

def test2_is_prime():
    assert is_prime(7) == True, "Expected True, but got False"
test2_is_prime() 

#Step 4: Write additional test cases

def test2_is_prime():
    assert is_prime(7) == True, "Expected True, but got False"  #function returns True for a prime number
    
    assert is_prime(1) == False, "Expected False, but got True" #function returns False for 1 and 0
    assert is_prime(0) == False, "Expected False, but got True"
    
    assert is_prime(-7) == False, "Expected False, but got True"    #function returns False for negative numbers
    
    assert is_prime(15485863) == True, "Expected True, but got False"   #function returns True for large prime numbers
    assert is_prime(982451653) == True, "Expected True, but got False"
    
test2_is_prime()

