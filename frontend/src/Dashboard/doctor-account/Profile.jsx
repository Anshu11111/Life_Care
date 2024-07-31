import React from "react";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketprice: 0,
    qualifications: [],
    expriences: [],
    timeSlots: [],
    about: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileInputChange = async event => {
    const file=event.target.files[0];
    const data=await uploadImageToCloudinary(file)
   setFormData({...formData,photo:data?.url});
  };
  const updateProfileHandler = async (e) => {
    e.preventDefault();
  };
  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };
  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];
      updateItems[index][name] = value;
      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };
  const deleteItem = (key, index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i != index),
    }));
  };
  const addQualification = (e) => {
    e.preventDefault();
    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "PHD",
      university: "Panjab Medical College",
    });
  };
  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunc("qualifications", index, event);
  };
  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem("qualifications", index);
  };

  const addExprience = (e) => {
    e.preventDefault();
    addItem("expriences", {
      startingDate: "",
      endingDate: "",
      position: "senior surgion",
      hospital: "ABC Hospital",
    });
  };
  const handleExperienceChange = (event, index) => {
    handleReusableInputChangeFunc("expriences", index, event);
  };
  const deleteExperience = (e, index) => {
    e.preventDefault();
    deleteItem("expriences", index);
  };
//time
  const addTimeSlot = (e) => {
    e.preventDefault();
    addItem("timeSlots", {
       day: "sunday", startingTime: "10;00", endingTime: "04:00" 
    });
  };
  const handleTimeSlotChange = (event, index) => {
    handleReusableInputChangeFunc("timeSlots", index, event);
  };
  const deleteTimeSlot= (e, index) => {
    e.preventDefault();
    deleteItem("timeSlots", index);
  };

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>
      <form>
        {/* name */}
        <div className="mb-5">
          <p className="form_label">Name</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form_input"
          />
        </div>
        {/* email */}
        <div className="mb-5">
          <p className="form_label">Email*</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="form_input"
            readOnly
            aria-readonly
            disabled={true}
          />
        </div>
        {/* number */}
        <div className="mb-5">
          <p className="form_label">Phone*</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="form_input"
          />
        </div>
        {/* bio */}
        <div className="mb-5">
          <p className="form_label">Bio*</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className="form_input"
            maxLength={100}
          />
        </div>
        {/* gender */}
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form_label">Gender*</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form_input py-3.5"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className="form_label">Specialization*</p>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="form_input py-3.5"
              >
                <option value="">Specialization</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>
            <div>
              <p className="form_label">Ticket Price*</p>
              <input
                type="number"
                placeholder="100"
                name="ticketprice"
                value={formData.ticketprice}
                className="form_input"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <p className="form_label">Qualifications*</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form_label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate" // Unique name for each date input
                      value={item.startingDate}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form_label">Degree*</p>
                    <input
                      type="text"
                      name="degree" // Unique name for each date input
                      value={item.degree}
                      onChange={(e) => handleQualificationChange(e, index)} // Pass index to handler
                      className="form_input"
                    />
                  </div>
                  <div>
                    <p className="form_label">University*</p>
                    <input
                      type="text"
                      name="university" // Unique name for each date input
                      value={item.university}
                      onChange={(e) => handleQualificationChange(e, index)} // Pass index to handler
                      className="form_input"
                    />
                  </div>
                </div>
                <button
                  onClick={(e) => deleteQualification(e, index)}
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addQualification}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Qualification
          </button>
        </div>

        <div className="mb-5">
          <p className="form_label">Exprience*</p>
          {formData.expriences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form_label">Starting Date*</p>
                    <input
                      type="date"
                      name={`startingDate_${index}`} // Unique name for each date input
                      value={item.startingDate}
                      onChange={(e) => handleExperienceChange(e, index)} // Pass index to handler
                      className="form_input"
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Date*</p>
                    <input
                      type="date"
                      name={`endingDate_${index}`} // Unique name for each date input
                      value={item.endingDate}
                      onChange={(e) => handleExperienceChange(e, index)} // Pass index to handler
                      className="form_input"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form_label">Position*</p>
                    <input
                      type="text"
                      name={`position_${index}`} // Unique name for each date input
                      value={item.position}
                      onChange={(e) => handleExperienceChange(e, index)} // Pass index to handler
                      className="form_input"
                    />
                  </div>
                  <div>
                    <p className="form_label">Hospital*</p>
                    <input
                      type="text"
                      name={`hospital_${index}`} // Unique name for each date input
                      value={item.hospital}
                      onChange={(e) => handleExperienceChange(e, index)} // Pass index to handler
                      className="form_input"
                    />
                  </div>
                </div>
                <button
                  onClick={(e) => deleteExperience(e, index)}
                  className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addExprience}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Exprience
          </button>
        </div>
        <div className="mb-5">
          <p className="form_label">Time Slots*</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-col-4 mb-[30px] gap-5">
                  <div>
                    <p className="form_label">Day*</p>
                    <select
                      name="day"
                      value={item.day}
                      onChange={(e) => handleTimeSlotChange(e, index)}
                      className="form_input py-3.5"
                    >
                      <option value="">Select</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                    </select>
                  </div>
                  <div>
                    <p className="form_label">Starting Time*</p>
                    <input
                      type="time"
                      name={`startingTime_${index}`} // Unique name for each date input
                      value={item.startingTime}
                      onChange={(e) => handleTimeSlotChange(e, index)}// Pass index to handler
                      className="form_input"
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Time*</p>
                    <input
                      type="time"
                      name={`endingTime_${index}`} // Unique name for each date input
                      value={item.endingTime}
                      onChange={(e) => handleTimeSlotChange(e, index)} // Pass index to handler
                      className="form_input"
                    />
                  </div>
                  <div className="flex items-center">
                    <button onClick={(e) => deleteTimeSlot(e, index)} className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button onClick={addTimeSlot} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
            Add TimeSlot
          </button>
        </div>
        <div className="mb-5">
          <p className="form_label">About*</p>
          <textarea
            name="about"
            rows={5}
            value={formData.about}
            placeholder="write about you"
            onChange={handleInputChange}
            className="form_input"
          ></textarea>
        </div>
        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img
                src={formData.photo} // Use previewURL to display the image
                alt="Profile"
                className="w-full h-full rounded-full"
              />
            </figure>
          )}
          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              onChange={handleFileInputChange} // File input change handler
              accept=".jpg, .png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem]
                 text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
            >
              Upload Photo
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            type="submit"
            onClick={updateProfileHandler}
            className="bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
