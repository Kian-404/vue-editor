import request from '@/utils/request'

export function homeList() {
  return request({
    url: `/api/homeList`,
    method: 'get'
  })
}