const mysql = require('mysql');


class DBManager {

    db;

    constructor() {
        const that = this;

        this.db = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "toto90",
            database: "classicmodels"
        });
        this.db.connect(function (err) {
            if (err) {
                throw err;
            }
            console.log(that.db);
            console.log("Connecté à la base de données MySQL!");
        });

    }
    getDb() {
        return this.db;
    }
}


// class ImNotExported {

//     constructor() {
//         console.log ("")
//     }
// }
// export de la Class  dans notre module
module.exports = DBManager;