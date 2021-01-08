// helper functions
export function feturedProducts(items) {
    return items.filter(item=>{
        return item.fields.featured===true;
    })
}