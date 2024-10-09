import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Logo from './Logo';
import { Badge } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Container = styled.nav`
   background-color: #faf3f3;
   height: 10vh;
  
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 20px;
  cursor: pointer;
  font-weight: 700;
`

const SearchContainer = styled.div`
  border: 2px solid black;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding:5px 7px ;
  border-radius: 10px;
`
const Input = styled.input`
  border: none;
  background-color: transparent;
  font-size: 20px;
  font-weight: 700;
  height: fit-content;
  width:100px ;

  &:focus {
    outline: none;
  }
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;
`
const MenuItem = styled.div`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <SearchIcon style={{fontSize: "30px"}} />
          </SearchContainer>
        </Left>
        <Center><Logo /></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingBasketIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
