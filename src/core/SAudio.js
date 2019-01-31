import {Howl, Howler} from 'howler';

class SAudio {
  constructor(inputConfig) {
    this.audioCtx = null
    this.analyser = null
    this.audioSrc = null


    this.Howl = null


    this.normalConfig = {
      fftSize: 256,
      onload(){

      }
    }

    this.inputConfig = Object.assign(this.normalConfig, inputConfig)

    this.initAudio()
  }


  renderAudioController(){
    this.Howl = new Howl({
      src: [this.inputConfig.src],
      onend: function() {
        this.inputConfig.onload()
      }
    });
  }


  initAudio(){

    window.Audio = window.Audio || window.webkitAudio
    window.AudioContext = window.AudioContext || window.webkitAudioContext

    if(!window.Audio) {
      throw new Error('你的浏览器不支持Audio对象')
      return
    }

    if(!window.AudioContext) {
      throw new Error('你的浏览器不支持AudioContext对象')
      return
    }

    this.renderAudioController()

    this.analyser = Howler.ctx.createAnalyser();
    Howler.masterGain.connect(this.analyser);
    this.analyser.connect(Howler.ctx.destination);
    this.analyser.fftSize = this.inputConfig.fftSize;

  }

  getDanceData(){
    let array = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(array);
    return array
  }

}



export default SAudio
