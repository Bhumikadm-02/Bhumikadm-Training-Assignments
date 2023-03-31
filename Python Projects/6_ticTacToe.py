#initial game board
board = {
    (0, 0): '-', (0, 1): '-', (0, 2): '-',
    (1, 0): '-', (1, 1): '-', (1, 2): '-',
    (2, 0): '-', (2, 1): '-', (2, 2): '-'
}

def print_board():
    print('   0  1  2')
    for i in range(3):
        print(i, end='  ')
        for j in range(3):
            print(board[(i, j)], end=' ')
        print()

#check if someone has won the game
def check_winner():
    #check rows
    for i in range(3):
        if board[(i, 0)] == board[(i, 1)] == board[(i, 2)] and board[(i, 0)] != '-':
            return board[(i, 0)]
    #check columns
    for j in range(3):
        if board[(0, j)] == board[(1, j)] == board[(2, j)] and board[(0, j)] != '-':
            return board[(0, j)]
    #check diagonals
    if board[(0, 0)] == board[(1, 1)] == board[(2, 2)] and board[(0, 0)] != '-':
        return board[(0, 0)]
    if board[(0, 2)] == board[(1, 1)] == board[(2, 0)] and board[(0, 2)] != '-':
        return board[(0, 2)]
    #no winner yet
    return None

#main game loop
current_player = 'X'
winner = None
while not winner:
    #current game board
    print_board()
    
    #current player's move
    print(f"It's {current_player}'s turn.")
    row = int(input('Enter row (0-2): '))
    col = int(input('Enter column (0-2): '))

    #make the move if the space is empty
    if board[(row, col)] == '-':
        board[(row, col)] = current_player
        #check for a winner
        winner = check_winner()
        #switch to the other player
        if current_player == 'X':
            current_player = 'O'
        else:
            current_player = 'X'
    else:
        print('That space is already taken!')

#print the final game board and winner
print_board()
print(f'{winner} wins!')
