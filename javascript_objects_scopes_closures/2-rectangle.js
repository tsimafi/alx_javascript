#!/usr/bin/python3
import MySQLdb
import sys

def filter_states(username, password, database, state_name):
    # Connect to MySQL server
    db = MySQLdb.connect(host="localhost", port=3306, user=username, passwd=password, db=database)

    # Create a cursor object using cursor() method
    cursor = db.cursor()

    # Construct SQL query using format with user input
    sql = "SELECT * FROM states WHERE name = %s ORDER BY id ASC"
    data = (state_name,)

    # Execute SQL query
    cursor.execute(sql, data)

    # Fetch all the rows in a list of tuples
    results = cursor.fetchall()

    # Display results
    for row in results:
        print(row)

    # Disconnect from server
    db.close()

if __name__ == "__main__":
    # Check if all required arguments are provided
    if len(sys.argv) != 5:
        print("Usage: {} <mysql_username> <mysql_password> <database_name> <state_name>".format(sys.argv[0]))
        sys.exit(1)

    # Retrieve arguments
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]
    state_name = sys.argv[4]

    # Call the function
    filter_states(username, password, database, state_name)
