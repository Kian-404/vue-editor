import request from '@/utils/request'

export function homeList(data: any) {
  return request({
    url: `/api/homeList`,
    method: 'get',
    params:data
  })
}