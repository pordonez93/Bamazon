var mysql = require('mysql');
var inquirer = require('inquirer');
var cTable = require('console.table');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'guate@09',
    database: 'bamazondb',
});

connection.connect(function(err){
    if(err) throw err;
    start();
});

function start(){
    connection.query('SELECT * FROM products', function (err, res){
        if (err) throw err;
        var table=[];
        for(var i=0; i< res.length; i++){
            output =
            [
                [res[i].itemID], [res[i].productName], [res[i].price]
             ];
        table.push(output)
        }
        console.table(['ID', 'Name', 'Price'], table);
        questions();
    })
}

function questions(){
    inquirer.prompt([
        {
            message: "Type in the product ID of the item you'd like to order.",
            type: "input",
            name: "productID"
        },{
            message: "how many would you like to purchase?",
            type: "input",
            name: "QTY"
        }
    ]).then(function(answer){
        var productID = parseInt(answer.productID);
        var QTY = parseInt(answer.QTY);
        newOrder( productID, QTY);
    });
}

function newOrder(productID, QTY){
    connection.query('SELECT * FROM products', function (err, res){
        if (err) throw err;
        var product;
        for(var i=0; i < res.length; i++){
            if(res[i].itemID == productID){
                product=res[i]
            }
        }

        if(product.stockQTY >= QTY){
            var totalPrice = QTY * product.price;
            var newQTY = product.stockQTY - QTY;
            var query = 'UPDATE products SET stockQTY = ? where ?';
            console.log(product.productName + " is in stock! Order now complete." + "\r\n" + "Your grand total is: $" + totalPrice);
            connection.query(
                query,
                [newQTY,
                    {itemID: productID}
                ],
                function(err,res){
            })
            connection.end()
        }else{
            console.log("Sorry insufficient product in stock, your order has been cancelled.")
            connection.end()
        }
    })
};
