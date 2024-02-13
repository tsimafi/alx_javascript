import sys
import requests

def count_movies_with_character(api_url):
    try:
        response = requests.get(api_url)
        response.raise_for_status()
        films_data = response.json()['results']
        
        # Count movies where "Wedge Antilles" is present
        count = 0
        for film in films_data:
            characters = film['characters']
            if 'https://swapi-api.alx-tools.com/api/people/18/' in characters:
                count += 1
        
        return count

    except requests.exceptions.RequestException as e:
        print("Error:", e)
        return -1

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <API_URL>")
        sys.exit(1)
    
    api_url = sys.argv[1]
    movies_with_wedge = count_movies_with_character(api_url)
    print(movies_with_wedge)
