import wepy from 'wepy'

const url = 'http://m.mtime.cn/Service/callback.mi/Showtime/MovieComments.api'

export default function ratings (movieId, pageIndex = 1) {
  return new Promise((resolve) => {
    wepy.request({
      url,
      data: {
        pageIndex,
        movieId
      }
    }).then((data) => {
      if (data.statusCode === 200) {
        resolve(data.data)
      } else {
        console.log(data)
      }
    }).catch((e) => {
      throw new Error(e)
    })
  })
}
