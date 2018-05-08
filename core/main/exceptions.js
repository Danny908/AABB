export class ExceptionsHandler {
  constructor(ref) {
    this._ref = ref;
  }
  instance(instance) {
    if(!(this._ref instanceof instance)) {
      throw `${new Error().stack} ${instance.name} not found!`;
    }
  }
  type(type) {
    if(typeof this._ref !== this._compare) {
      throw `${new Error().stack} Expecting ${type} but received ${typeof type}`;
    }
  }
}