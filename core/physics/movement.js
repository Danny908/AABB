export class Movement {
  constructor(entity) {
    this._entity = entity;
  }
  move(direction, accelerate = false) {
    switch(direction) {
      case 'up':
        this._entity.y -= this._entity.speed;
        break;
      case 'right':
        this._entity.x += this._entity.speed;
        break;
      case 'down':
        this._entity.y += this._entity.speed;
        break;
      case 'left':
        this._entity.x -= this._entity.speed;
        break;
    }
  }
  advance(direction, key) {
    const currentKey = key.toUpperCase();
    if (this._entity.controllers[currentKey] === 1) {
      if(direction === 'right' && this._entity.currentSpeedX >= 0)
        this._entity.x += this._accelerate('x');
      if(direction === 'left' && this._entity.currentSpeedX <= 0)
        this._entity.x -= this._accelerate('-x');
      if(direction === 'down' && this._entity.currentSpeedY >= 0)
        this._entity.y += this._accelerate('y');
      if(direction === 'up' && this._entity.currentSpeedY <= 0)
        this._entity.y -= this._accelerate('-y');
      if(direction === 'right' && this._entity.currentSpeedX <= 0)
        this._entity.friction = 0.90;
    }
    if (this._entity.controllers[currentKey] === 2) {
      if(direction === 'up')
        this._entity.y -= this._decelerate('y', currentKey);
      if(direction === 'right')
        this._entity.x += this._decelerate('x', currentKey);
      if(direction === 'down')
        this._entity.y += this._decelerate('y', currentKey);
      if(direction === 'left')
        this._entity.x -= this._decelerate('x', currentKey);
    }
  }
  _accelerate(axis) {
    if(axis === 'x') {
      if(this._entity.currentSpeedX < this._entity.speed)
        return this._entity.currentSpeedX += this._entity.acceleration;
      else
        return this._entity.currentSpeedX = this._entity.speed;
    }
    if(axis === '-x') {
      if(Math.abs(this._entity.currentSpeedX) < this._entity.speed)
        return Math.abs(this._entity.currentSpeedX -= this._entity.acceleration);
      else
        return Math.abs(this._entity.currentSpeedX = (this._entity.speed * -1));
    }
    if(axis === 'y') {
      if(this._entity.currentSpeedY < this._entity.speed)
        return this._entity.currentSpeedY += this._entity.acceleration;
      else
        return this._entity.currentSpeedY = this._entity.speed;
    }
    if(axis === '-y') {
      if(Math.abs(this._entity.currentSpeedY) < this._entity.speed)
        return Math.abs(this._entity.currentSpeedY -= this._entity.acceleration);
      else
        return Math.abs(this._entity.currentSpeedY = (this._entity.speed * -1));
    }
  }
  _decelerate(axis, key) {
    if(axis === 'x') {
      if(Math.abs(this._entity.currentSpeedX) > 0.2)
        return Math.abs(this._entity.currentSpeedX *= this._entity.friction);
      else {
        this._entity.controllers[key] = 0;
        return this._entity.currentSpeedX = 0;
      }
    }
    if(axis === 'y') {
      if(Math.abs(this._entity.currentSpeedY) > 0.2)
        return Math.abs(this._entity.currentSpeedY *= this._entity.friction);
      else {
        this._entity.controllers[key] = 0
        return this._entity.currentSpeedY = 0;
      }
    }
  }
  _break() {

  }
}