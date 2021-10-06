import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'random-num',
  templateUrl: './random-num.component.html',
  styleUrls: ['./random-num.component.css']
})
export class RandomNumComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  result:any;
  randomNum1 = Math.floor(Math.random() * 46) + 1;
  randomNum2 = Math.floor(Math.random() * 46) + 1;
  randomNum3 = Math.floor(Math.random() * 46) + 1;
  randomNum4 = Math.floor(Math.random() * 46) + 1;
  randomNum5 = Math.floor(Math.random() * 46) + 1;
  randomNum6 = Math.floor(Math.random() * 46) + 1;
  
  randomNum01(){
    this.result = this.randomNum1;
  }
  randomNum02(){
    this.result = this.randomNum2;
  }
  randomNum03(){
    this.result = this.randomNum3;
  }
  randomNum04(){
    this.result = this.randomNum4;
  }
  randomNum05(){
    this.result = this.randomNum5;
  }
  randomNum06(){
    this.result = this.randomNum6;
  }
}
