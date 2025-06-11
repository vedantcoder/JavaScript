//price range objects

let priceRange = [
    {
        symbol : '$',
        minPrice : 0,
        maxPrice : 10,
        tag : 'Cheap',
    },
    {
        symbol : '$$',
        priceRange : '100-200',
        minPrice : 11,
        maxPrice : 20,
        tag : 'Budget',
    },
    {
        symbol : '$$$',
        minPrice : 21,
        maxPrice : 30,
        tag : 'Premium',
    },
]
console.log(priceRange);