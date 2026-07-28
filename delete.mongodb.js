use('ecommerce');
//db.orders.deleteMany({status:"Delivered"});
db.products.deleteMany({price:{$lt:20}})