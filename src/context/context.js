import React, {createContext, useState} from "react";

export const ProductContext = createContext();

export default function ProductProvider({children}) {
    const [loading, setLoading] = useState(false);

    return (
        <ProductContext.Provider value={loading}>
            {children}
        </ProductContext.Provider>
    )
}