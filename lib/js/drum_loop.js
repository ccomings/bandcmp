class DrumLoop {
  constructor() {
    this.currentNote = 0;
  }

  loop(bpm) {
    let column = $(`li.${this.currentNote}`);
      column.addClass('active');
      setTimeout(() => column.removeClass('active'), bpm);

    

      this.currentNote++;
    if (this.currentNote > 15) {
      this.currentNote = 0;
    }
  }
}



export default DrumLoop;
