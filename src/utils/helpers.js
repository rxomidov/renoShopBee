// helper functions
export function featuredProducts(items) {
    return items.filter(item=>{
        return item.fields.featured===true;
    })
}

export function categoryDesktop(data) {
    return data.filter(item=>{
        return item.fields.category==='desktop';
    })
}