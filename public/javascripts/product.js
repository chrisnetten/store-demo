//----------------------------------------------------------------
// product class
function product(sku, name, description, price, rating, rottenTom, IMDB) {
    this.sku = sku; // product code (SKU = stock keeping unit)
    this.name = name;
    this.description = description;
    this.price = price;
    this.rating = rating;
    this.nutrients = {
        "RottenTomatoes": rottenTom,
        "IMDB": IMDB
    };
}