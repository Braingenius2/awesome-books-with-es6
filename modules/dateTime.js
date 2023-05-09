import { DateTime } from 'luxon';

export default class DateTime {
  constructor(elementSelector) {
    this.element = document.querySelector(elementSelector);
  }

  render() {
    const now = DateTime.now();
    dateTimeContent = now.toLocaleString(DateTime.DATETIME_FULL);
    this.element.innerHTML = `${dateTimeContent}`;
  }
}


