import { Component } from '@angular/core';
import { LocalService } from '../localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  save_all_Day: any;
  daysof_Weeks: any = [];

  monday: boolean = false;
  mondayStart: any;
  mondayEnd: any;

  tuesday: boolean = false;
  tuesdayStart: any;
  tuesdayEnd: any;

  wednesday: boolean = false;
  wednesdayStart: any;
  wednesdayEnd: any;

  thursday: boolean = false;
  thursdayStart: any;
  thursdayEnd: any;

  friday: boolean = false;
  fridayStart: any;
  fridayEnd: any;

  saturday: boolean = false;
  saturdayStart: any;
  saturdayEnd: any;

  sunday: boolean = false;
  sundayStart: any;
  sundayEnd: any;

  savedData: any;

  constructor(
    private storage: LocalService,
    private route: Router
  ) {

    this.loadData();
  }


  loadData() {
    this.savedData = JSON.parse(this.storage.getData('timeData') as string);
    console.log('Saved Data:', this.savedData);
    if (this.savedData) {
      this.savedData.forEach((element: any) => {
        if (element.day == 'Sunday') {
          this.sunday = element.is_open;
          this.sundayStart = element.start_time;
          this.sundayEnd = element.end_time;
        };
        if (element.day == 'Monday') {
          this.monday = element.is_open;
          this.mondayStart = element.start_time;
          this.mondayEnd = element.end_time;
        };
        if (element.day == 'Tuesday') {
          this.tuesday = element.is_open;
          this.tuesdayStart = element.start_time;
          this.tuesdayEnd = element.end_time;
        };
        if (element.day == 'Wednesday') {
          this.wednesday = element.is_open;
          this.wednesdayStart = element.start_time;
          this.wednesdayEnd = element.end_time;
        };
        if (element.day == 'Thursday') {
          this.thursday = element.is_open;
          this.thursdayStart = element.start_time;
          this.thursdayEnd = element.end_time
        };
        if (element.day == 'Friday') {
          this.friday = element.is_open;
          this.fridayStart = element.start_time;
          this.fridayEnd = element.end_time;
        };
        if (element.day == 'Saturday') {
          this.saturday = element.is_open;
          this.saturdayStart = element.start_time;
          this.saturdayEnd = element.end_time;
        }
      });

    }
  }

  SaveDays() {
    if (!this.sunday) {
      this.sundayStart = '';
      this.sundayEnd = '';
      this.sunday = false;
    }
    if (!this.monday) {
      this.mondayStart = '';
      this.mondayEnd = '';
      this.monday = false;
    }

    if (!this.tuesday) {
      this.tuesdayStart = '';
      this.tuesdayEnd = '';
      this.tuesday = false;
    }

    if (!this.wednesday) {
      this.wednesdayStart = '';
      this.wednesdayEnd = '';
      this.wednesday = false;
    }

    if (!this.thursday) {
      this.thursdayStart = '';
      this.thursdayEnd = '';
      this.thursday = false;
    }

    if (!this.friday) {
      this.fridayStart = '';
      this.fridayEnd = '';
      this.friday = false;
    }

    if (!this.saturday) {
      this.saturdayStart = '';
      this.saturdayEnd = '';
      this.saturday = false;
    }

    this.daysof_Weeks = [
      {
        day: 'Sunday',
        is_open: this.sunday,
        start_time: this.sundayStart,
        end_time: this.sundayEnd
      },
      {
        day: 'Monday',
        is_open: this.monday,
        start_time: this.mondayStart,
        end_time: this.mondayEnd
      },
      {
        day: 'Tuesday',
        is_open: this.tuesday,
        start_time: this.tuesdayStart,
        end_time: this.tuesdayEnd
      },
      {
        day: 'Wednesday',
        is_open: this.wednesday,
        start_time: this.wednesdayStart,
        end_time: this.wednesdayEnd
      },
      {
        day: 'Thursday',
        is_open: this.thursday,
        start_time: this.thursdayStart,
        end_time: this.thursdayEnd
      },
      {
        day: 'Friday',
        is_open: this.friday,
        start_time: this.fridayStart,
        end_time: this.fridayEnd
      },
      {
        day: 'Saturday',
        is_open: this.saturday,
        start_time: this.saturdayStart,
        end_time: this.saturdayEnd
      },

    ];
    let openDayIndex = this.daysof_Weeks.findIndex((day: any) => day.is_open);
    if (openDayIndex > -1) {
      this.save_all_Day = JSON.stringify(this.daysof_Weeks);
      this.storage.saveData('timeData', this.save_all_Day);
      console.log('data:', this.save_all_Day);
      this.route.navigate(['/view'])
    } else {
      console.log('data not found!');

    }
  }

} 

