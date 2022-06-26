import { getInput, setFailed } from '@actions/core';
import { createConnection } from 'mysql';

var con = createConnection({
    host: "localhost",
    user: getInput("username"),
    password: getInput("password"),
    database: getInput("database")
});

con.connect(function (err) {
    if (err) throw err;
    con.query(getInput("query"), function (err, result, _fields) {
        if (err) {
            setFailed("");
            throw err;
        }
        console.log(result);
    });
    con.end((err) => {
        if (err) {
            setFailed("");
            throw err;
        }
    })
});
