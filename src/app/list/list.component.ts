import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  
  napisy: string[] = ['dk','lah'];
  nowyNapis: string = '';
   
  addToList(){
    this.napisy.push(this.nowyNapis);
    this.nowyNapis = '';
  }

}