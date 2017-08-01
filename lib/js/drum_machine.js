class DrumMachine {
  constructor() {
    this.createButtons();
  }

  createButtons() {
    const $ul = $("<ul>");
    const BUTTONS = 16;

    for (let i = 0; i < BUTTONS; i++) {
      const $li = $("<li>");
      $li.data("note");

      $li.mousedown(() => {
        $li.toggleClass('on');
        if ($li.hasClass('on')) {
          note.play();
        }
      });

      $ul.append($li);
    }
    $ul.appendTo('.drummachine');
  }
}


export default DrumMachine;
