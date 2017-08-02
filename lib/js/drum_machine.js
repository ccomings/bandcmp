class DrumMachine {
  constructor() {
    this.createGrid();
  }

  createGrid() {
    const BUTTONS = 16;
    const SOUNDS = 1;
    let $row = $("<ul>");

    for (let i = 0; i < SOUNDS; i++) {
      for (let j = 0; j < BUTTONS; j++) {
        let $beat = $(`<li class='col_${j}'>`);

        $beat.click(() => {
          $beat.toggleClass('on');
          let audio = $("#BD")[0];
          audio.play();
        });

        $row.append($beat);
      }
      $row.appendTo('.drummachine');
    }
  }
}

export default DrumMachine;
