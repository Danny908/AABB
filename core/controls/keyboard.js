export class KeyBoard {
  constructor(canvas, keysMap, delay = 0) {
    this._canvas = canvas;
    this._delay = delay;
    this._keysMapped = this._createObjetKeys(keysMap);
  }

  mapKeys(callback) {
    window.addEventListener('keydown', (event) => callback(this._keyDown(event)));
    window.addEventListener('keyup', (event) => callback(this._keyUp(event)));
  }
  _createObjetKeys(keysMap) {
    let keysObject = {};
    for(let key of keysMap) {
      keysObject[key.toUpperCase()] = 0;
    }
    return keysObject;
  }
  _keyDown(event) {
    const key = event.key.toUpperCase();
    this._keysMapped[key] = 1;
    return this._keysMapped;
  }
  _keyUp(event) {
    const key = event.key.toUpperCase();
    this._keysMapped[key] = 2;
    return this._keysMapped;
  }
}
