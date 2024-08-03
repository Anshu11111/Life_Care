import React from "react";
import convertTime from "../../utils/convertTime";
import { BASE_URL } from "../../utils/congig";
import { toast } from "react-toastify";
import { token } from "../../utils/congig";
const SidePanel = ({ doctorId, ticketprice, timeSlots }) => {

  const bookingHandler = async () => {
    try {
      // Send a POST request to the server to create a checkout session
      const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json', // Ensure the Content-Type is set
        },
      });
     console.log(res);
      // Parse the response as JSON
      const data = await res.json();
 
      // Check if the response was successful
      if (!res.ok) {
        throw new Error(data.message || 'Please try again');
      }
  
      // Redirect to the Stripe checkout session URL if available
      if (data.session && data.session.url) {
        window.location.href = data.session.url;
      }
  
    } catch (err) {
      // Show an error message using toast
      toast.error(err.message || 'An error occurred');
    }
  };
  
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text-para font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketprice} BDT
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text-para font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {item.day.charAt(0).toUpperCase()+item.day.slice(1)}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
               {convertTime (item.startingTime)} - {convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={bookingHandler} className="btn px-2 w-full rounded-md">Book Appointment</button>
    </div>
  );
};

export default SidePanel;
