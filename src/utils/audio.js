// Silent Audio System (Sound Disabled)
class SoundEffects {
  constructor() {
    this.soundEnabled = false;
  }
  toggleSound() {
    this.soundEnabled = false;
    return false;
  }
  playClick() {}
  playBeep() {}
  playSuccess() {}
}

export const soundFX = new SoundEffects();
