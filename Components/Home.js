import React from 'react';
import { Link } from 'react-router-dom';
import HomeCards from './HomeCards';
import Homecards2 from './Homecards2';
// import MyImg from './l2.jpg';

 const ElectronicDevices = [
  {
    id : 1,
    Productname : 'Refrigerator',
    Img : 'https://www.mylloyd.com/media/products/2_zoom13.jpg'  

  },
  {
    id : 2,
    Productname : 'Smart Phones',
    Img : 'https://m.media-amazon.com/images/I/71geVdy6-OS._SL1500_.jpg'

  },
  {
    id : 3,
    Productname : 'Smart Watches',
    Img : 'https://images.samsung.com/is/image/samsung/assets/in/2108/pcd/watches/mo/PCD_showcase_3_card_watch4_MO.png?$264_264_PNG$'

  },
  {
    id : 4,
    Productname : 'Pendrives',
    Img : 'https://n4.sdlcdn.com/imgs/i/6/1/SanDisk-Ultra-Flair-32-GB-SDL869195861-1-452b2.jpg'

  }
];
const ElectronicDevices2 = [
{
  id: 1,
  Productname : 'Speakers',
  Img: 'https://m.media-amazon.com/images/I/61bkHlyrK-L._SY450_.jpg'
},
{
  id: 2,
  Productname : 'Headphones',
  Img: 'https://www.sony-asia.com/image/8f499d4640b363762e66edd1a4916a10?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF'
},
{
  id: 3,
  Productname : 'LED tv',
  Img : 'https://static.digit.in/product/bf6e3444c161bc8728b635b4a5f406b519b57ed8.jpeg?tr=w-1200'
}

];
function Home() {
  return(
    <>
       <section className='bg-primary p-5 text-center'>
        <div className='container'>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='mx-3'>
                  <h3>Today's Deal</h3>
                  <h1>Upto <span className='text-light'>30% offer </span> for <span className='text-light'>Redmi Mobiles</span></h1>
                  <Link to='/Shoping' className='btn btn-warning my-3'>See what is special</Link>
                </div>
                <img src='https://images.anandtech.com/doci/16524/X-T30_DSF4322_678x452.jpg' alt='Advertisement Img' className='w-25 img-fluid d-none d-sm-block'/>
            </div>
        </div>
      </section>
      <section className='p-5  bg-light'>
        <div className='container'>
            <h2 className='text-center mb-5'>Looking for anything to see</h2>
          <div className='row g-3'>    
              {
                ElectronicDevices.map((Items,index) => {
                    return <HomeCards key={index} Products={Items} />
                })
              }
          </div>
              <h2 className='text-center mt-5'>Up to 35% offer for you</h2>
          <div className='row g-3 py-5'>
                 {
                   ElectronicDevices2.map((Myvalues, index) => {
                    return <Homecards2 key={index} Products={Myvalues} />
                    })
                 }
        </div>
            <h4 className='text-center'>Go to <Link to='/Shoping'> Products </Link> page to see more</h4>
        </div>
       </section>
    </>
  )
}

export default Home;
