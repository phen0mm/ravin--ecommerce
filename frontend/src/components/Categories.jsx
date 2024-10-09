import styled from "styled-components"
import CategoryItem from "./CategoryItem"
import { categories } from "../data"
import Header from "../components/Header";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    gap: 40px;
    margin:0 50px ;
`

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
`

const Categories = () => {
  return (
    <Container>
      <Header heading="Categories"/>
      <CardContainer>
         {categories.map((item)=>
         <CategoryItem key={item.id} title={item.title} image={item.img} />
        )}
      </CardContainer>
    </Container>
  )
}

export default Categories;
