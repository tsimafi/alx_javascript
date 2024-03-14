#!/usr/bin/python3
import MySQLdb
import sys

if __name__ == "__main__":
    # Connect to MySQL server
    db = MySQLdb.connect(host="localhost", port=3306, user=sys.argv[1], passwd=sys.argv[2], db=sys.argv[3])

    # Create a cursor object using cursor() method
    cursor = db.cursor()

    # Construct SQL query using format with user input
    sql = "SELECT * FROM states WHERE name = '{}' ORDER BY id ASC".format(sys.argv[4])

    # Execute SQL query
    cursor.execute(sql)

    # Fetch all the rows in a list of lists
    results = cursor.fetchall()

    # Display results
    for row in results:
        print(row)

    # Disconnect from server
    db.close()
