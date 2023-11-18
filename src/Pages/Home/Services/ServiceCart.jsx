import {Link} from "react-router-dom";


const ServiceCart = ({service}) => {
    const {title,img,price,_id} = service;
   
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img data-aos="zoom-in"data-aos-easing="linear"
        data-aos-duration="600" src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body "data-aos="fade-down"data-aos-easing="linear"
        data-aos-duration="600">
    <h2 className="card-title">{title}</h2>
    <p className="text-lg text-error">Price : ${price}</p>
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    <div className="card-actions">
      <Link to={`/checkout/${_id}`}><button className="btn btn-error hover:bg-red-600">Book Now</button></Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCart;