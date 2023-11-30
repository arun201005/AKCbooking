import Featured from '../../components/featuredHotels/Featured';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import Photos from '../../components/Photos/Photos';
import Property from '../../components/propertyList/Property';
import "./home.css";

const Home = () => {
  return (
   <div>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Photos/>
      <h1 className='homeTitle'>Browse by property type</h1>
      <Property></Property>
      <h1 className='featuredTitle'>Homes guests love</h1>
      <Featured/>
      <MailList></MailList>
      <Footer></Footer>
    </div>
   </div>
  )
}

export default Home