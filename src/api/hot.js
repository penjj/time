import wepy from 'wepy'

const url = 'https://api-m.mtime.cn/Showtime/LocationMovies.api'

export default function hot (locationId) {
  return new Promise((resolve) => {
    wepy.request({
      url,
      data: {
        locationId
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
