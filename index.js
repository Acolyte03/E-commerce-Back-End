const Categories = require('./categories');
const Products = require('./product');
const Tags = require('./Tags');
const ProductTags = require('./pTags');
const sequelize = require('./connection');

const seedAll = async () => 
{
    await sequelize.sync({ force: true });
    console.log('\n---- Database Seeded ----\n');
    await Categories();
    console.log('\n---- Category Seeded ----\n');

    await Products();
    console.log('\n---- Product Seeded ----\n');

    await Tags();
    console.log('\n---- Tag Seeded ----\n');

    await ProductTags();
    console.log('\n---- Product Tag Seeded ----\n');

    process.exit(0);
};

seedAll();