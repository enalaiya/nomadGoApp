const { Client } = require("pg");

// Database connection configuration
const dbConfig = {
  user: "username",
  password: "password",
  host: "host",
  port: "port_number",
  database: "database_name",
};

// Create a new PostgreSQL client
const client = new Client(dbConfig);

const getNodes = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM test", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};

// Connect to the database
client
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");

    // Execute SQL queries here

    client.query("SELECT * FROM test", (err, result) => {
      if (err) {
        console.error("Error executing query", err);
      } else {
        console.log("Query result:", result.rows);
      }

      // Close the connection when done
      client
        .end()
        .then(() => {
          console.log("Connection to PostgreSQL closed");
        })
        .catch((err) => {
          console.error("Error closing connection", err);
        });
    });
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL database", err);
  });
