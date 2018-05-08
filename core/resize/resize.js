import { ExceptionsHandler } from '../main/exceptions.js';

export class Resize extends ExceptionsHandler {
  constructor(ctx, callback) {
    super(ctx);
    this._ctx = ctx;
    window.addEventListener('resize', (event) => {
      super.instance(CanvasRenderingContext2D);
      // console.log(this._ctx);
      this._ctx.canvas.width = window.innerWidth;
      this._ctx.canvas.height = window.innerHeight;
      if(callback) {
        callback();
      }
      return false;
    });
  }
}