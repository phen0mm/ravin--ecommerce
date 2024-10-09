import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements";
import Slider from "../components/Slider"
import Categories from "../components/Categories";
import Benifits from "../components/Benifits";
import Products from "../components/Products";
const Home = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Benifits />
      <Categories />
      <Products />
    </div>
  )
}

export default Home;
