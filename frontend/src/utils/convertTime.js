const convertTime = (time) => {
    // Split the input time into hours and minutes
    const timeParts = time.split(":");
    let hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
  
    // Determine AM or PM
    let meridiem = "AM";
    if (hours >= 12) {
      meridiem = "PM";
      if (hours > 12) {
        hours -= 12;
      }
    }
    if (hours === 0) {
      hours = 12; 
    }

    return (
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      " " +
      meridiem
    );
  };
  
  export default convertTime;
  