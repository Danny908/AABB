import { KeyBoard } from '..controls/keyboard.js';

export class Entity {
  constructor({name, stateAnimation = {}, life, lives, keyControls}) {
    this._keyControls = keyControls
    KeyBoard(this._keyControlskeyControls)
        .mapKeys(keys => this._keyControls = keys);
  }

  listener() {

  }
}