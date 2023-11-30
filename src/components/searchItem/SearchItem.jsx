import { useNavigate } from 'react-router-dom'
import './searchItem.css'

const SearchItem = () => {

  const navigate = useNavigate()
  const handleClick=()=>{
    navigate('/hotels/:id')
  }

  return (
    <div className="searchItem">
      <img src="https://cf.bstatic.com/xdata/images/hotel/square600/423968060.webp?k=9d330a51c00249ce84a02433180e7d3fd70263952bf85dc4fc41f572c635622a&o=" alt="" className='siImage'/>
      <div className="siDesc">
      <h1 className="siTitle">FabHotel Rotano Grand</h1>  
      <span className="siDistance">1.7km from center</span>
      <span className="siTaxi">Free airport taxi</span>
      <span className="siSubtitle">
        Studio Apartment with Air conditioning
      </span>
      <span className="siFeature">
        Entire studio . 1 bathroom . 21m 1 full bed
      </span>
      <span className="siCancel">
        Free cancellation
      </span>
      <span className="siCancelSubtitle">
        You can cancel later, so lock in this great price today!
      </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs.3000</span>
          <span className="siTaxiOp"> Includes taxes and fees</span>
          <button onClick={handleClick} className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem