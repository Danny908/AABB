// // LIBS
import { CanvasInit } from './core/main/init.js';
import { KeyBoard } from './core/controls/keyboard.js';
// import { Resize } from './core/resize/resize.js';
// import { Collisions } from './core/physics/collisions.js';
import { Movement } from './core/physics/movement.js';
// // import { SpriteAnimation } from './core/rendering/animation.js';

// initSpriteAnimation(ctx, './game/sprites/coin.png');
// function initSpriteAnimation(ctx, spritePath) {
//   spriteOptions.image = new Image();
//   spriteOptions.image.src = spritePath;
//   spriteOptions.width = 100;
//   spriteOptions.height = 100;
//   spriteOptions.context = ctx;
//   frameAnim = new SpriteAnimation(spriteOptions);
// }
const otherRect = {
  speed: 5,
  width: 140,
  height: 120,
  x: 100,
  y: 350
}
const GameThread = 
  class CanvasMain extends CanvasInit {
    constructor() {
      super();
      this._resize();
      this._CANVAS_CONFIG = this._GAME_CONFIG.canvas;
      this._myRect = {
        currentSpeedX: 0,
        currentSpeedY: 0,
        speed: 15,
        acceleration: 0.3,
        friction: 0.90,
        width: 100,
        height: 90,
        x: 10,
        y: 10,
        plainControllers: ['W','A','S','D'],
        controllers: {}
      };
      this._movement = new Movement(this._myRect);
      this._keyboard = new KeyBoard(this._canvas, this._myRect.plainControllers);
      this._keyboard.mapKeys(keys => {
        this._myRect.controllers = keys;
      });
    }
    // DEFAULT METHOD
    draw() {
      this.updates();
      requestAnimationFrame(this.draw.bind(this));
    }
    updates() {
      // CLEAR CANVAS LAST FRAME
      this._ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      // RUN TIME GAME FUNCTIONS HERE
      this.moveRect();
      // this.checkCollisions();
      this.drawRects();
    }
    drawRects() {
      // otherRect
      this._ctx.beginPath();
      this._ctx.rect(otherRect.x, otherRect.y, otherRect.width, otherRect.height);
      this._ctx.fillStyle = 'lightcoral';
      this._ctx.fill();
      this._ctx.beginPath();
      // MyRect
      this._ctx.rect(this._myRect.x, this._myRect.y, this._myRect.width, this._myRect.height);
      this._ctx.fillStyle = 'lightblue';
      this._ctx.fill();
    }
    moveRect() {
      if(this._myRect.controllers.W > 0) {
        this._movement.advance('up', 'W');
      }
      if(this._myRect.controllers.A > 0) {
        this._movement.advance('left', 'A');
      }
      if(this._myRect.controllers.S > 0) {
        this._movement.advance('down', 'S');
      }
      if(this._myRect.controllers.D > 0) {
        this._movement.advance('right', 'D')
      }
    }
    // checkCollisions() {
    //   new Collisions(this._myRect, otherRect).overlapping();
    // }
  };

new GameThread().draw();
// TODO:
// Add states animation ex: .addState('stateName', className);
// 