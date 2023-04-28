function reformatDate(date) {
  const [date2, time] = date.split(" ");
  const dataReformated = date2.split("/").reverse().join("-");
  return new Date(`${dataReformated} ${time}`);
}

module.exports = {
  reformatDate: reformatDate,
};
