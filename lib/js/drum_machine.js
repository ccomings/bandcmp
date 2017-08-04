class DrumMachine {
  constructor() {
    this.createGrid();
  }

  createGrid() {
    const BUTTONS = 16;
    const SOUNDS = [BD, SD, CH, OH, CB, CP];

    for (let i = 0; i < SOUNDS.length; i++) {
      let $row = $(`<ul class='row'>`);
      for (let j = 0; j < BUTTONS; j++) {
        let $beat = $(`<li class='col${j}'><div class='led'></li>`);
        $beat.click(() => {
          if ($(".power").hasClass('on')) {
            $beat.toggleClass('on');
            $beat.children().toggleClass('on');
            let audio = SOUNDS[i];
            if ($beat.hasClass("on")) {
              audio.play();
            }
          }
        });

        $row.append($beat);
      }
      $row.appendTo('.drummachine');
    }
  }
}

export default DrumMachine;
