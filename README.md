# Library Management System (SOA)

This project demonstrates a Service-Oriented Architecture (SOA) for managing library operations. It integrates multiple web services through a MuleSoft ESB to streamline book borrowing and availability checks.

## Key Features
- **Requesting Books**: Students can request specific books.
- **Book Availability Check**: Determines if a book is available or redirects students to an alternate library.
- **Book Borrowing**: Processes book loans for students.
- **Notifications**: Alerts students about book availability.

## Technologies Used
- **MuleSoft ESB**: For service orchestration.
- **Node.js**: For RESTful and SOAP web services.
- **JMS**: For message queueing.
- **MySQL**: For database management.

## Project Structure
See the repository structure [here](#repository-structure).

## Workflow
1. A student requests a book via the MuleSoft API.
2. The ESB orchestrates the request:
   - If the book is available, it processes the loan.
   - If not, it checks alternate libraries and notifies the student.
3. The JMS system logs the request for auditing.

## How to Run
- Set up the database using `schema.sql` and `seed.sql`.
- Start each service using its respective `README.md` instructions.
- Deploy the MuleSoft project in Anypoint Studio and run it.

