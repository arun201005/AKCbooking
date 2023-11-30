import './photos.css'

const Photos = () => {
  return (
    <div className="photos">
        <div className="photosItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="" className='photosImg' />
            <div className="featuredTitles">
              <h1>Bangalore</h1>
              <h2>451 properties</h2>
            </div>
        </div>
        <div className="photosItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=" alt="" className='photosImg' />
            <div className="featuredTitles">
              <h1>Jaipur</h1>
              <h2>452 properties</h2>
            </div>
        </div>
        <div className="photosItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" className='photosImg' />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>453 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Photos

