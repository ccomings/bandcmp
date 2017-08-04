import DrumMachine from './drum_machine';
import DrumLoop from './drum_loop';
import {instruments} from './instruments';

document.addEventListener('DOMContentLoaded', () => {

  const drumMachine = new DrumMachine();
  const drumLoop = new DrumLoop();
  instruments();

  const $power = $("#power");
  const $start_stop = $(".start_stop");
  const $volume = $(".volume");
  const $reset = $('.reset');
  const $bpm = $(".bpm");

  let power_on = false;
  let playing = false;
  let bpm = $('input').val();

  $bpm.change((e) => {
    bpm = 15000 / e.currentTarget.value;
  });

  $reset.click(() => {
    drumLoop.clearBoard();
  });

  $power.click(() => {
    if (power_on === true) {
      clearInterval(playloop);
      playing = false;
      drumLoop.reset();
      drumLoop.clearBoard();
      power_on = false;
      $power.removeClass('on');
    } else {
      clearInterval(playloop);
      drumLoop.reset();
      drumLoop.clearBoard();
      power_on = true;
      $power.toggleClass('on');
    }
  });

  $start_stop.click(() => {
    if (power_on === true) {
      if (playing === true) {
        playing = false;
        clearInterval(playloop);
        drumLoop.reset();
      } else {
        playing = true;
        play();
      }
    }
  });

  let playloop;

  const play = () => {
    playloop = setTimeout(() => {
      drumLoop.loop(bpm);
      if (playing) {
        play();
      }
    }, bpm);
  };
});
