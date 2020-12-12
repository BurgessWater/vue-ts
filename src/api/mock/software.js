import Mock from 'mockjs'
/* eslint-disable */
Mock.mock('/\api\/proxy\/querySoftwareList', {
  "code": 0,
  "data": {
    'list|68': [{
      'id|+1': 1,
      'name': '@cname',
      'date': '@datetime',
      'provider': '@cname',
      'language': '@cname',
      'imgUrl': '@image',
      'rank|1-100': 100,
      'version|1-100': 100,
      licence: '@name',

    }],
    total: 68
  },
  "message": 'success'
})