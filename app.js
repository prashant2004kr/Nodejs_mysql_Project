const mysql = require("mysql2");

// Create Connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Prashant2004@"
});

// Connect to MySQL
con.connect(function(err) {

    if (err) throw err;
    console.log("Connected!");

    // Create Database
    con.query("CREATE DATABASE IF NOT EXISTS appon", function(err, result) {

        if (err) throw err;
        console.log("Database Created");

        // Use Database
        con.query("USE appon", function(err) {

            if (err) throw err;

            // Create Table
            let sql = `CREATE TABLE IF NOT EXISTS alia(
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(20),
                address VARCHAR(50)
            )`;

            con.query(sql, function(err, result) {

                if (err) throw err;
                console.log("Table Created");

                // Insert Records
                let insert = `INSERT INTO alia(name,address)
                VALUES
                ('Sanjay','New Delhi'),
                ('Maya','Mysore'),
                ('Sanju','Bangalore'),
                ('Manju','Mangalore')`;

                con.query(insert, function(err, result) {

                    if (err) throw err;
                    console.log("Records Inserted");

                    // Select All Records
                    con.query("SELECT * FROM alia", function(err, result) {

                        if (err) throw err;

                        console.log("\nAll Records");
                        console.table(result);

                        // Select Record
                        con.query("SELECT * FROM alia WHERE id=1", function(err, result) {

                            if (err) throw err;

                            console.log("\nRecord with ID=1");
                            console.table(result);

                            // Delete Record
                            con.query("DELETE FROM alia WHERE id=2", function(err, result) {

                                if (err) throw err;
                                console.log("Record Deleted");

                                // Add Column
                                con.query("ALTER TABLE alia ADD phone_number BIGINT", function(err, result) {

                                    if (err) throw err;
                                    console.log("New Column Added");

                                    // Drop Column
                                    con.query("ALTER TABLE alia DROP COLUMN phone_number", function(err, result) {

                                        if (err) throw err;
                                        console.log("Column Dropped");

                                        // Update Record
                                        con.query("UPDATE alia SET name='Mamtha' WHERE id=3", function(err, result) {

                                            if (err) throw err;
                                            console.log("Record Updated");

                                            // Drop Primary Key
                                            con.query("ALTER TABLE alia DROP PRIMARY KEY", function(err, result) {

                                                if (err)
                                                    console.log(err.sqlMessage);
                                                else
                                                    console.log("Primary Key Dropped");

                                                // Drop Table
                                                con.query("DROP TABLE alia", function(err, result) {

                                                    if (err) throw err;
                                                    console.log("Table Dropped");

                                                    con.end();

                                                });

                                            });

                                        });

                                    });

                                });

                            });

                        });

                    });

                });

            });

        });

    });

});