export const instruments = () => {
  const list = ['Bass Drum', 'Snare Drum', 'Closed Hi hat', 'Open Hi hat', 'Cow Bell', 'ClaP'];
  let $instruments = document.getElementById('instruments');
  for (let i = 0; i < list.length; i++) {
    let $name = $(`<li>${list[i]}</li>`);
    $instruments.append($name[0]);
  }
};
