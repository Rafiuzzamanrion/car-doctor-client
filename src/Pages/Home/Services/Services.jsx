import { useEffect, useRef, useState} from "react";
import ServiceCart from "./ServiceCart";
import {BsFillArrowRightSquareFill} from "react-icons/bs";



const Services = () => {
const [services,setServices] = useState([]);
const [ascending,setAscending] = useState(true);
const [search,setSearch] = useState('');

// ===== useRef is alternative of event.target.value =========
const searchRef = useRef(null); 


useEffect(()=>{
 
fetch(`https://car-doctor-server-inyegj4x9-rafiuzzamanrion.vercel.app/services?search=${search}&sort=${ascending? 'ascending':'descending'}`)
.then(res => res.json())
.then(data => {
    
    setServices(data)
    
})



},[ascending,search])
const handleSearch = () =>{
    console.log(searchRef.current.value)
    setSearch(searchRef.current.value)
}

    return (
        <div className="mt-16 space-y-10">
            <div className="text-center space-y-6 items-center"data-aos="fade-right"data-aos-easing="linear"
        data-aos-duration="1000">
            <h3 className="text-2xl font-bold text-red-500">Services</h3>
            <h2 className="text-5xl ">Our Service Area</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised  <br /> words which do not look even slightly believable. </p>
            <div className="form-control">
  <div className="input-group flex items-center justify-center">
    <input ref={searchRef} type="text" placeholder="Search…" className="input input-bordered" />
    <button onClick={handleSearch} className="btn btn-square bg-error">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>

        </div>
        <div>
        <button onClick={()=> setAscending(!ascending)}  className="btn btn-outline btn-error">{ascending? 'Price : High to low':'Price : Low to high'} <BsFillArrowRightSquareFill/></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-16">
            
            {
                services.map(service => <ServiceCart key={service._id} service={service}></ServiceCart>)
            
            }
        </div>
        </div>
    );
};

export default Services;