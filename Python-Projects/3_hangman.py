import random

#list of words to choose from
words = ['python', 'java', 'javascript', 'ruby', 'php', 'perl', 'swift', 'csharp', 'typescript', 'go']

#random word from the list
secret_word = random.choice(words)

#list to hold the guessed letters
guessed_letters = []

#number of tries
tries = 6

print("Welcome to the Guess the Word game!")
print("You have 6 tries to guess the secret word.")
print("---------------------------------------------")
print("The word has", len(secret_word), "letters.")
print("---------------------------------------------")
print("The words are related to programming languages.")
print("---------------------------------------------")

#loop until the player runs out of tries 
while tries > 0:
    #number of tries left and the guessed letters
    print("You have", tries, "tries left.")
    print("Guessed letters:", guessed_letters)

    #letter guess from the player
    guess = input("Guess a letter: ").lower()

    #check if the guess is a letter and if it hasn't been guessed before
    if guess.isalpha() and guess not in guessed_letters:
        #add the guess to guessed letters list
        guessed_letters.append(guess)

        #check if the guess is in the secret word
        if guess in secret_word:
            print("Good guess!")
        else:
            print("Sorry, that letter is not in the word.")
            tries -= 1
    else:
        print("Invalid guess. Please enter a letter you haven't guessed before.")

    #check if the player has guessed all the letters in the secret word
    if set(secret_word) <= set(guessed_letters):
        print("Congratulations, you guessed the word!")
        break

#player runs out of tries, print the secret word
if tries == 0:
    print("Sorry, you ran out of tries. The secret word was", secret_word)
