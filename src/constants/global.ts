export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const gender = ["Female", "Male", "Other"];

export const genderOptions = gender.map((item) => ({
  value: item,
  label: item,
}));

export const bloodGroups: string[] = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
];

const weekdays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export const bloodGroupOptions = bloodGroups.map((item) => ({
  value: item,
  label: item,
}));

export const monthOptions = monthNames.map((item) => ({
  value: item,
  label: item,
}));

export const weekDaysOptions = weekdays.map((item) => ({
  value: item,
  label: item,
}));
