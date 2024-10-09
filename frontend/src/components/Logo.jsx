import styled from 'styled-components'

const LogoImg = styled.img`
  height: 50px;
  width: 70px;
`
const Logo = () => {
  return (
    <div>
      <LogoImg src="assets/ravine-logos/ravine-logo-black.png" alt="" />
    </div>
  )
}

export default Logo
