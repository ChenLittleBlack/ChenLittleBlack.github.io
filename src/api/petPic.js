import request from '@/utils/request'

/**
 * 随机猫猫照片
 */
export function randomCatPic() {
  return request({
    url: `https://api.thecatapi.com/v1/images/search?size=full`,
    method: 'get',
    cancelRepeatRequest: true
  })
}

/**
 * 随机狗狗照片
 */
export function randomDogPic() {
  return request({
    url: `https://api.thedogapi.com/v1/images/search?size=full`,
    method: 'get',
    cancelRepeatRequest: true
  })
}
