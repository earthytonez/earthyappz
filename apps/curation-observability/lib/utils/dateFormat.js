import {
  formatInTimeZone
} from "date-fns-tz";

export const dateFormat = (date, format) => {
  try {
    return formatInTimeZone(
      date,
      "America/New_York",
      format ? format : "dd MMM yyyy"
    );

  } catch (err) {
    console.log(err);
    return date;
  }
};
