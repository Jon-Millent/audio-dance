import AudioDance from './core/SAudio'
import StudioDance from './core/SDance'

if(window) {
  window.AudioDance = AudioDance
  window.StudioDance = StudioDance
}

export {
  AudioDance,
  StudioDance
}
