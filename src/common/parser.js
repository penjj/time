export function parser (str) {
  if (typeof str !== 'string') return
  if (/\d{8}/.test(str)) {
    const newN = str.split(/(\d{4})(\d{2})/)
    newN.shift()
    return newN
  } else {
    return str.split(' / ').join(',')
  }
}

export default function parserData (data) {
  const newData = []
  data.forEach((item) => {
    newData.push({
      title: item.t,
      type: parser(item.movieType),
      actors: parser(item.actors),
      releaseDate: parser(item.rd).join('-'),
      img: item.img,
      wantedCount: item.wantedCount,
      is3D: item.is3D,
      isIMAX: item.isIMAX,
      isIMAX3D: item.isIMAX3D,
      movieId: item.id
    })
  })
  return newData
}
