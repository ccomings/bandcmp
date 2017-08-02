class Selector {
  constructor() {
    this.currentColumn = 0;
  }

  start(tempo) {
    let column = $(`li.col_${this.currentColumn}`);
    column.addClass('active');
    setTimeout(() => column.removeClass('active'), tempo)
  }
}

export default Timer;
