import React, { useState, useEffect, useCallback, useMemo } from 'react'
import useFetch from '../../9-custom-hooks/setup/2-useFetch'


const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders


const calculateMostExpensive = (data) => {
  return(
    data.reduce((total, item) => {
      const price = item.fields.price
      if (price >= total) {
        total = price
      }
      return total
    }, 0) / 100
  )
}

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)


  const addToCard = useCallback(() => {
    setCart(cart + 1)
  }, [cart])


  const mostExpensive = useMemo( ()=> calculateMostExpensive(products), [products])



  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: '3rem' }}>
        cart : {cart}
      </h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCard={addToCard}/>
    </>
  )

}



const BigList = React.memo(({ products, addToCard }) => {

  useEffect(() => {
    console.log('Big List is Called')
  },)


  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct addToCard={addToCard} key={product.id} {...product}></SingleProduct>
      })}
    </section>
  )

})



const SingleProduct = ({ fields, addToCard }) => {

  useEffect(() => {
    console.count('Single item is Called')
  },)

  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url



  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCard}>Add to Cart</button>
    </article>
  )

}



export default Index