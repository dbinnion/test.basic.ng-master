import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss'],
  animations: [
    trigger('changeOpacity', [
      state('initial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('initial=>final', animate('1000ms')),
      transition('final=>initial', animate('500ms'))
    ]),
  ]
})
export class FlagComponent implements OnInit {
  @Input()
  get hilitedFlag(): string { return this.hilitedFlag; }
  set hilitedFlag(hilitedFlag: string) {
    this.hilitedFlag = hilitedFlag;
  }
  @ViewChild("flag") flagRef!: ElementRef;

  constructor(hilitedFlag: string) { 
    this.hilitedFlag = hilitedFlag
  }

  ngOnInit(): void {
  }
}
