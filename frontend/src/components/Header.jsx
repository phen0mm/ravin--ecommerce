import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 7rem 0 1rem 0;
`
const Heading = styled.h2`
  font-size: 50px;
  margin-bottom: 0.45rem;
`
const Line = styled.hr`
  width: 7rem;
  color: black;
  background-color: black;
  border: none;
  border-radius: 20px;
  height: 0.35rem;
`

const Header = (props) => {
  return (
    <Container>
        <Heading>{props.heading}</Heading>
        <Line/>
    </Container>
    
  )
}

export default Header
