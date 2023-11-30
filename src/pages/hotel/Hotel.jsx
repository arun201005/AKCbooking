import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/footer/Footer'


const Hotel = () => {

  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/423968099.jpg?k=9dfaae7560382cf523794b94e2e0a3a192f56016dd2570ce9028d163d97de1fa&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/423968094.jpg?k=6348f7d66a84162a6bafb4a143c464c5dfb162f34e14c35186af7044e40c2ab2&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/423968034.jpg?k=9ee115c633c7db5ef8faf15c5479844caf17cd12a7ccf5493fe78b37ed6548b9&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/423968097.jpg?k=cb394d812a73334a7b602d7fa73801f9d987250a679e0bf8250f7036166ab7c9&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/423968083.jpg?k=715d93791a7cdc3fe848751f8394fe42e2c07de337504ff257a093e5a8b162e7&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/423968073.jpg?k=567928707f3416eb56a78aa643f366bda4d87dcc0297ecd668bff58331048c64&o=&hp=1'
    },
  ];

  return (
    <div>
      <Navbar></Navbar>
      <Header type='list'></Header>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">FabHotel Rotano Grand</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <span> FabHotel Rotano Grand A-12 Bangalore</span>
          </div>
          <span className="hotelDistance">
            Excellent location- 1.3 km from center
          </span>
          <span className="hotelPriceHl">
            Book a stay over Rs.3000 at this propery and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map(pic=>
              <div className ='hotelImgWrapper'> 
              <img src={pic.src} alt="" className="hotelImg" />
              </div>)}
          </div>
          <div className="hotelDisc">
            <div className="hotelDiscText">
              <h1 className="hotelh1">Stay in the heart of Bangalore</h1>
              <p className='hotelp'>Offering air-conditioned rooms in the Marathahalli district of Bangalore, FabHotel Rotano Grand is 3.6 km from The Heritage Centre & Aerospace Museum. With free WiFi, this 3-star hotel offers room service and a 24-hour front desk. The hotel features family rooms.

All units at the hotel are equipped with a seating area, a flat-screen TV with cable channels and a private bathroom with free toiletries and a shower. At FabHotel Rotano Grand every room comes with bed linen and towels.

Forum Mall, Koramangala is 12 km from the accommodation, while Brigade Road is 12 km away. The nearest airport is Kempegowda International Airport, 41 km from FabHotel Rotano Grand.

Couples particularly like the location — they rated it 9.5 for a two-person trip.

Hotel chain/brand:
FabHotels
Distance in property description is calculated using © OpenStreetMap

Most popular facilities
Room service
24-hour security
24-hour front desk
Lockers
Free WiFi
Family rooms
Air conditioning
Lift</p>
            </div>
            <div className="hotelDiscPrice">
              <h1>Perfect for 9-night stay!</h1>
              <span>located in the real heart of Bangalore, This property has an excellent location score 8.9</span>
              <h2><b>Rs.3000 </b>(9 nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList></MailList>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Hotel