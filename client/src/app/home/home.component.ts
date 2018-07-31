import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../../../node_modules/font-awesome/css/font-awesome.min.css'
  ]
})
export class HomeComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: any;
  randomSong: number = Math.floor(Math.random() * 8);
  videoSource: string = "";
  pauseClass: string = "fa-pause-circle";
  volumeClass: string = "fa-volume-up";

  constructor() { }

  ngOnInit() {
    const baseVideosUrl = "../../assets/videos/";

    switch (this.randomSong) {
      case 0: {
        this.videoSource = `${baseVideosUrl}Ed Sheeran - Shape of You [Official Video]-JGwWNGJdvx8.mp4#t=35`;
        break;
      }
      case 1: {
        this.videoSource = `${baseVideosUrl}Imagine Dragons - Believer-7wtfhZwyrcc.mp4`;
        break;
      }
      case 2: {
        this.videoSource = `${baseVideosUrl}Nicky Jam x J. Balvin - X (EQUIS) _ Video Oficial _ Prod. Afro Bros & Jeon-_I_D_8Z4sJE.mp4#t=21`;
        break;
      }
      case 3: {
        this.videoSource = `${baseVideosUrl}Sebastián Yatra - No Hay Nadie Más-sD9_l3oDOag.mp4#t=73`;
        break;
      }
      case 4: {
        this.videoSource = `${baseVideosUrl}Maroon 5 - What Lovers Do ft. SZA-5Wiio4KoGe8.mp4#t=8`;
        break;
      }
      case 5: {
        this.videoSource = `${baseVideosUrl}Cali Y El Dandee - Por Fin Te Encontré ft. Juan Magan, Sebastian Yatra-_kxz7WX4mLU.mp4#t=56`;
        break;
      }
      case 6:{
        this.videoSource = `${baseVideosUrl}Taylor Swift - We Are Never Ever Getting Back Together-WA4iX5D9Z64.mp4#t=44`;
        break;
      }
      case 7:{
        this.videoSource = `${baseVideosUrl}Luis Fonsi - Despacito ft. Daddy Yankee-kJQP7kiw5Fk.mp4#t=80`;
        break;
      }
    }
    
    if (this.videoplayer.nativeElement.paused) {
      this.toggle();
    }
  }

  toggle() {
    if (this.videoplayer.nativeElement.paused) {
      this.videoplayer.nativeElement.play();
      this.pauseClass = "fa-pause-circle";
    } else {
      this.videoplayer.nativeElement.pause();
      this.pauseClass = "fa-play-circle";
    }
  }

  toggleSound() {
    this.volumeClass = this.videoplayer.nativeElement.muted ? "fa-volume-up" : "fa-volume-off";
    this.videoplayer.nativeElement.muted = !this.videoplayer.nativeElement.muted;
  }
}