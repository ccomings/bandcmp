class DrumMachine {
  constructor() {
    this.createGrid();
  }

  createGrid() {
    const BUTTONS = 16;
    const SOUNDS = [BD, SD, CH, CL];
    let $row = $("<ul>");

    for (let i = 0; i < SOUNDS.length; i++) {
      for (let j = 0; j < BUTTONS; j++) {
        let $beat = $(`<li class='col_${j}'>`);
        $beat.click(() => {
          $beat.toggleClass('on');
          let audio = SOUNDS[i];
          audio.play();
        });

        $row.append($beat);
      }
      $row.appendTo('.drummachine');
    }
  }
}

export default DrumMachine;
