function formatDate(isoDateString) {
  // Check if date is a valid Date object
  // Create a new Date object from the ISO date string
  const date = new Date(isoDateString);

  // Options for formatting the date
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };

  // Format the date using the options
  return date.toLocaleDateString("id-ID", options);
}

export default formatDate;
