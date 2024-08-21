import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit {

  timeDifference: { years: number, months: number, days: number, hours: number, minutes: number, seconds: number } = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  private intervalId?: number;
  private startDate: Date = new Date('2024-03-09T00:00:00');

  constructor() {}

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
    }
  }

  private startTimer() {
    this.updateTimeDifference();
    if (typeof window !== 'undefined') {
      this.intervalId = window.setInterval(() => this.updateTimeDifference(), 1000);
    }
  }

  private updateTimeDifference() {
    const now = new Date();
    const diff = now.getTime() - this.startDate.getTime();

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    this.timeDifference = { years, months, days, hours, minutes, seconds };
  }
}