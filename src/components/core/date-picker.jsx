import React, { useState } from "react";

const daysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const DatePicker = ({ futureOnly = false, onChange }) => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDates, setSelectedDates] = useState([]);

  const handleNavigation = (offset) => {
    const newDate = new Date(
      currentDate.setMonth(currentDate.getMonth() + offset)
    );
    setCurrentDate(new Date(newDate));
  };

  const isBackDisabled =
  futureOnly &&
  currentDate.getMonth() === today.getMonth() &&
  currentDate.getFullYear() === today.getFullYear();
  const handleDateSelect = (day, monthOffset) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + monthOffset,
      day
    );
    let newSelectedDates;

    if (selectedDates.length === 0 || selectedDates.length === 2) {
      newSelectedDates = [newDate];
    } else {
      newSelectedDates = [...selectedDates, newDate].sort((a, b) => a - b);
    }

    setSelectedDates(newSelectedDates);

    // if (newSelectedDates.length === 2 && onChange) {
    //   onChange(newSelectedDates);
    // }
  };

  const isInRange = (day, monthOffset) => {
    if (selectedDates.length !== 2) return false;
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + monthOffset,
      day
    );
    return date >= selectedDates[0] && date <= selectedDates[1];
  };

  const renderDays = (monthOffset) => {
    const days = [];
    const month = currentDate.getMonth() + monthOffset;
    const year = currentDate.getFullYear();
    const totalDays = daysInMonth(month, year);
    const startDay = new Date(year, month, 1).getDay();

    for (let i = 0; i < startDay; i++) {
      days.push(
        <div key={`empty-${monthOffset}-${i}`} className="w-10 h-10" />
      );
    }

    for (let day = 1; day <= totalDays; day++) {
      const isDisabled = futureOnly && new Date(year, month, day) < today;
      days.push(
        <button
          key={`${monthOffset}-${day}`}
          onClick={() => handleDateSelect(day, monthOffset)}
          className={`w-10 h-10 flex items-center justify-center rounded ${
            isDisabled
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-100 hover:bg-gray-200 "
          } ${
            selectedDates.length > 0 &&
            selectedDates.some(
              (date) => date.getDate() === day && date.getMonth() === month
            )
              ? "bg-green-500"
              : isInRange(day, monthOffset)
              ? "bg-blue-200"
              : ""
          }`}
          disabled={isDisabled}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  const renderMonth = (monthOffset) => {
    const month = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + monthOffset
    );
    return (
      <div className="p-4 bg-white rounded-lg shadow-md w-[300px]">
        <div className="text-center mb-4 flex items-center justify-between">
          {monthOffset === 0 && !isBackDisabled && (
            <button
              onClick={() => handleNavigation(-1)}
              className="px-3 py-1 bg-blue-500 text-white rounded"
            >
              Back
            </button>
          )}
          <span className="text-lg font-semibold">
            {month.toLocaleString("default", { month: "long" })}{" "}
            {month.getFullYear()}
          </span>
          {monthOffset === 1 && (
            <button
              onClick={() => handleNavigation(1)}
              className="px-3 py-1 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          )}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="flex items-center justify-center font-semibold p-2 text-gray-600"
            >
              {day}
            </div>
          ))}
          {renderDays(monthOffset)}
        </div>
      </div>
    );
  };



  return (
    <div className="flex flex-col items-center space-y-4 text-sm">
      <div className="flex flex-col md:flex-row items-center space-y-5   md:space-x-4">
        {renderMonth(0)}
        {renderMonth(1)}
      </div>
    </div>
  );
};

export default DatePicker;
