import request from '@/utils/request'
export const recommendMusicMenu = (limit) => {
  return request({
    url: '/personalized',
    params: { limit },
  })
}
export const newMusic = (limit) => {
  return request({
    url: '/personalized/newsong',
    params: {
      limit,
    },
  })
}
