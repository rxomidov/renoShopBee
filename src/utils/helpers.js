// helper functions
export function featuredProducts(items) {
    return items.filter(item => {
        return item.fields.featured === true;
    })
}

export function categoryDesktop(items) {
    return items.filter(item => {
        return item.fields.category === 'desktop';
    })
}

export function categoryLaptop(items) {
    return items.filter(item => {
        return item.fields.category === 'laptop';
    })
}

export function categoryPhone(items) {
    return items.filter(item => {
        return item.fields.category === 'phone';
    })
}

export function paginate(products) {
    const itemsPerPage = 4;
    const numberOfPages = Math.ceil(products.length / itemsPerPage);
    // const newProducts = Array.from({length: numberOfPages},()=>{
    //     return products.splice(0, itemsPerPage);
    // });
    const newProducts = Array.from({length: numberOfPages}, (_, index) => {
        const start = index * itemsPerPage;
        return products.slice(start, start + itemsPerPage);
    });
    //console.log(products)
    //console.log(newProducts);
    return newProducts;
}