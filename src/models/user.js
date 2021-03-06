export class UserProfile {
  constructor() {
    this.onboardingCompleted = false;
  }

  static fromSchema(schema) {
    const profile = new UserProfile();
    Object.assign(profile, schema);
    return profile;
  }

  toObject() {
    const obj = {};
    Object.assign(obj, this);
    return obj;
  }
}
