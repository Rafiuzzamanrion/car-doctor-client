import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../Providers/Auth";
import BookingRow from "./BookingRow";
import Swal from 'sweetalert2'
import {useNavigate} from "react-router-dom";


const Bookings = () => {
    const {user} = useContext(AuthContext);
   
    const [bookings,setBookings] = useState([]);
    const navigate = useNavigate();
    const url = `https://car-doctor-server-murex-iota.vercel.app/bookings?email=${user?.email}`

    useEffect(()=>{
      //--------- after the url, this is the part of verifying authorization by access token------------
        fetch(url,{
          method:'GET',
          headers:{authorization:`bearer ${localStorage.getItem('car-doctor-token')}`},
          // --------end of the part--------------
          
        })
      
        .then(res => res.json())
        .then(data =>{
          if(!data.error){
            setBookings(data)
          }
          else{
            navigate('/')
          }
          })
    },[url,navigate]);

    const handleDelete = id =>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://car-doctor-server-murex-iota.vercel.app/bookings/${id}`,{
            method:'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = bookings.filter( booking => booking._id !== id);
              setBookings(remaining);
            }
          })
  





        }
      })
    }
    // handle delete end
    const handleBookingConfirm = id =>{
      fetch(`https://car-doctor-server-murex-iota.vercel.app/bookings/${id}`,{
          method:'PATCH',
          headers: {'content-type':'application/json'},
          body:JSON.stringify({status:'confirm'})
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.modifiedCount > 0){
            // update state
            const remaining = bookings.filter( booking => booking._id !== id);
            const updated = bookings.find(booking => booking._id === id);
            updated.status = 'confirm';
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
          }
        })
    }
   
    return (
        <div>
           <div className="bg-base-200 p-8 rounded-xl">
           <h2 className="text-3xl text-center">Your All Bookings  : {bookings.length}</h2>
           </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th> Image</th>
        <th >Services</th>
        <th >Date</th>
        <th >Price</th>
        <th> Status</th>
        <th> Delete</th>
      </tr>
    </thead>
    <tbody>
   {
    bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingRow>)
   } 
     
      
     
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Bookings;