
import Value from './value'

class SDance {

  constructor(danceData) {

  }

  getPercent(danceData){
    let size = danceData.length * Value.byte

    let nowSize = 0

    danceData.forEach(val=>{
      nowSize += val
    })

    return (nowSize / size * 100).toFixed(4)

  }

}



export default SDance
