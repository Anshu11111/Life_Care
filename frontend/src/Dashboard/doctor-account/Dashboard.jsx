import Error from "../../components/Error/Error";
import Loader from '../../components/Loader/Loading'
import Tabs  from "./Tabs";
import useFetchData from "../../../hooks/useFetchData";
import { BASE_URL } from "../../utils/congig";
import { useState } from "react";

const Dashboard = () => {
  const { data, loading, error } = useFetchData(`${BASE_URL}/doctors/profile/me`);

  const [tab,setTab]=useState('overview')
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader />}
        {error && <Error />}
        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} /> 
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;
