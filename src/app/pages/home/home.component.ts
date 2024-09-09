import { Component} from '@angular/core';
import { CountdownComponent } from "../../components/countdown/countdown.component";
import { LoaderComponent } from "../../components/loader/loader.component";
import { CommonModule } from '@angular/common';
import { MusicPlayerComponent } from "../../components/music-player/music-player.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountdownComponent, LoaderComponent, CommonModule, MusicPlayerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  images: string[] = [
    '../../../assets/Imgs/fotos/foto_1.jpeg',
    '../../../assets/Imgs/fotos/foto_2.jpeg',
    '../../../assets/Imgs/fotos/foto_3.jpeg',
    '../../../assets/Imgs/fotos/foto_4.jpeg',
    '../../../assets/Imgs/fotos/foto_5.jpeg',
    '../../../assets/Imgs/fotos/foto_6.jpeg',
  ];

  currentIndex: number = 0;
  loader: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 5000); 

    this.startAutoSlide();
    this.startTimer();
  }

  ngOnDestroy(): void {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
    }
  }

  private startAutoSlide() {
    if (typeof window !== 'undefined') {
      this.intervalId = window.setInterval(() => this.nextImage(), 5000);
    }
  }

  nextImage() {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }









  // CONTADOR:

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



  private startTimer() {
    this.updateTimeDifference();
    if (typeof window !== 'undefined') {
      this.intervalId = window.setInterval(() => this.updateTimeDifference(), 1000);
    }
  }

  private updateTimeDifference() {
    const now = new Date();
    
    let years = now.getFullYear() - this.startDate.getFullYear();
    let months = now.getMonth() - this.startDate.getMonth();
    let days = now.getDate() - this.startDate.getDate();
    
    // Ajusta se os dias forem negativos (indicando que ainda não completou o mês)
    if (days < 0) {
      months--;
      // Obtém o número de dias no mês anterior
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += lastMonth.getDate();
    }
  
    // Ajusta se os meses forem negativos (indicando que ainda não completou o ano)
    if (months < 0) {
      years--;
      months += 12;
    }
  
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    this.timeDifference = { years, months, days, hours, minutes, seconds };
  }
}