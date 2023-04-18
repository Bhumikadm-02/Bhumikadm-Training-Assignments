while True:
    a = input("Enter the numerator: ")
    b = input("Enter the denominator: ")

    try:
        a = float(a)
        b = float(b)
        result = a/b

        if a == 0:
            raise ZeroDivisionError("denominator can't be zero, enter a non-zero value.")
        
        elif a<0 or b<0:
            raise ValueError("numerator and denominator must be positive number.")

        print("The result is: ",result)
        break

    except ZeroDivisionError as e:
        print(e)

    except ValueError as e:
        print(e)


