//----------------------------------------------------------------
// store (contains the products)
//
// NOTE: nutritional info from http://www.cspinet.org/images/fruitcha.jpg
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//
function store() {
    this.products = [
        new product("STW", "Star Wars", "The Force Awekens.", 25, 8.5, 4, 3),
        new product("JCW", "Jurasic World", "Relive the Park.", 25, 7.1, 3, 3),
        new product("TML", "Tomorrowland", "What If The Smartest In The World Shared the Same City.", 25, 6.5, 2, 1),
        new product("DDP", "Deadpool", "A Super Hero With A Mouth.", 25, 8.9, 3, 3),
        new product("RDA", "Ride Along", "", 25, 6.1, 0, 2),
        new product("GRF", "Get Hard", "Getting Ready For Prison Has Never Been Funnier.", 25, 6.1, 1, 2),
        new product("ZLD", "ZooLander", "", 25, 5.7, 1, 2)
    ];
    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "I Would'nt Recommend.",
        "It Was Ok.",
        "It Was Pretty Good.",
        "Really Enjoyable.",
        "A Must See."
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}