
import Value from './value'

class SDance {

  constructor(SAudio) {
    this.SAudio = SAudio
  }

  getPercent(){

    let danceData = this.SAudio.getDanceData()

    let size = danceData.length * Value.byte

    let nowSize = 0

    danceData.forEach(val=>{
      nowSize += val
    })

    return (nowSize / size * 100).toFixed(4)

  }

  getFormatData(dataLength){

  }

}



export default SDance
