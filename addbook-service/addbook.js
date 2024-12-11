const express = require('express');
const soap = require("soap");
const bodyParser = require("body-parser");
const fs = require("fs");
const mysql = require('mysql');


const app = express();
const PORT = 3001;
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  database: "soap"
});

app.use(bodyParser.raw({ type: () => true, limit: "5mb" }));

const service = {
  LibraryService: {
    LibraryPort: {
      borrowBook: function(args) {
        const studentId = args.studentId;
        const bookTitle = args.bookTitle;

        console.log("Request received:", args);

        return {
          content: `Le livre "${bookTitle}" a été emprunté avec succès par l'étudiant ${studentId}.`
        };
      }
    }
  }
};

const wsdl = fs.readFileSync("./soapwsdl.wsdl", "utf8");

soap.listen(app, "/UserContentService", service, wsdl, () => {
  console.log(
    `SOAP service is running on http://localhost:${PORT}/UserContentService`
  );
});

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
