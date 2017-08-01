class DrumMachine {
  constructor($el) {
    this.$el = $el;
    this.createGrid();
  }

  createGrid() {
    const BUTTONS = 16;
    const SOUNDS = 4;
    const $ul = $("<ul>");

    for (var i = 0; i < SOUNDS; i++) {
      for (var i = 0; i < BUTTONS; i++) {
        let $li = $("<li>");
        $li.data("sound");

        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}

    // debugger;
    // $('.sounds').children().each( (idx, sound) => {
    //
    //   const $ul = $(`<ul class="${sound.class}">`);
    //
    //   for (let i = 0; i < BUTTONS; i++) {
    //     const $li = $(`<li class='col_${i} ${sound.class}'>`);
    //     $li.data(sound);
    //
    //     $ul.append($li);
    //   }
    //   $ul.appendTo('.drummachine');
    // });


export default DrumMachine;
