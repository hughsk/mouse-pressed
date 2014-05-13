# mouse-pressed [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Simple module to detect if a mouse button is pressed or not.

## Usage

[![NPM](https://nodei.co/npm/mouse-pressed.png)](https://nodei.co/npm/mouse-pressed/)

### pressed = mousePressed(element, [preventDefault])

Watch mouse events on `element` (defaults to `window`).

Passing `preventDefault` as `true` will disable mouse actions on the element
in question – including right clicks, which is sometimes useful for games.

### pressed.left

`true` or `false`, depending whether the left mouse button is pressed down.

### pressed.right

`true` or `false`, depending whether the right mouse button is pressed down.

### pressed.middle

`true` or `false`, depending whether the middle mouse button is pressed down.

### pressed.on('down', callback(event))

Emitted with the original mouse `event` every time a mouse button is pressed.

### pressed.on('up', callback(event))

Emitted with the original mouse `event` every time a mouse button is released.

## License

MIT. See [LICENSE.md](http://github.com/hughsk/mouse-pressed/blob/master/LICENSE.md) for details.
