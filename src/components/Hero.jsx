import React, { useState } from "react";
import vector from "../assets/Vector 1.png";
import vector2 from "../assets/Vector (1).png";
import backgroundImage from "../assets/heroImg.png";
import { LocationIcon } from "./core/icons";
import DatePicker from "./core/date-picker";

const Hero = () => {
  const locations = [
    { city: "Kigali", country: "Rwanda" },
    { city: "Kigali", country: "Rwanda" },
    { city: "Kigali", country: "Rwanda" },
    { city: "Kigali", country: "Rwanda" },
  ];
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [checkinDates, setCheckinDates] = useState({ start: null, end: null });

  const handleLocationSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setFilteredLocations(
      locations.filter(
        (loc) =>
          loc.city.toLowerCase().includes(query) ||
          loc.country.toLowerCase().includes(query)
      )
    );
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(`${location.city}, ${location.country}`);
    setOpen(null);
  };

  const handleDateChange = (type) => (date) => {
    setCheckinDates((prev) => ({ ...prev, [type]: date }));
    setOpen(null);
  };
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [open, setOpen] = useState(null);
  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const [counts, setCounts] = useState({
    adults: 0,
    children: 0,
    rooms: 0,
  });

  const handleIncrement = (type) => () => {
    setCounts((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const handleDecrement = (type) => () => {
    setCounts((prev) => ({
      ...prev,
      [type]: Math.max(prev[type] - 1, 0),
    }));
  };

  const sections = [
    {
      label: selectedLocation || "Where to ?",
      img: vector2,
      component: (
        <div className="w-[250px]">
          <input
            type="text"
            className="w-full px-2 py-1 mb-2 border rounded outline-none"
            placeholder="Search locations..."
            onChange={handleLocationSearch}
          />
          {filteredLocations.map((loc) => (
            <div
              key={loc.city}
              className="flex items-center hover:bg-gray-300 rounded-xl px-2 py-1 cursor-pointer"
              onClick={() => handleLocationSelect(loc)}
            >
              <LocationIcon />
              <div className="">
                <p className="">{loc.city}</p>
                <p className="text-sm text-gray-700">{loc.country}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      label:
        checkinDates.start && checkinDates.end
          ? `${checkinDates.start.toLocaleDateString()} - ${checkinDates.end.toLocaleDateString()}`
          : "Checkin Date",
      img: vector2,
      component: (
        <div>
          <DatePicker futureOnly={true} onChange={handleDateChange("start")} />
          <div className="flex justify-end mt-2">
            <button
              className="bg-primary px-4 text-sm py-2 text-white rounded-xl"
              onClick={() => open === 1 && setOpen(null)}
            >
              Select
            </button>
          </div>
        </div>
      ),
    },
    {
      label: "Rooms",
      img: vector2,
      component: (
        <div className="flex flex-col gap-4 rounded-xl  ">
          {["adults", "children", "rooms"].map((type) => (
            <section
              key={type}
              className="flex flex-row items-center gap-3 justify-between"
            >
              <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
              <section className="flex flex-row items-center gap-5 border-2 border-white rounded-3xl px-3 py-1">
                <p className="cursor-pointer" onClick={handleIncrement(type)}>
                  +
                </p>
                <p>{counts[type]}</p>
                <p className="cursor-pointer" onClick={handleDecrement(type)}>
                  -
                </p>
              </section>
            </section>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div style={divStyle}>
      <div className="flex items-center justify-center px-[5%] lg:px-[10%] py-40 pb-80">
        <div className="flex flex-col gap-8 w-full">
          <div className="w-full md:w-[50%]">
            <img src={vector} alt="" />
            <h1 className="text-5xl text-white">
              No matter where you’re going to, we’ll take you there
            </h1>
          </div>
          <div className="bg-text w-full lg:w-[80%] rounded-md poppins-light flex flex-col md:flex-row items-center gap-2">
            {sections.map((section, index) => (
              <>
                <section
                  key={index}
                  className="relative border-b-2 md:border-b-0 w-full md:border-r-2 border-white cursor-pointer py-2 md:pr-5"
                >
                  <div className="flex flex-row items-center justify-between md:justify-normal gap-6 " onClick={() =>  toggle(index)}>
                    <p>{section.label}</p>
                    <img src={section.img} alt="" />
                  </div>
                  {open === index && (
                    <div
                      className={`px-5 py-8 absolute top-[120%] left-0  md:top-[170%] !z-30 md:-left-[10%]   bg-white flex flex-col gap-4 rounded-xl   !text-black w-full md:w-fit`}
                    >
                      {sections[open].component}
                    </div>
                  )}
                </section>
              </>
            ))}
            <button className="bg-primary text-white px-4 py-2 text-sm rounded-xl w-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
