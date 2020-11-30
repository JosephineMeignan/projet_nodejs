const express = require('express');
const exphbs = require('express-handlebars');

// import de la Class
const DBManager = require('./db-manager');

//instantiation de notre Objet
const dbManager = new DBManager();

console.log('coucou');

const app = express();
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.use(express.static('public'));

app.get('/', function (req, res) {
    let query = "select * from products";

    const search = req.query.search;

    console.log('search - ' + search);

    if(search) {
        query += " where productName like '%" + search + "%'";
    }

    dbManager.getDb().query(query, function (err, result) {
        if (err) { throw err };

        res.render('home', {
            products: result,
            searchKey: search
        });
    });
});

app.get('/products',(req,resp) => {
    console.log('toto');
    // resp.send('toto');


    let query = "select * from products";

    const search = req.query.search;

    console.log('search - ' + search);

    if(search) {
        query += " where productName like '%" + search + "%'";
    }
    
    dbManager.getDb().query(query, function (err, result) {
        if (err) { throw err };

        resp.send(result);
    });

});

app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});