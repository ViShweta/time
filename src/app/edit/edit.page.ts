import { Component, OnInit } from '@angular/core';
import { LocalService } from '../localstorage.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {


  updatedData: any = [];
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


  save_all_Day: any;
  savedData: any = [];

  constructor(private storage: LocalService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.savedData = JSON.parse(this.storage.getData('timeData')as string);
    console.log('Saved Data:', this.savedData);
    if (this.savedData) {
       
      this.savedData.forEach((element:any) => {

        if(element.day == 'Sunday'){
          this.sunday = element.is_open;
          this.sundayEnd = element.end_time;
          this.sundayStart = element.start_time;
       
        };
        if(element.day == 'Monday'){
          this.monday=element.is_open;
          this.mondayStart=element.start_time;
          this.mondayEnd=element.end_time;
        };
        if(element.day =='Tuesday'){
          this.tuesday=element.is_open;
          this.tuesday=element.start_time;
          this.tuesday=element.end_time;
        };
        if(element.day =='Wednesday'){
          this.wednesday==element.is_open;
          this.wednesday==element.start_time;
          this.wednesday==element.end_time;
        };
        if(element.day=='Thursday'){
          this.thursday==element.is_open;
          this.thursday==element.start_time;
          this.thursday==element.end_time
        };
        if(element.day=='Friday'){
          this.friday==element.is_open;
          this.friday==element.start_time;
          this.friday==element.end_time;
        };
        if(element.day =='Saturday'){
          this.saturday==element.is_open;
          this.saturday==element.start_time;
          this.saturday==element.end_time;
        }


        
      });
    
   

     
    }
  }

  OnEdit() {
    this.updatedData = [
      {
        sunday: this.sunday,
        sundayStart: this.sundayStart,
        sundayEnd: this.sundayEnd,
      },

      {
        monday: this.monday,
        mondayStart: this.mondayStart,
        mondayEnd: this.mondayEnd,
      },

      {
        tuesday: this.tuesday,
        tuesdayStart: this.tuesdayStart,
        tuesdayEnd: this.tuesdayEnd,
      },

      {
        wednesday: this.wednesday,
        wednesdayStart: this.wednesdayStart,
        wednesdayEnd: this.wednesdayEnd,
      },

      {
        thursday: this.thursday,
        thursdayStart: this.thursdayStart,
        thursdayEnd: this.thursdayEnd,
      },

      {
        friday: this.friday,
        fridayStart: this.fridayStart,
        fridayEnd: this.fridayEnd,
      },

      {
        saturday: this.saturday,
        saturdayStart: this.saturdayStart,
        saturdayEnd: this.saturdayEnd,
      },
    ];

    this.save_all_Day = JSON.stringify(this.updatedData);
    this.storage.saveData('timeData', this.save_all_Day);
  }
}
