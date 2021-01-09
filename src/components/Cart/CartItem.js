import React from 'react';
import styled from "styled-components";

export default function CartItem({fields}) {
    return (
        <CartItemWrapper>
            <h1>{fields.title}</h1>
        </CartItemWrapper>
    );
}

const CartItemWrapper = styled.div`
  
`
