export default DateHelpers = {
  /**
   * getWeekStart gets start of week for a given data
   *
   * @param {Date} s date for which to get the monday of the week
   * @return {Date} date corresponding to the monday of the week
   */
  getWeekStart: function (s) {
    const date = new Date(s);
    const diff =
      date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    const initialDate = new Date(date.setDate(diff));
    return initialDate;
  },

  /**
   * getWeekBefore gets the date a week before the input date
   *
   * @param {Date} s date for which to calculate a week prior
   * @return {Date} date corresponding to a week prior from input
   */
  getWeekBefore: function (s) {
    const p = new Date(s);
    p.setDate(s.getDate() - 7);
    return p;
  },

  /**
   * getWeekAfter gets the date a week after the input date
   *
   * @param {Date} s date for which to calculate a week after
   * @return {Date} date corresponding to a week after from input
   */
  getWeekAfter: function (s) {
    const p = new Date(s);
    p.setDate(s.getDate() + 7);
    return p;
  },

  /**
   * getWeekArray gets the dates corresponding to the week starting at the input date
   *
   * @param {Date} s date for which to return the 7 days starting at s
   * @return {[Date,...]} arrays of dates corresponding to week starting at s
   */
  getWeekArray: function (s) {
    const e = new Date(s);
    e.setDate(s.getDate() + 7);
    for (var a = [], d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
      a.push(new Date(d));
    }
    return a;
  }
};
