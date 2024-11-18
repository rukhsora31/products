import React, { useEffect, useState } from 'react'
import './Cards.scss'

const Cards = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {
            setData(data.products)
        })
    }, [])

  return (
    <>
    <section className="products">
        <div className="container">
            <div className="products__wrapper">
                
                {data(products => (
                    <div className="products__card">
                        <h1>{products.title}</h1>
                        <h3>{products.price}</h3>
                        <h4>{products.description}</h4>
                        <p>{products.category}</p>
                        <img src={products.image} alt="" />
                        <p>{products.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default Cards
