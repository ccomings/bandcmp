# Bandcmp

## Background

Bandcmp is a soundboard app created using Javascript, jQuery, and HTML/CSS. It is inspired by the Roland 808 drum machine which allows users to create their own rhythms.

## Functionality and MVPS

* Replicate power, start/stop, tap, and individual beat keys
* Selector knob from different instruments to play
* Tempo and volume control knobs
* smooth bug free navigation and sufficient styling
* deploy on heroku
* production readme

## Wireframes

This app will consist of a single screen with soundboard controls, links to Github, my LinkedIn, and an about section. The buttons that will be completed will be instrument selector, power, tempo, volume, mute, start/stop, beat, and tap buttons. Stretch goals will be level, tone, effect buttons.

![Wireframe][wireframe]

## Architecture and Technologies
This project will be implemented with JavaScript and jQuery for the overall structure and logic. The music setup and effects will be handled by the [web audio API][web_audio_api]. Rendering and DOM manipulation will be handled HTML5.

## Timeline
Day 1: Understand the web audio API. Setup webpack.config.js and package.json. Setup all files and entry file.

Day 2: Finish learning web audio API. Build out sound board. Implement sounds via files or html audio.

Day 3: Design knobs to control instrument selector and volume and tempo. Work on all button functionality.

Day 4: Finish all styling.


## Bonus Features

* create memory storage, AB variation, pre-scale
* allow for individual level, tone, and effects on different instruments
* interface with web audio api https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API















[web_audio_api]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

[wireframe]: https://slack-imgs.com/?c=1&url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F4c%2FRoland_TR-808_%2528large%2529.jpg%2F1200px-Roland_TR-808_%2528large%2529.jpg
