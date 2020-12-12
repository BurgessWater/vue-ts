import {
  post,
  get
} from './request'

export const getSoftwareList = param => get('/api/proxy/querySoftwareList', param)