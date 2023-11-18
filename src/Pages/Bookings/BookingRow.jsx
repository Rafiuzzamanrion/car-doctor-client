

const BookingRow = ({booking,handleDelete,handleBookingConfirm}) => {
    const {_id,image,service_title,price,date,status} = booking;

    
    return (
      <tr>
    
      <td>
        
          <div className="avatar">
            <div className="mask mask-squircle md:w-20 h-16 sm:w-8">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
         
      
      </td>
      <td>
        {service_title}
       
      </td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        {status==='confirm'?<span className="font-bold text-error">Confirmed</span>:
          <button onClick={()=> handleBookingConfirm(_id)}  className="btn btn-outline btn-error">Please Confirm</button>}
      </th>
      <th>
      <button onClick={()=> handleDelete(_id)} className="btn btn-outline btn-error">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
      </th>
    </tr>
    );
};

export default BookingRow;