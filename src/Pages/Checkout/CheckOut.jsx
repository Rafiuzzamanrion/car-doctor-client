import {useContext, useState} from "react";
import {useLoaderData} from "react-router-dom";
import {AuthContext} from "../../Providers/Auth";



const CheckOut = () => {
    const service = useLoaderData();
    const {title,price,_id,img} = service;
    const {user} = useContext(AuthContext)
    const [success,setSuccess] = useState('');

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        console.log(price)
        const booking = {
            customerName: name,
            email: email,
            date:date,
            image:img,
            service_title:title,
            service_id:_id,
            price: price
        }
        fetch('https://car-doctor-server-inyegj4x9-rafiuzzamanrion.vercel.app/bookings',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
               setSuccess(<div className="alert alert-success">
               <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               <span>Your order has been delivered to checkout  !!!  
               Please confirm it on <span className="font-bold">My bookings</span>
               </span>
             </div>)
            }
        })
        
    }


    return (
        <div>
            <h1 className="text-center text-3xl">Book service : {title}</h1>
            <div className="mt-10">
              {success}
            </div>
           
           
      <form onSubmit={handleBooking} className="card-body">
       <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input name="name" defaultValue={user?.displayName} type="text" placeholder="your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" required />
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" defaultValue={user?.email} name="email" placeholder="your email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Charge</span>
          </label>
          <input type="text" name="charge" placeholder="your number" className="input input-bordered" required defaultValue={'$'+price} />
        </div>
       </div>
       
        <div className="form-control mt-6">
          
          <input className="btn btn-error btn-block hover:bg-red-600" type="submit" value="Confirm Order" />
        </div>
      </form>
    </div>
 
    );
};

export default CheckOut;