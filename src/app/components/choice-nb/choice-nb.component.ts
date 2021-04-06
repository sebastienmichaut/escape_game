import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-choice-nb',
  templateUrl: './choice-nb.component.html',
  styleUrls: ['./choice-nb.component.scss'],
})
export class ChoiceNbComponent implements OnInit {
  @Input() nb: number;
  @Input() min: number =1;
  @Input() max: number;

  @Output() nbModify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  substract() {
    this.nb--;
    this.nbModify.emit(this.nb);
  }

}
