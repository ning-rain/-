import request from '@/utils/request'
export function hotSearch() {
  return request({
    url: '/search/hot',
  })
}
export const searchResult = params => request({
    url:'/cloudsearch',
    params
})
