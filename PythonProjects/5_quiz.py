#list of questions as a list of dictionaries for a quiz game
quiz = [
    {
        "question": "Who is the world’s highest-paid athlete in 2021?",
        "choices": ["A. Conor McGregor (Mixed Martial Arts)", "B. Lionel Messi (Soccer)", "C. Cristiano Ronaldo (Soccer)", "D. LeBron James (Basketball)"],
        "answer": "A"
    },
    {
        "question": "What height is a regulation NBA basket?",
        "choices": ["A. 10 feet / 3.02 meters", "B. 11 feet / 3.02 meters", "C. 8 feet / 3 meters", "D. 10 feet / 8 meters"],
        "answer": "A"
    },
    {
        "question": "What sporting event has a strict dress code of all-white?",
        "choices": ["A. cricket", "B. Wimbledon", "C. Baseball", "D. Football"],
        "answer": "B"
    },
    {
        "question": "What is the national sport of Japan?",
        "choices": ["A. Uta-garuta", "B. Janken (Rock Paper Scissor)", "C. Daruma Otoshi", "D. Sumo Wrestling"],
        "answer": "D"
    }
]

user_answers = []
score = 0

#loop through the questions and ask answers from the user
for i in range(len(quiz)):
    print(quiz[i]["question"])
    for j in range(len(quiz[i]["choices"])):
        print(quiz[i]["choices"][j])
        print("-----------------------------------------")
    user_answer = input("Enter your answer (A, B, C, or D): ")
    user_answers.append(user_answer.upper())
    if user_answers[i] == quiz[i]["answer"]:
        print("Correct!")
        score += 1
    else:
        print("Incorrect.")
    print()

#print the user's score
print("Quiz complete! You scored {} out of {}.".format(score, len(quiz)))
