export default {
    name: 'product',
    type: 'document',
    title: 'product',
    fields: [
        {
            name:'name',
            type:'string',
            title:'Name Of Product'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Product images',
            of: [{type: 'image'}],
        },
        {
            name:'description',
            type: 'text',
            title: 'Description of product'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product slug',
            options: {
                source: 'name',
            },
        },
        {
            name: 'price',
            title: 'price',
            type: 'number',
        },
        {
            name: 'category',
            title: 'Product Category',
            type: 'reference',
            to: [
                {
                    type: 'category',
                },
            ],
        },
    ],            
}