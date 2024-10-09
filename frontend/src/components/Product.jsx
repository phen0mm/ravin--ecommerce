import styled from "styled-components"

const Container = styled.div`
    margin-bottom:2rem;
`
const ImageContainer = styled.div`
    height: 40vh;
`


const Image = styled.img`
     width: 80%;
     height: 100%;
     object-fit: cover;
     border-radius: 10px;
`

const Info = styled.div`
    
`

const Icons = styled.div`
    
`

const Title = styled.h2`
  font-size: 50px;
`
const Price = styled.p`
  font-size: 14px;
`

const Product = (props) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={props.img}/>
      </ImageContainer>
      <Info>
        {/* <Title>{props.title}</Title>
        <Price>{props.price}</Price> */}
      </Info>
    </Container>
  )
}

export default Product
