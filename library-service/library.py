from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)

db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'biblio'
}

def check_book_availability(title):
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor(dictionary=True)

        query = "SELECT * FROM books WHERE title = %s"
        cursor.execute(query, (title,))
        book = cursor.fetchone()

        cursor.close()
        connection.close()

        return book

    except mysql.connector.Error as err:
        print(f"Erreur: {err}")
        return None

def find_book_in_other_libraries(title):
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT libraries.name AS library_name 
        FROM library_books 
        JOIN libraries ON library_books.library_id = libraries.id
        JOIN books ON library_books.book_id = books.id
        WHERE books.title = %s
        """
        cursor.execute(query, (title,))
        libraries = cursor.fetchall()

        cursor.close()
        connection.close()

        return libraries

    except mysql.connector.Error as err:
        print(f"Erreur: {err}")
        return None

@app.route('/check_book/<string:title>', methods=['GET'])
def check_book(title):
    book_info = check_book_availability(title)

    if book_info:
        libraries = find_book_in_other_libraries(title)
        if libraries:
            response = {
                'title': book_info['title'],
                'library_name': [lib['library_name'] for lib in libraries] 
            }
        else:
            response = {
                'title': book_info['title'],
                'library_name': 'Non disponible dans les bibliothèques'
            }
    else:
        other_libraries = find_book_in_other_libraries(title)
        if other_libraries:
            response = {
                'error': 'Livre non disponible dans cette bibliothèque',
                'available_in_libraries': [lib['library_name'] for lib in other_libraries]
            }
        else:
            response = {'error': 'Livre non trouvé dans aucune bibliothèque'}

    return jsonify(response)


if __name__ == '__main__':
    app.run(debug=True, port=3000)

