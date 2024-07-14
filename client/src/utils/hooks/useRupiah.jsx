function formatRupiah(amount) {
  // Check if input is a number
  if (typeof amount !== "number") {
    return "Invalid input";
  }

  // Convert number to string and split into array of parts
  let parts = amount.toFixed(0).toString().split(".");

  // Format the integer part with thousand separators
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Join the parts and add IDR prefix
  return "Rp " + parts.join(".");
}

export default formatRupiah;
