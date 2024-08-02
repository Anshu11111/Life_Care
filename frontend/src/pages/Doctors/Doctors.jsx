import DoctorCard from "./../../components/Doctors/DoctorCard";
import { doctors } from "./../../assets/data/doctors";
import Testimonial from "../../components/Testinomial/Testimonial";
import { BASE_URL } from "../../utils/congig";
import useFetchData from "../../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { useEffect, useState } from "react";
const Doctors = () => {
  const [query, setQuery] = useState("");
  const [debouncequery, setdebouncequery] = useState("");
  const handleSearch = () => {
    setQuery(query.trim());
  };

  useEffect(() => {
    const timeout=setTimeout(()=>{
      setdebouncequery(query)
    },700);
    return () => clearInterval(timeout);
  },[query]);
  
  const {
    data: doctors,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors?query=${query}`);

  return (
    <div>
      <section className="bg-[#afff9e]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search doctor by name or profesion"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
              ;
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text_para text-center">
              World class care for everyone.our health system offers
              unmatched,expert healthcare.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </div>
  );
};

export default Doctors;
