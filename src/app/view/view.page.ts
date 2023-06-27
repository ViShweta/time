import { Component, OnInit } from '@angular/core';
import { LocalService } from '../localstorage.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  savedData: any = {};

  constructor(private storage: LocalService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.savedData = JSON.parse(this.storage.getData('timeData') as string);
    console.log('Save Data:', this.savedData);
  }
}
