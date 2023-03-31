import os

# Define the file path for the to-do list
TODO_FILE = 'todo.txt'

# Display the menu options to the user
def display_menu():
    print('''
    MENU
    1. View To-Do List
    2. Add Item to To-Do List
    3. Update Item in To-Do List
    4. Delete Item from To-Do List
    5. Quit
    ''')

# Display the current to-do list items to the user
def view_list():
    if os.path.isfile(TODO_FILE):
        with open(TODO_FILE, 'r') as f:
            for i, line in enumerate(f, 1):
                print(f'{i}. {line.strip()}')
    else:
        print('No to-do items found.')

# Add a new item to the to-do list
def add_item():
    item = input('Enter the new to-do item: ')
    with open(TODO_FILE, 'a') as f:
        f.write(f'{item}\n')
    print(f'{item} added to to-do list.')

# Update an existing item in the to-do list
def update_item():
    view_list()
    item_num = input('Enter the number of the item to update: ')
    with open(TODO_FILE, 'r') as f:
        lines = f.readlines()
    if int(item_num) > len(lines):
        print('Invalid item number.')
    else:
        new_item = input(f'Enter the new value for item {item_num}: ')
        lines[int(item_num) - 1] = f'{new_item}\n'
        with open(TODO_FILE, 'w') as f:
            f.writelines(lines)
        print(f'Item {item_num} updated to {new_item}.')

# Delete an item from the to-do list
def delete_item():
    view_list()
    item_num = input('Enter the number of the item to delete: ')
    with open(TODO_FILE, 'r') as f:
        lines = f.readlines()
    if int(item_num) > len(lines):
        print('Invalid item number.')
    else:
        deleted_item = lines[int(item_num) - 1].strip()
        del lines[int(item_num) - 1]
        with open(TODO_FILE, 'w') as f:
            f.writelines(lines)
        print(f'{deleted_item} deleted from to-do list.')


def main():
    while True:
        display_menu()
        choice = input('Enter your choice: ')
        if choice == '1':
            view_list()
        elif choice == '2':
            add_item()
        elif choice == '3':
            update_item()
        elif choice == '4':
            delete_item()
        elif choice == '5':
            break
        else:
            print('Invalid choice.')

if __name__ == '__main__':
    main()
