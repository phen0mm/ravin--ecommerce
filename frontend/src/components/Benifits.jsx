import styled from "styled-components"
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
const Container =  styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`

const Wrapper = styled.div`
    display: flex;
    justify-content:space-around ;
    align-items: center;
    width: 80%;
    background-color: rgba(197, 164, 141, 0.2);
    border-radius: 20px;
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
`
const Info = styled.p`
    text-align: center;
`
const Benifits = () => {
  return (
    <Container>
     <Wrapper>

     <InfoContainer> 
        <LocalShippingOutlinedIcon style={{ fontSize:"60px"}}/>
        <Info>Quick Delivery</Info>
      </InfoContainer>

      <InfoContainer>
        <VerifiedRoundedIcon style={{ fontSize:"60px"}}/>
        <Info>Trusted Quality</Info>
      </InfoContainer>

      <InfoContainer>
        <SupportAgentRoundedIcon style={{ fontSize:"60px"}}/>
        <Info>Customer Support</Info>
      </InfoContainer>
      

     </Wrapper>
    </Container>
  )
}

export default Benifits
