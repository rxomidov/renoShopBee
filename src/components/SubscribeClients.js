import React from 'react';
import client1 from "../assets/clients/client1.png"
import client2 from "../assets/clients/client2.png"
import client3 from "../assets/clients/client3.png"
import client4 from "../assets/clients/client4.png"
import styled from "styled-components";

export default function SubscribeClients(props) {

    const handleSubmit = () => {

    };
    const handleClick = () => {

    };

    return (
        <SubscibeClientsWrapper>
            <div className="row">
                <div className="col-md-6 p-0">
                    <div className="subscribe text-center">
                        <h3>Get Out Special Discount</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Corporis cupiditate illum nemo neque possimus, similique!
                        </p>
                        <form onSubmit={handleSubmit}>
                            <input className="subscribe-input" type="email" placeholder="Email Address"/>
                            <button onClick={handleClick}
                                    className="btn btn-subscribe"
                                    type="submit">Get Coupon Now
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <div className="clients text-center">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 p-0">
                                <div className="client-image">
                                    <img src={client1} alt="client"/>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 p-0">
                                <div className="client-image">
                                    <img src={client2} alt="client"/>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 p-0">
                                <div className="client-image">
                                    <img src={client3} alt="client"/>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3 p-0">
                                <div className="client-image">
                                    <img src={client4} alt="client"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SubscibeClientsWrapper>
    );
}

const SubscibeClientsWrapper = styled.section`
  
  overflow-x: hidden;
  .subscribe{
    padding: 1rem 0;  
    height: 248px;
    background: #010b39;
    form{
      display:flex;
        justify-content:center;
        align-items: center;
    }
    h3{
      color:#fff;
      font-size: 1.6rem;
      font-family: Poppins;
      margin: 1rem 0;
    }
    p{
      color:#fff;
      margin: 1rem;
      font-size: 12px;
    }
  }
  .subscribe-input{
    font-size: 12px;
    padding: 0.6rem 1rem;
    margin-right: 0.3rem;  
    width: 300px;
  }
  .btn-subscribe{
    background: #3cb878;
    border-radius: 0;
    color: #fff;
    text-transform:uppercase;
    font-size: 12px;
    padding: 0.6rem 1rem;
  }
  .clients{
      background: #f5f6f9;
      padding: 4rem 2rem;
  }
  .client-image{
        display:flex;
        justify-content:center;
        align-items: center;
        vert-align: middle;
        width: 100%;
        height: 120px;
        padding: 1rem;
          img{
           width: 100%;
           object-fit: contain;
          }
      }
  
  @media screen and (max-width: 576px){
    .client-image{
    padding: 6rem 2rem;
    //height: inherit;
      img {
        width: 50%;
      }
      
    }
    .subscribe-input{  
        width: 200px;
      }
  }
`
