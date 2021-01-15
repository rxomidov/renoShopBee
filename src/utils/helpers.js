// helper functions
export function featuredProducts(items) {
    return items.filter(item=>{
        return item.fields.featured===true;
    })
}

export function categoryDesktop(items) {
    return items.filter(item=>{
        return item.fields.category==='desktop';
    })
}

export function categoryLaptop(items) {
    return items.filter(item=>{
        return item.fields.category==='laptop';
    })
}