const { reformatDate } = require("../utils");

function compareDates(a, b) {
  const dateA = reformatDate(a.Date);
  const dateB = reformatDate(b.Date);
  if (dateA < dateB) {
    return 1;
  } else if (dateA > dateB) {
    return -1;
  } else {
    return 0;
  }
}

function dataModule(data, fromDate, candidate, location, req, res) {
  data.sort(compareDates);
  if (fromDate) {
    const fromDateC = new Date(fromDate);
    if (isNaN(fromDateC)) {
      return res.status(400).json({
        error: "Bad Request",
        message: "fromDate is not a data",
      });
    }
    data = data.filter((d) => reformatDate(d.Date) >= fromDate);
  }

  if (candidate) {
    data = data.filter(
      (d) => d.CandidateName.toLowerCase() === candidate.toLowerCase()
    );
  }

  if (location) {
    data = data.filter(
      (d) => d.LocationName.toLowerCase() === location.toLowerCase()
    );
  }
  return res.json(data);
}

module.exports = dataModule;
