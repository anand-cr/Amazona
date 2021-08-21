import data from '../data.js';

// #create a render function that return a list of products inside a ul
const HomeScreen = {
    // return an unordded list of products
    // #use template literals
    render: () => {
        const { products } = data;
        return `
        <ul class="products">
        ${products.map(
            (product) =>`
        <li>
            <div class="product">
                <a href="/#/product/1">
                    <img src="${product.image}" alt="${product.name}"/>
                </a>
                <div class="product-name">
                    <a href='/#/product/1'>
                        ${product.name}
                    </a>
                </div>
                <div class="product-brand">
                    ${product.brand}
                </div>
                <div class="product-price">
                    $${product.price}
                </div>
            </div>
        </li>

    `
            
            
        ).join('\n')}
    `

    },

};

export default HomeScreen;


