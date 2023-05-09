import { DateTime } from '../node_modules/luxon/src/luxon.js';

export default class DateData {
  constructor(elementSelector) {
    this.element = document.querySelector(elementSelector);
  }

  render() {
    const now = DateTime.now();
    const dateTimeContent = now.toLocaleString(DateTime.DATETIME_FULL);
    this.element.innerHTML = `${dateTimeContent}`;
  }
}
