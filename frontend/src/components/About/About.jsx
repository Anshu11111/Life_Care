import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCarding from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container ">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* {about img} */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-1%] lg:right[22%]">
              <img src={aboutCarding} />
            </div>
          </div>

          {/* abou-content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellendus laudantium reprehenderit! Ullam ab eius necessitatibus impedit similique doloribus, sit error minima ea. Quidem qui temporibus consequuntur tenetur corporis vitae.</p>

            <p className="text_para mt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sit mollitia blanditiis odio fugiat eaque praesentium, nostrum voluptas itaque amet nulla consequatur magni esse neque unde! Eveniet aut iusto ullam.</p>

            <Link to='/'><button className="btn">Learn More</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
