const express = require('express');
const fs = require('fs');
const mysql = require('mysql');
const app = express();

app.set('port', (process.env.PORT || 8080));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  // Return the main index.html, so react-router render the route in the client
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('client/build', 'index.html'));
  });
}

const host = "localhost";
const user = "root";
const pswd = "";
const dbname = "cv_data";

// config db ====================================
const pool = mysql.createPool({
  host: host,
  user: user,
  password: pswd,
  port: "3306",
  database: dbname
});

const COLUMNSPROFILE = [
  'id',
  'data'
];

const COLUMNSPRSONAL = [
    'id',
    'info_type',
    'info_text'
];

const COLUMNSWK = [
    'id',
    'company_name',
    'date_start',
    'date_end',
    'position',
    'description'
];

const COLUMNSEDU = [
    'id',
    'institution_name',
    'date',
    'description'
];

const COLUMNSSKILLS = [
    'id',
    'name',
    'value'
];

app.get('/api/profile', (req, res) => {

  let queryString = `SELECT * from profile`;

  pool.query(queryString,
         function(err, rows, fields) {
          if (err) throw err;

          if (rows.length > 0){
            res.json(
              rows.map((entry) => {
                const e = {};
                  COLUMNSPROFILE.forEach((c) => {
                  e[c] = entry[c];
                });
                return e;
                })
              );
            } else {
              res.json([]);
            }
      });

});


app.get('/api/personal', (req, res) => {

    let queryString = `SELECT * from personal_info`;

    pool.query(queryString,
        function(err, rows, fields) {
            if (err) throw err;

            if (rows.length > 0){
                res.json(
                    rows.map((entry) => {
                        const e = {};
                        COLUMNSPRSONAL.forEach((c) => {
                            e[c] = entry[c];
                        });
                        return e;
                    })
                );
            } else {
                res.json([]);
            }
        });

});

app.get('/api/work-experience', (req, res) => {

    let queryString = `SELECT * from work_experience`;

    pool.query(queryString,
        function(err, rows, fields) {
            if (err) throw err;

            if (rows.length > 0){
                res.json(
                    rows.map((entry) => {
                        const e = {};
                        COLUMNSWK.forEach((c) => {
                            e[c] = entry[c];
                        });
                        return e;
                    })
                );
            } else {
                res.json([]);
            }
        });

});

app.get('/api/education', (req, res) => {

    let queryString = `SELECT * from education`;

    pool.query(queryString,
        function(err, rows, fields) {
            if (err) throw err;

            if (rows.length > 0){
                res.json(
                    rows.map((entry) => {
                        const e = {};
                        COLUMNSEDU.forEach((c) => {
                            e[c] = entry[c];
                        });
                        return e;
                    })
                );
            } else {
                res.json([]);
            }
        });

});


app.get('/api/skills', (req, res) => {

    let queryString = `SELECT * from skills`;

    pool.query(queryString,
        function(err, rows, fields) {
            if (err) throw err;

            if (rows.length > 0){
                res.json(
                    rows.map((entry) => {
                        const e = {};
                        COLUMNSSKILLS.forEach((c) => {
                            e[c] = entry[c];
                        });
                        return e;
                    })
                );
            } else {
                res.json([]);
            }
        });

});


app.get('/api/contact', (req, res) => {

    let queryString = `SELECT * from contact`;

    pool.query(queryString,
        function(err, rows, fields) {
            if (err) throw err;

            if (rows.length > 0){
                res.json(
                    rows.map((entry) => {
                        const e = {};
                        COLUMNSPROFILE.forEach((c) => {
                            e[c] = entry[c];
                        });
                        return e;
                    })
                );
            } else {
                res.json([]);
            }
        });

});

console.log("Server is running")
app.listen(app.get('port'));
