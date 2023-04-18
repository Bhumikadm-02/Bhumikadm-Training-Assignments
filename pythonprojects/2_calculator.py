#function to display the calculator menu
def display_menu():
    print('Select operation:')
    print('1. Add')
    print('2. Subtract')
    print('3. Multiply')
    print('4. Divide')
    print('5. Modulo')

#function to perform addition
def add(num1, num2):
    return num1 + num2

#function to perform subtraction
def subtract(num1, num2):
    return num1 - num2

#function to perform multiplication
def multiply(num1, num2):
    return num1 * num2

#function to perform division
def divide(num1, num2):
    return num1 / num2

#function to perform modulus
def modulo(num1, num2):
    return num1 % num2

#main function
def main():
    while True:
        #Display the calculator menu
        display_menu()
        
        choice = input('Enter choice (1/2/3/4/5): ')

        num1 = float(input('Enter first number: '))
        num2 = float(input('Enter second number: '))
        
        # Perform the selected operation and display the result
        if choice == '1':
            print(num1, '+', num2, '=', add(num1, num2))
        elif choice == '2':
            print(num1, '-', num2, '=', subtract(num1, num2))
        elif choice == '3':
            print(num1, '*', num2, '=', multiply(num1, num2))
        elif choice == '4':
            if num2 != 0:
                print(num1, '/', num2, '=', divide(num1, num2))
            else:
                print('Cannot divide by zero')
        elif choice =='5':
            print(num1, '%', num2, '=', modulo(num1, num2))
        else:
            print('Invalid input. Please try again.')
        
        # Ask the user if they want to perform another operation
        another_operation = input('Perform another operation? (y/n): ')
        if another_operation.lower() == 'n':
            break

if __name__ == '__main__':
    main()
