import React from 'react';
import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {ProductContext} from "../context/context";
import Loading from "../components/Loading";
import styled from "styled-components";
import productRating from '../assets/productRating.png';

export default function ProductDetails(props) {
    const {id} = useParams();
    const history = useHistory();
    //console.log(id)
    const {products} = React.useContext(ProductContext);
    const product = products.find(product => product.sys.id === id)
    console.log(product);

    if (!products) {
        return <Loading/>
    }
    const {fields} = product;
    let url = fields.image.fields.file.url;

    return (
        <ProductWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="product-img">
                            <img src={url} alt="product image"/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h3 className="product-title">
                            {fields.title}
                        </h3>
                        <div>
                            <h4 className="product-price">
                                {fields.price}
                            </h4>
                            <img src={productRating} alt=""/>
                        </div>
                        <p className="product-description">
                            {fields.description}
                        </p>
                        <button
                            className="btn btn-primary btn-block"
                            onClick={() => {
                                //addToCart(product);
                                history.push('/cart')
                            }}
                        >
                            add to cart
                        </button>
                    </div>
                </div>
            </div>
        </ProductWrapper>
    );
}

const ProductWrapper = styled.section`
  .product-img{
  
    img{
      width: 100%;
    }
  }
`
