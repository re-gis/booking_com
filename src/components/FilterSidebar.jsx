import React from "react";
import SelectButton from "./core/select-button";

const filterCategories = {
  Facilities: [
    "Parking",
    "Free Wifi",
    "Restaurant",
    "Swimming Pool",
    "Gym",
    "Spa",
  ],
  "Property Type": ["Apartment", "Villa", "Hotel", "Hostel", "Cottage"],
  "Property Rating": ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
};

const FilterSidebar = ({ onFiltersChange }) => {
  const handleFilterChange = (category, label, selected) => {
    onFiltersChange(category, label, selected);
  };

  return (
    <div className="p-4 bg-white rounded-lg  border min-w-[25%] w-[25%] space-y-4 h-fit poppins-medium">
      <div className="border-b">
        <p className="text-lg font-semibold mb-2">Filter By:</p>
      </div>
      {Object.entries(filterCategories).map(([category, options]) => (
        <div key={category}>
          <h3 className="text-lg font-semibold mb-2">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {options.map((option) => (
              <SelectButton
                key={option}
                label={option}
                onChange={(label, selected) =>
                  handleFilterChange(category, label, selected)
                }
              />
            ))}
          </div>
          <div className="border-t border-gray-300 my-4"></div>
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar;
