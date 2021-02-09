
export class helpers {
  sleep = async function (ms: number, result?: () => any) {
    return new Promise(resolve => {
      setTimeout(() =>
        resolve(result), ms)
    })
  }

  genericSleep = async function <T>(ms: number, result?: T) {
    return new Promise(resolve => {
      setTimeout(() =>
        resolve(result), ms)
    })
  }
}
