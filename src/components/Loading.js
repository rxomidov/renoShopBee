import React from 'react';
import loading from '../assets/loading.gif'

export default function Loading(props) {
    return (
        <div className="loading">
            <div className="container text-center">
                <h1>Loading...</h1>
                <img src={loading} alt="loading"/>
            </div>
        </div>
    );
}
