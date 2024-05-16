import { addDays, endOfDay, isBefore, startOfDay } from 'date-fns';

export function GenerateDatesFromYearBeginning() {
  const now = new Date();
  const firstDayOfTheYear = startOfDay(new Date(now.getFullYear(), 0));
  const toDay = endOfDay(new Date());

  const dates = [];
  for (
    let compareDate = new Date(firstDayOfTheYear);
    isBefore(compareDate, toDay);
    compareDate = addDays(compareDate, 1)
  ) {
    dates.push(new Date(compareDate));
  }

  return dates;
}
