create database bamazonDB;
use bamazonDB;

create table products (
	itemID integer(10) not null auto_increment,
    productName varchar(50) null,
    departmentName varchar(50) null,
    price decimal(10, 2) null,
    stockQTY integer(10),
    primary key(itemID)
);

insert into products(itemID, productName, departmentName, price, stockQTY)
values(1, "shampoo", "beauty", 7.99, 25);

select * from products;


        res.forEach(row =>{
            var values = [
                [row.itemID,
                row.productName,
                row.price]
            ];
        console.table(['ID', 'Name', 'Price'], values);  
        })
