import React from "react";
import { formateDate } from "../../utils/formateDate";
const DoctorAbout = (name,about,qualifications,expriences) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Varun Verma
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
          praesentium quas tenetur, quod consequuntur sapiente ea ullam incidunt
          facilis maxime, vero optio harum iure tempora, quaerat aut cumque
          excepturi voluptates! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Numquam saepe consequuntur eos ipsum excepturi sit
          ab totam facere placeat perferendis explicabo eaque atque, sapiente
          molestias, officiis veniam corporis obcaecati nobis.
        </p>
      </div>
      <div className="mt-12">

        <h3 className="text-[20px] leading[30px] text-headingColor font-semibold ">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("05-30-2000")} - {formateDate("06-20-2005")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgion
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital,Delhi
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
              {formateDate("09-20-2004")} - {formateDate("09-20-2024")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgion
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital,Delhi
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
        Experience
      </h3>
      <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
        <li className="p-4 rounded bg-[#fff9ea]">
          <span className="text-yellowColor text-[15px] leading-6 font-semibold">
            {formateDate("2014-08-13")} - {formateDate("2010-07-04")}
          </span>
          <p className="text-[16px] leading-6 font-medium text-textColor">Sr. Surgeon</p>
          <p className="text-[14px] leading-5 font-medium text-textColor">New Apollo Hospital, New York.</p>
        </li>

        <li className="p-4 rounded bg-[#fff9ea]">
          <span className="text-yellowColor text-[15px] leading-6 font-semibold">
            {formateDate("2014-08-13")} - {formateDate("2010-07-04")}
          </span>
          <p className="text-[16px] leading-6 font-medium text-textColor">Sr. Surgeon</p>
          <p className="text-[14px] leading-5 font-medium text-textColor">New Apollo Hospital, New York.</p>
        </li>
      </ul>
    </div>
    </div>
  );
};
export default DoctorAbout;
