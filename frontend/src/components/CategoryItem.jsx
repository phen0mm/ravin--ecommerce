import styled from "styled-components"
import Button from "./Button"


const Container = styled.div`
  flex: 1;
  position: relative;
  height: 70vh;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
  font-size: 50px;
  padding: 10px;
  margin-bottom: 20px;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
`

const CategoryItem = (props) => {
  return (
    <Container>
      <Image src={props.image}/>
      <Info>
        <Title>{props.title}</Title>
        <Button />
      </Info>
      
    </Container>
  )
}

export default CategoryItem;
