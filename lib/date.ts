export const getCurrentDate = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()];

  return `${dayOfWeek}, ${dayOfMonth} ${month}`;
};

export const getTimeOfDay = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 6 && currentHour < 18) {
    return "day";
  } else {
    return "night";
  }
};
