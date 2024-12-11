# Library ESB Project

## Overview

This project demonstrates the use of an Enterprise Service Bus (ESB) to integrate multiple web services in a library system. The project includes four web services and an ESB flow using MuleSoft.

## Project Structure

- **addbook-service/**: A SOAP web service built with Node.js to add a book for a student.
- **check-availability-service/**: A REST web service built with Spring Boot to check the availability of a book.
- **library-service/**: A REST web service built with Python (Flask) to find other libraries that have a specific book.
- **student-list-service/**: A REST web service built with Node.js to show the list of books borrowed by a student.
- **esb-mule-project/**: The MuleSoft project that integrates the above services.
- **database/**: SQL scripts to set up the required databases.

## Web Services

### Add Book Service

- **Path**: `addbook-service/`
- **Technology**: Node.js, SOAP
- **Description**: Adds a book for a student.

### Check Availability Service

- **Path**: `check-availability-service/`
- **Technology**: Spring Boot, REST
- **Description**: Checks if a book is available.

### Library Service

- **Path**: `library-service/`
- **Technology**: Python (Flask), REST
- **Description**: Finds other libraries that have a specific book.

### Student List Service

- **Path**: `student-list-service/`
- **Technology**: Node.js, REST
- **Description**: Shows the list of books borrowed by a student.

## ESB Mule Project

- **Path**: `esb-mule-project/`
- **Technology**: MuleSoft
- **Description**: Integrates the above web services to create a workflow for the library system.

## Database

- **Path**: `database/`
- **Description**: Contains SQL scripts to set up the required databases.

## Setup Instructions

### Prerequisites

- Node.js
- Java (for Spring Boot)
- Python
- MuleSoft Anypoint Studio
- MySQL

### Steps

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/library-esb-project.git
    cd library-esb-project
    ```

2. **Set up the databases**:
    - Create the databases using the SQL scripts in the `database/` directory.

3. **Run the Add Book Service**:
    ```sh
    cd addbook-service
    npm install
    node app.js
    ```

4. **Run the Check Availability Service**:
    ```sh
    cd check-availability-service
    mvn spring-boot:run
    ```

5. **Run the Library Service**:
    ```sh
    cd library-service
    pip install -r requirements.txt
    python app.py
    ```

6. **Run the Student List Service**:
    ```sh
    cd student-list-service
    npm install
    node app.js
    ```

7. **Run the MuleSoft ESB Project**:
    - Open `esb-mule-project` in MuleSoft Anypoint Studio.
    - Deploy the project.

## Workflow

1. **Requesting a Book**:
    - A student requests a specific book from the library.

2. **Checking Book Availability**:
    - The library checks the book's status:
        - If the book is available, the library processes the loan and provides the student with the list of books they have already borrowed.
        - If the book is not available, the library informs the student of the library or location where the book is currently available.

## Objective

The objective of this project is to understand the ESB bus and the communication between web services in a service-oriented architecture, focusing on SOAP and REST web services.

## License

This project is licensed under the MIT License.
