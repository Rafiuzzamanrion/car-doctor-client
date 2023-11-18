


import { FaMapSigns } from "react-icons/fa";
import { BsFillTelephoneFill, BsGlobeAmericas } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
const Contact = () => {
  const formTab = [{ name: "" }, { name: "" }, { name: "" }, { name: "" }];
  const contactTab = [
    {
      icon: <FaMapSigns className="text-4xl" />,
      title: "Address",
      desription: `198 West 21th Street, Suite 721 New York NY 10016`,
    },
    {
      icon: <BsFillTelephoneFill className="text-4xl" />,
      title: "Contact Number",
      desription: `+ 1235 2355 98`,
    },
    {
      icon: <FaPaperPlane className="text-4xl" />,
      title: "Email Address",
      desription: `info@carDoctor.com`,
    },
    {
      icon: <BsGlobeAmericas className="text-4xl" />,
      title: "Website",
      desription: "carDoctor.com",
    },
  ];
  return (
    <>
      <div>
        {" "}
        <div className="md:w-96 mx-auto text-center my-24"data-aos="fade-right"data-aos-easing="linear"
        data-aos-duration="1000">
          <div className="text-2xl font-bold text-error mb-5">Contact Us</div>
          <div className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dolorem sint, magni magnam impedit dignissimos rerum
            modi error ex libero corrupti ab, numquam, eius maxime! Soluta quos
            culpa possimus tempora.
          </div>
        </div>
        {/* Cards */}
        <div className="container mx-auto my-12 h-auto r">
          <div className="flex gap-5 justify-center flex-wrap h-auto  lg:flex-nowrap rounded-xl">
            {contactTab.map((x, index) => {
              return (
                <div key={index} className="card w-full  shadow-xl h-auto ">
                  <div className="card-body items-center flex-grow-0  text-center  "data-aos="fade-down"data-aos-easing="linear"
        data-aos-duration="800">
                    <h2 className="card-title ">{x.icon}</h2>
                    <p className="text-lg font-bold my-3 text-error">{x.title}</p>
                    <div className="">
                      <p className=" text-lg font-semibold">{x.desription}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" container mx-auto  flex flex-wrap shadow-2xl my-20 rounded-xl p-5">
        <div className=" w-full p-4">
          <form className="  shadow-md rounded-lg px-2 pt-6 pb-8 mb-4"data-aos="fade-right"data-aos-easing="linear"
        data-aos-duration="1000">
            <div className="flex  flex-col">
              {formTab.map((x, index) => {
                return (
                  <div key={index} className="mx-auto form-control w-full">
                    <label className="label">
                      <span className="label-text">What is your name?</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full  "
                    />
                  </div>
                );
              })}
              <div className="w-full my-4 flex justify-end ">
                <button className="btn  bg-red-400 hover:bg-red-600 rounded-full w-full">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        
      </div>
    </>
  );
};

export default Contact;