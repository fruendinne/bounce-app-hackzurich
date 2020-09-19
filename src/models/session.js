import * as uuid from 'uuid';

export default class Session {
  constructor(owner, name) {
    this.uid = uuid.v4();

    this.owner = owner;
    this.name = name;

    this.canvas = {};
    this.messages = [];
  }

  static fromSchema(schema) {
    const profile = new Session() ;
    Object.assign(profile, schema);

    return profile;
  }

  toObject() {
    const obj = {};
    Object.assign(obj, this);

    obj.canvas = JSON.stringify(this.canvas);

    return obj;
  }
}
