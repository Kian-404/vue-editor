// const Mock = require('mockjs');
import * as Mock from 'mockjs'
const Random = Mock.Random;

export const homeList = (configdata: any) => {
  console.log(configdata)
  const list = [];
  for (let i = 0; i < 30; i++) {
    const listData = {
      'id': Random.natural(),
      'articleTitle': Random.csentence(5, 10),
      'createTime': Random.datetime('yyyy-MM-dd HH:mm:ss'),
      'articlePic': Random.image('250x250', '22B8DD', '#fff', 'hello'),
      'articleColor': Random.color()
    }
    list.push(listData);
  }
  return {
    data: list,
    code: 200,
    message: '查询成功'
  }
}