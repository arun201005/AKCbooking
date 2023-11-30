import './featured.css'

const Featured = () => {
  return (
    <div className="fh">
       
        <div className="fhItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/485013872.webp?k=114a8adf3c52de22c72628e35ac6b4b69063a84a1a8699f13b23122b498e5f88&o=" alt=""  className='fhImage' />
        <span className="fhName">Townhouse 1247</span>
        <span className="fhCity">Gurugram</span>
        <span className="fhPrice">Starting from Rs.6000</span>
        <div className="fhRating">
            <button>8.8</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fhItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/458839225.webp?k=ebdf925076129fe76c60d7036fa328f3640e96bd4cd04925de64bf13d0c6e068&o=" alt="" className='fhImage' />
        <span className="fhName">Hotel O'Tree premium</span>
        <span className="fhCity">Mathura</span>
        <span className="fhPrice">Starting from Rs.4500</span>
        <div className="fhRating">
            <button>8.2</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fhItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/495372022.webp?k=2de926223f2fb055d8f27d31e390d88bb2ac29342df7e3b5c595eaf20673feca&o=" alt=""  className='fhImage'/>
        <span className="fhName">Hotel Square Plaza </span>
        <span className="fhCity">Delhi</span>
        <span className="fhPrice">Starting from Rs.5000</span>
        <div className="fhRating">
            <button>8.4</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fhItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/486205472.webp?k=bfaf7149907051ac6925a2b64ba767b9e3524e45c1bd2c8894c4ea5021eeadd2&o=" alt=""  className='fhImage'/>
        <span className="fhName">Hotel lime Tree</span>
        <span className="fhCity">Agra</span>
        <span className="fhPrice">Starting from Rs.4000</span>
        <div className="fhRating">
            <button>8.4</button>
            <span>Excellent</span>
        </div>
        </div>

    </div>
  )
}

export default Featured