#the longest word in the list.
def longestWord(words):
    longest_word = ""
    for word in words:
        if len(word) > len(longest_word):
            longest_word = word
    return longest_word

str = input("Enter a list of words: ")
words = str.split()
longest_word = longestWord(words)
print("The longest word is: ",longest_word)
