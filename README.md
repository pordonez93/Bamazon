# Bamazon

In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

Running this application will first display all of the items available for sale. Including the ids, names, and prices of products for sale.

![Working-App Gif](https://github.com/pordonez93/Bamazon/blob/master/Images/working-app.gif)

The app then prompts users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

![Sufficient-Inventory](https://github.com/pordonez93/Bamazon/blob/master/Images/image-2.jpg)

Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.
   * If not, the app will log the phrase `Insufficient product!`, and then prevent the order from going through.

![Out-of-Stock](https://github.com/pordonez93/Bamazon/blob/master/Images/image-1.jpg)

If the store _does_ have enough of the product, the customer's order will be fulfilled.
   * This the updates the SQL database to reflect the remaining quantity.

   ![MySQL-Before](https://github.com/pordonez93/Bamazon/blob/master/Images/sql-table-1.jpg)

   ![MySql-After](https://github.com/pordonez93/Bamazon/blob/master/Images/sql-table-2.jpg)
   
   * Once the update goes through, the customer will see the total cost of their purchase.
