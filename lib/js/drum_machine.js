class DrumMachine {
  constructor() {
    this.createGrid();
  }

  createGrid() {
    const BUTTONS = 16;

    $('.sounds').children().each( (sound) => {
      const $ul = $(`<ul class="${sound.class}">`);
      $('<li>');

      for (let i = 0; i < BUTTONS; i++) {
        const $li = $(`<li class='col_${i} ${sound.class}'>`);
        $li.data(sound);

        $ul.append($li);
      }
      $ul.appendTo('.drummachine');
    });
  }
}

export default DrumMachine;
