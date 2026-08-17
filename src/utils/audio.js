// Audio Utility System
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
  playHover() {}
  playGlitch() {}
}

export const soundFX = new SoundEffects();
export default soundFX;
