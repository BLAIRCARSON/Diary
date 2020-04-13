import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary'

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diarys:Diary[]=[
   new Diary (1,'coding', 'code'),
   new Diary (2, 'watching movies','watch'),
   new Diary (3,'doing project','Do project')
  ];

  toggleDetails(index){
    this.diarys[index].showDescription = !this.diarys[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}