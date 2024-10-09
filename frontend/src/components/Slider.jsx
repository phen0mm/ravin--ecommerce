import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sliderItems } from '../data';
import Button from './Button';

const Container = styled.div`
    width: 100vw;
    height: 85vh;
    display: flex;
    margin-bottom: 80px;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    z-index: 2;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease ;
  transform: translate(${props=> props.slideIndex * -100}vw);
`
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(180deg, #faf3f3 0%, #${props => props.bg} 99%, white);
`
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  margin-top: 30px;
`
const Image = styled.img`
  height: 80%;
  margin-left: 100px;
    box-shadow: 7px 7px 5px 5px rgba(0, 0, 0, 0.1) ;
`

const InfoContainer = styled.div`
  flex: 1;
  margin: 0 60px 100px 0;

  text-align: left;
`

const Info = styled.p`
width: fit-content;
  border: 2px solid black;
  font-size: 20px;
  padding: 10px ;
`

const Title = styled.h1`
  font-size: 80px;
  padding-left: 0;
  border-bottom: 1px solid black;
  font-weight: bold;
`
const Descrirption = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 4px 0 30px 0;
  letter-spacing: 3px;
`


const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex-1: 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex+1: 0)
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={()=> {handleClick("left")}}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item=>{
          return(
            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
            <Image src={item.img}/>
            </ImgContainer>
            <InfoContainer>
              <Info>{item.outfitDesc}</Info>
              <Title>{item.title}</Title>
              <Descrirption>{item.desc}</Descrirption>
              <Button />
            </InfoContainer>
            </Slide>
          )
        })}
      </Wrapper>
      <Arrow direction="right" onClick={()=> {handleClick("right")}}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  )
}

export default Slider;
