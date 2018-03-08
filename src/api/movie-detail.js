import wepy from 'wepy'

const url = 'https://ticket-api-m.mtime.cn/movie/detail.api'

export default function movieDetail ({locationId, movieId}) {
  return new Promise((resolve) => {
    wepy.request({
      url,
      data: {
        locationId,
        movieId
      }
    }).then((data) => {
      if (data.statusCode === 200) {
        resolve(data.data.data)
      } else {
        console.log(data)
      }
    }).catch((e) => {
      throw new Error(e)
    })
  })
}
