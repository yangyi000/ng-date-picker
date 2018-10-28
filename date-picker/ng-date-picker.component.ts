import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './ng-date-picker.component.html',
  styleUrls: ['./ng-date-picker.component.css']
})
export class NgDatePickerComponent implements OnInit {
  _currentDate;
  _currentMonth;
  _currentYear;
  showMonthMenu: boolean;
  showYearsMenu: boolean;
  weekDays = ['日', '一', '二', '三', '四', '五', '六']

  @Input() width: string;
  currentTimeValue: Date;
  @Output() currentTimeChange = new EventEmitter();

  @Input()
  get currentTime() {
    return this.currentTimeValue;
  }
  set currentTime(val) {
    this.currentTimeValue = val;
    const time = this.currentTimeValue ? this.currentTimeValue : new Date();
    this._currentDate = time.getDate();
    this._currentMonth = time.getMonth() + 1;
    this._currentYear = time.getFullYear();
    this.getCurrentMonthStructure(val);
    this.currentTimeChange.emit(val);
  }

  show = false;
  days = [];
  months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  years = [];
  constructor() { }

  ngOnInit() {
    // setTimeout(() => { this.currentTime = new Date(); }, 3000);
  }
  _showCalendar = () => {
    this.show = true;
  }
  _onDatePick = (val) => {
    const date = new Date();
    date.setDate(val.date);
    date.setMonth(val.month);
    date.setFullYear(this._currentYear);
    this.currentTime = date;
  }
  _showYearItems = () => {
    this.showYearsMenu = true;
  }
  _showMonthItems = () => {
    this.showMonthMenu = true;
  }
  _setCurrentMonth = (val) => {
    this._currentMonth = val;
    this.getCurrentMonthStructure(new Date(this.currentTime.setMonth(val - 1)));
    this.showMonthMenu = false;
  }

  getCurrentMonthStructure = (time: Date) => {
    this.days = [];
    const _thisMonth = new Date(time.getFullYear(), time.getMonth() + 1, 0);
    const totaldays = _thisMonth.getDate();
    const firstday = new Date(_thisMonth.setDate(1)).getDay();
    for (let i = 1; i <= totaldays; i++) {
      this.days.push({ date: i, month: time.getMonth() });
    }
    // 前面加上个月后几天
    if (firstday > 0) {
      const preMonthTotaldays = new Date(time.getFullYear(), time.getMonth(), 0).getDate();
      for (let i = 0; i < firstday; i++) {
        this.days.unshift({ date: preMonthTotaldays - i, month: time.getMonth() - 1 });
      }
    }
    // 后面加下个月前几天
    const length = this.days.length;
    if (length < 42) {
      for (let i = 1; i <= (42 - length); i++) {
        this.days.push({ date: i, month: time.getMonth() + 1 });
      }
    }
  }
}
