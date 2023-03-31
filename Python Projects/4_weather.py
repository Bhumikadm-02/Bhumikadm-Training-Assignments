import requests
import json

def get_weather(city):
    city = input("Enter city name: ")
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid=450a9d622a56bff861d328ffbea10a4b"
    response = requests.get(url)
    data = json.loads(response.text)
    weather = data["weather"][0]["description"]
    temperature = data["main"]["temp"]
    feels_like = data["main"]["feels_like"]
    print(f"Weather in {city}: {weather}")
    print(f"Temperature: {temperature} K")
    print(f"Feels like: {feels_like} K")

get_weather("city")
