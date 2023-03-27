/* 图片工具类 */

/**
 * 获取静态图片
 * @param {string} path 图片路径
 * @return {string} 完整的本地路径
 */
export function getAssetsImg(path) {
  return new URL(`../assets/images/${path}`, import.meta.url).href
}

/**
 * 获取文件夹下的所有静态图片
 * @param {string} folder 图片的文件夹
 * @return {string[]} 所有图片的完整的本地路径
 */
export function getAssetsImgInFolder(folder) {
  let result = []
  if (folder === 'scenery') {
    result = Object.values(import.meta.glob('../assets/images/scenery/*.*', { eager: true, as: 'url' }))
  }
  return result
}
