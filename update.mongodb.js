use ('ecommerce');

db.products.updateMany({category: "Electronics"}, 
    {$set: {category: "IT Peripherals"}}
);