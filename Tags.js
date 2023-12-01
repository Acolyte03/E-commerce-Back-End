
const { Tag } = require('../models');
const tagData = 
[
    {
        tag_name: 'music',
    },{
        tag_name: 'blue',
    },{
        tag_name: 'red',
    },{
        tag_name: 'green',
    },{
        tag_name: 'white',
    },{
        tag_name: 'yellow',
    },{
        tag_name: 'pop',
    },
];

const seedTags = () => Tag.bulkCreate(tagData);
module.exports = seedTags;