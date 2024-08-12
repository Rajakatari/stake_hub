const mysql2 = require("mysql2");
// require("dotenv").config();

const railwayDbUrl = `mysql://root:DGXTHELZeAbywNoJoLdHLKtSqqegQJIq@viaduct.proxy.rlwy.net:30456/tradingplatform`;

const db = mysql2.createConnection(railwayDbUrl);

// const db = mysql2.createConnection({
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
// });

db.connect((error) => {
  if (error) throw error;
  console.log("DB connected.");
});

module.exports = db;
