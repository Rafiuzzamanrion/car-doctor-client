import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'


const Banner = () => {
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="600" className="carousel w-full lg:h-[700px] md:h-[700px] justify-between rounded-xl">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={img1}className="w-full rounded-xl" />
          <div className="absolute h-full flex items-center top-0 left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] md:h-[700px]"data-aos="fade-right"data-aos-easing="linear"
        data-aos-duration="1000">
            <div className='text-white lg:space-y-7 lg:w-1/2 md:w-1/2 pl-12'>
            <h2 className='lg:text-6xl font-bold md:text-6xl'>Affordable Price For Car Servicing</h2>
            <p>
            There are many variations of passages of  available, but the majority have suffered alteration in some form
            </p>
            <div className='md:space-y-10'>
            <button className="btn btn-error mr-5 hover:bg-red-600">Discover</button>
            <button className="btn btn-outline btn-error">Latest project</button>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 


        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2}className="w-full rounded-xl" />
          <div className="absolute h-full flex items-center top-0 left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] md:h-[700px]">
            <div data-aos="fade-right"data-aos-easing="linear"
        data-aos-duration="1000" className='text-white lg:space-y-7 lg:w-1/2 md:w-1/2 pl-12'>
            <h2 className='lg:text-6xl font-bold md:text-6xl'>Affordable Price For Car Servicing</h2>
            <p>
            There are many variations of passages of  available, but the majority have suffered alteration in some form
            </p>
            <div className='md:space-y-10'>
            <button className="btn btn-error mr-5 hover:bg-red-600">Discover</button>
            <button className="btn btn-outline btn-error">Latest project</button>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3}className="w-full rounded-xl" />
          <div data-aos="fade-right"data-aos-easing="linear"
        data-aos-duration="1000" className="absolute h-full flex items-center top-0 left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] md:h-[700px]">
            <div className='text-white lg:space-y-7 lg:w-1/2 md:w-1/2 pl-12'>
            <h2 className='lg:text-6xl font-bold md:text-6xl'>Affordable Price For Car Servicing</h2>
            <p>
            There are many variations of passages of  available, but the majority have suffered alteration in some form
            </p>
            <div className=' md:space-y-10 sm:space-y-10'>
            <button className="btn btn-error mr-5 hover:bg-red-600">Discover</button>
            <button className="btn btn-outline btn-error">Latest project</button>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4}className="w-full rounded-xl" />
          <div className="absolute h-full flex items-center top-0 left-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] md:h-[700px]">
            <div data-aos="fade-right"data-aos-easing="linear"
        data-aos-duration="1000" className='text-white lg:space-y-7 lg:w-1/2 md:w-1/2 pl-12'>
            <h2 className='lg:text-6xl font-bold md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
            <p>
            There are many variations of passages of  available, but the majority have suffered alteration in some form
            </p>
            <div className='md:space-y-10'>
            <button className="btn btn-error mr-5 hover:bg-red-600">Discover</button>
            <button className="btn btn-outline btn-error">Latest project</button>
            </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 




      </div>
    );
};

export default Banner;