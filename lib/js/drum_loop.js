class DrumLoop {
  constructor() {
    this.currentNote = 0;
    this.stopPlay = this.stopPlay.bind(this);
  }

  loop(bpm) {
    const SOUNDS = [BD, SD, CH, CL];

    let column = $(`li.${this.currentNote}`);
      column.addClass('active');
      setTimeout(() => column.removeClass('active'), bpm);

      for (let i = 0; i < column.length; i++) {
        let audio = $(column[i]);
        if (audio.hasClass('on')) {
          let sound = SOUNDS[i];
          this.stopPlay(sound);
          sound.play();
        }
      }

      this.currentNote++;
    if (this.currentNote > 15) {
      this.currentNote = 0;
    }
  }

  stopPlay(sound) {
    sound.pause();
    sound.currentTime = 0;
  }
}



export default DrumLoop;
