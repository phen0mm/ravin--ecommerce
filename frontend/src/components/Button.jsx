import styled from "styled-components"

const Cta = styled.button`
  padding: 10px 20px 10px 20px;
  margin-top: -10px;
  border: none;
  font-size: 20px;
  background-color: black;
  color: white;
  cursor: pointer;

  &:hover{
    color: black;
    background-color: transparent;
    border: 2px solid black;
    font-weight: 500;
    transition: all 0.25s ease-in;
  }
`

const Button = () => {
  return (
    <div>
      <Cta>SHOP NOW</Cta>
    </div>
  )
}

export default Button
