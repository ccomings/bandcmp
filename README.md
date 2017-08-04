# BandCmp

[BandCmp][bandcmp live]

BandCmp is an interactive drum machine loosely inspired by the famous [Roland TR-808][roland link]. It utilizes JavaScript, jQuery, HTML5, and CSS3. Users can design their own drum beats and play them through their speakers or headphones.

## Features and Implementation

### Buttons


### DrumLoop
```
let column = $(`li.col${this.currentNote}`);
  column.addClass('active');
  setTimeout(() => column.removeClass('active'), bpm);

  for (let i = 0; i < column.length; i++) {
    let audio = $(column[i]);
    if (audio.hasClass('on')) {
      let sound = SOUNDS[i];
      this.stopPlay(sound);
      sound.play();
    }
  }
```

## Future Directions of Project

### Recording and Exporting

### Volume Knobs









[bandcmp live]: ccomings.github.io/bandcmp
[roland link]: https://en.wikipedia.org/wiki/Roland_TR-808
