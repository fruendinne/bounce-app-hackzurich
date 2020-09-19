export default class Session {
  constructor() {
    this.canvas = {};
  }

  static fromSchema(schema) {
    const profile = new Session() ;
    Object.assign(profile, schema);
    return profile;
  }

  toObject() {
    const obj = {};
    Object.assign(obj, this);
    return obj;
  }
}
