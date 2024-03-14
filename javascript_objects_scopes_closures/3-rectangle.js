import sys
import requests

def main():
    if len(sys.argv) != 3:
        print("Usage: python3 script_name.py <URL> <output_file>")
        sys.exit(1)

    url = sys.argv[1]
    output_file = sys.argv[2]

    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise exception for bad status codes

        with open(output_file, "w", encoding="utf-8") as file:
            file.write(response.text)
        
        print(f"Content successfully saved to {output_file}")
    except requests.exceptions.RequestException as e:
        print(f"Error fetching content from URL: {e}")
        sys.exit(1)
    except IOError as e:
        print(f"Error writing to file: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
