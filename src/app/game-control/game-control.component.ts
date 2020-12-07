import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalEmitted: EventEmitter<number> = new EventEmitter();
  interval;
  counter: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalEmitted.emit(this.counter + 1);
      console.log(this.counter++);
    }, 1000);
  }
}
