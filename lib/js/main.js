import DrumMachine from './drum_machine';
import DrumLoop from './drum_loop';

document.addEventListener('DOMContentLoaded', () => {

  const drumMachine = new DrumMachine();
  const drumLoop = new DrumLoop();

  let playing = true;
  let bpm = 1000 / 2;
  let playloop;

  const play = () => {
    playloop = setTimeout(() => {
      drumLoop.loop(bpm);
      if (playing) {
        play();
      }
    }, bpm);
  };

  play();

  // const $power = $("power");
  // const $start_stop = $("start_stop");
  // const $volume = $("volume");
});

// $( () => {
//   const rootEl = $('.drummachine');
// });
