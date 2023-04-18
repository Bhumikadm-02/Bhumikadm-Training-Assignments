# Opening a file
#file = open('Demo.txt', 'r')

# Reading from a file
#content = file.read()
#print(content)

# Closing a file
#file.close()

# Writing to a file
with open('tecno.txt', 'a') as file:
    file.write('\nHey all!, Have a great day.')

# Reading from a file again
with open('tecno.txt', 'r') as file:
    content = file.read()
    print(content)