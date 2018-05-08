import { GAME_CONFIG } from '../../preferences.js';
import { Resize } from '../resize/resize.js';

export class CanvasInit {
  constructor() {
    // SET UP CANVAS
    this._GAME_CONFIG = GAME_CONFIG;
    this._canvas = document.createElement('canvas');
    this._canvas.id = this._GAME_CONFIG.canvas.id;
    this._canvas.tabIndex = this._GAME_CONFIG.canvas.tabIndex;
    document.body.appendChild(this._canvas);
    this._ctx = this._canvas.getContext('2d');
    this._ctx.canvas.width = window.innerWidth;
    this._ctx.canvas.height = window.innerHeight;
  }

  _resize(callback) {
    new Resize(this._ctx, callback);
  }
}