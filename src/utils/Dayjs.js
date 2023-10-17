const dayjs = require("dayjs");

class Dayjs {
  Date() {
    return dayjs().format("DD-MM-YYYY");
  }
}

module.exports = { Dayjs };
