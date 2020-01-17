import { Component,Inject, OnInit } from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {LeaderLine} from "node_modules/leader-line"
declare let leaderLine: any;

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document) { }

  ngOnInit() {
    new LeaderLine (
      this.document.getElementById('one'),
      this.document.getElementById('two'),
      {
        startPlug: "behind",
        endPlug: "behind",
        startSocket: "bottom",
        endSocket: "left"
      }
    );
    
    new LeaderLine (
      this.document.getElementById('two'),
      this.document.getElementById('three'),
      {
        startPlug: "behind",
        endPlug: "behind",
        startSocket: "bottom",
        endSocket: "left"
      }
    );
  }

}
