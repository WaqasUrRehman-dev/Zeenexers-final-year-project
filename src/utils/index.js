export const dateFormatter = (originalDate) => {
  const date = new Date(originalDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  return formattedDate;
};
