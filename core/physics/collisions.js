export class Collisions {
  constructor(element_1, element_2) {
    this._element_1 = element_1;
    this._element_2 = element_2;
  }
  overlapping() {
    // console.log(this._element_1);
    if (this._element_1.x < this._element_2.x + this._element_2.width &&
      this._element_1.x + this._element_1.width > this._element_2.x &&
      this._element_1.y < this._element_2.y + this._element_2.height &&
      this._element_1.height + this._element_1.y > this._element_2.y) {
      // collision detected!
      // this._collisionDirection();
    }
  }
  _collisionDirection() {
    switch(sideCollision) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        break;
    }
  }
  _topCollision() {

  }
  _rightCollision() {
    
  }
  _bottomCollision() {
    
  }
  _leftCollision() {
    
  }
}