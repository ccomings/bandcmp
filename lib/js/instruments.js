export const Instruments = () => {
  const list = ['Bass Drum', 'Snare Drum', 'Closed Hi Hat', 'CLaves'];
  let $instruments = $("<ul class='instruments'>");
  for (let i = 0; i < list.length; i++) {
    let $name = $(`<li>${list[i]}</li>`);
    $instruments.append($name);
  }
};
