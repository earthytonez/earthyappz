import { formatInTimeZone } from "date-fns-tz";

export const dateFormat = (date, format) => {
  try {
  return formatInTimeZone(
    date,
    "America/New_York",
    format ? format : "dd MMM yyyy"
  );
  } catch {
    return formatInTimeZone(
      Date.now(),
      "America/New_York",
      format ? format : "dd MMM yyyy"
    )
  }
};  
