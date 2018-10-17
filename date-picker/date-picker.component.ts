import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  @Input() width: string;

  show = false;
  days = [];
  constructor() { }

  ngOnInit() {
  }
  _showCalendar = () => {
    this.show = true;
  }
}
