import { IDateGridStrings, IDateFormatting, ICalendarStrings } from './dateFormatting.types';
import { formatDay } from './formatDay';
import { formatYear } from './formatYear';
import { formatMonthDayYear } from './formatMonthDayYear';
import { formatMonthYear } from './formatMonthYear';

export const DEFAULT_LOCALIZED_STRINGS: IDateGridStrings = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};

export const DEFAULT_DATE_FORMATTING: IDateFormatting = {
  formatDay: formatDay,
  formatYear: formatYear,
  formatMonthDayYear: formatMonthDayYear,
  formatMonthYear: formatMonthYear,
  parseDate: (dateStr: string) => {
    const date = Date.parse(dateStr);
    if (date) {
      return new Date(date);
    }

    return null;
  },
  ...DEFAULT_LOCALIZED_STRINGS,
};

export const DEFAULT_CALENDAR_STRINGS: ICalendarStrings = {
  ...DEFAULT_DATE_FORMATTING,

  goToToday: 'Go to today',
  openCalendarTitle: 'Open calendar',
  weekNumberFormatString: 'Week number {0}',
  prevMonthAriaLabel: 'Previous month',
  nextMonthAriaLabel: 'Next month',
  prevYearAriaLabel: 'Previous year',
  nextYearAriaLabel: 'Next year',
  prevYearRangeAriaLabel: 'Previous year range',
  nextYearRangeAriaLabel: 'Next year range',
  closeButtonAriaLabel: 'Close',
  selectedDateFormatString: 'Selected date {0}',
  todayDateFormatString: "Today's date {0}",
  monthPickerHeaderAriaLabel: '{0}, select to change the year',
  yearPickerHeaderAriaLabel: '{0}, select to change the month',
  isRequiredErrorMessage: 'A date selection is required',
  invalidInputErrorMessage: 'Manually entered date is not in correct format.',
  isOutOfBoundsErrorMessage: 'The selected date is from the restricted range.',
};
