import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-16 rounded-xl" >
        <div className="hero-content flex-col lg:flex-row">
          <div className='lg:w-1/2 relative'>
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" data-aos="flip-left"data-aos-easing="linear"
        data-aos-duration="1000" />
          <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" data-aos="flip-right"data-aos-easing="linear"
        data-aos-duration="1000"/>
          </div>
          <div className='lg:w-1/2 space-y-5 p-4' data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000">
            <h3 className='text-3xl text-red-500 font-bold'>About Us</h3>
            <h1 className="text-3xl font-bold">We are qualified & lot of experienced in this field</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <button className="btn btn-error hover:bg-red-600">Get more info</button>
          </div>
        </div>
      </div>
    );
};

export default About;