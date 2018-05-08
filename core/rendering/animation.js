// export class SpriteAnimation {
//   constructor(options) {
//     console.log(options);
//     this.options = options
//   }
//   render() {
//     console.log('rendering');
//     this.options.context.drawImage(this.options.image, 100, 100, 300, 50, 0, 50, 30, 30);
//   }
//   // export const update = function() {

// }

export class StateAnimation {
  constructor({name, sprite, frames, context, resolution, scale}) {
    this._sprite = new Image();
    this._sprite.src = sprite;
    this._frames = frames;
    this._name = name;
    this._frameCount = 0;
    this._frameSize = this._frames / this._sprite.width;
    this._scale = scale
  }
  init(trigger, position) {
    if(trigger) {
      context.context.drawImage(
        this._sprite,
        this._frameSize * this._frameCount,
        0,
        this._frameSize,
        this._sprite.height,
        position.x,
        position.y,
        this._frameSize * this._scale,
        this._sprite.height * this._scale);

      if(this._frameCount >= this._frames)
        this._frameCount = 0;
      else
        this._frameCount++;
    }   
  }
}