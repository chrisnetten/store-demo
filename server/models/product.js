var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema ( {
	name: String,
    description: String,
    shine : Number,
    price: Number,
    rarity: Number,
    color: String,
    faces: Number,
    images: [],
    reviews: []
	
},
{
	collection: 'product'
});

module.exports = mongoose.model('Product', ProductSchema);