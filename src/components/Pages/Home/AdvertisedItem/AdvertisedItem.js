import React from 'react';
import img from '../../../../assets/homepageImg/saree.jpg'
import img2 from '../../../../assets/homepageImg/lehenga.jpg'
import img3 from '../../../../assets/homepageImg/tops1.jpg'
import img4 from '../../../../assets/homepageImg/jean.jpg'
const AdvertisedItem = () => {
    return (
      <div className='bg-slate-400 h-2/4 pt-6 mt-9 w-5/6 mx-auto '>
        <h1 className='lg:text-5xl bg-pink-200 py-8 text-2xl  font-bold text-center rounded lg:w-4/5 text-indigo-900 mx-auto '>Our Most ReSelling Products</h1>

          <div className="carousel  mt-12">
            
            <div id="slide1" className="carousel-item relative lg:w-2/4">
              <img src={img} className="rounded lg:w-4/5 lg:h-2/4 mx-auto max-w-sm" alt=''/>
              <div className="absolute flex justify-between   transform -translate-y-1/2 left-5 right-5 top-36">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide2" className="carousel-item relative lg:w-2/4">
              <img src={img2} className="rounded lg:w-4/5 lg:h-2/4 mx-auto max-w-sm" alt='' />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-36 ">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle ">❯</a>
              </div>
            </div> 
            <div id="slide3" className="carousel-item relative min-w-screen lg:w-2/4">
              <img alt='' src={img3} className="rounded lg:w-4/5 lg:h-2/4 mx-auto max-w-sm" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-36 ">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide4" className="carousel-item relative lg:w-2/4">
              <img src={img4} className="rounded lg:w-4/5 lg:h-2/4 mx-auto max-w-sm" alt='' />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-36 ">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
      </div>
    );
};

export default AdvertisedItem;