class DrumMachine {
  constructor() {
    this.createGrid();
  }

  createGrid() {
    const BUTTONS = 16;
    const SOUNDS = 4;
    let $row = $("<ul>");

    for (let i = 0; i < SOUNDS; i++) {
      for (let j = 0; j < BUTTONS; j++) {
        let $beat = $("<li>");

        $beat.click(() => {
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
