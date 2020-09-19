export class UserProfile {
  constructor() {
    this.onboardingCompleted = false;
  }

  static fromSchema(schema) {
    const profile = new UserProfile();
    Object.assign(profile, schema);
    return profile;
  }
}
