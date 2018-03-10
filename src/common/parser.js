import {toTwo} from 'common/time'

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
  data && data.forEach((item) => {
    const releaseDate = parser(item.rd || `${item.rYear}${toTwo(item.rMonth)}${toTwo(item.rDay)}`)
    newData.push({
      title: item.t || item.title,
      type: parser(item.movieType || item.type),
      actors: parser(item.actors) || `${item.actor1},${item.actor2}`,
      releaseDate: Array.isArray(releaseDate) && releaseDate.join('-'),
      img: item.img || item.image,
      wantedCount: item.wantedCount,
      is3D: item.is3D,
      isIMAX: item.isIMAX,
      isIMAX3D: item.isIMAX3D,
      movieId: item.id
    })
  })
  return newData
}
