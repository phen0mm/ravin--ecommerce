import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"
import Header from "./Header"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20rem 8rem;
`
const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`


const Products = () => {
  return (
    <Container>
        <Header heading="Popular Products"/>
        <CardContainer>
          {popularProducts.map(item =>
            <Product key= {item.id} img={item.img} title={item.title} price={item.price}/>
           )}
        </CardContainer>
        
  
    </Container>
  )
}

export default Products
