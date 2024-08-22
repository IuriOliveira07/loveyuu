import { Component } from '@angular/core';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss'
})
export class MusicPlayerComponent {
  songUrl: string = '../../../assets/music/music.mp3'; // Caminho da música
  songTitle: string = 'My Favorite Song'; // Título da música

  playAudio(audio: HTMLAudioElement) {
    audio.play();
  }

  pauseAudio(audio: HTMLAudioElement) {
    audio.pause();
  }

  stopAudio(audio: HTMLAudioElement) {
    audio.pause();
    audio.currentTime = 0;
  }
}
