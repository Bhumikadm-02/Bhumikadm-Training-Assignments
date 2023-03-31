#new list with only the prime numbers.
def isPrime(num):
    if num<2:
        return False
    for i in range(2, int(num**0.5)+1):
        if num%i == 0:
            return False
    return True

numList = []
n = int(input("Enter the length of the list: "))        #length of the list
for i in range(n):
    numList.append(int(input("Enter a number: ")))      #appends the list of numbers given by the user

primeList = []
for num in numList:
    if isPrime(num):
        primeList.append(num)           #appends the prime numbers

print("The prime numbers are:", primeList)
