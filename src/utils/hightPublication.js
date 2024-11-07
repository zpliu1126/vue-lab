/*
 * @Descripttion:
 * @version:
 * @Author: zpliu
 * @Date: 2024-11-01 22:44:52
 * @LastEditors: zpliu
 * @LastEditTime: 2024-11-07 18:28:40
 * @@param:
 */
export const publicationHTML = function (dat, queryName) {
  // 基于文献的信息获取html格式信息
  // dat: publications.value[0]
  let firstautorList = dat['firstAuthor']
  let correspindingAuthorList = dat['correspondingAuthor']
  let firstAuthorStr = firstautorList.join('<sup>*</sup>, ') + '<sup>*</sup>, '
  let correspindingStr =
    correspindingAuthorList.length == 0
      ? ''
      : correspindingAuthorList.join('<sup>#</sup>, ') + '<sup >#</sup>. '
  let otherAuthor = dat['otherAuthor']
  let otherAuthorStr = otherAuthor.join(', ') + ', '
  let title = dat['title']
  let url = dat['doi']
  let tileURL = `<a href="${url}" target="_blank">${title}</a>`
  let volume = dat['volume']
  let journal = dat['journal']
  let year = dat['year']
  let rawStr = `${firstAuthorStr}${otherAuthorStr}${correspindingStr}${tileURL}. <span style="font-style: italic; font-weight:bold;">${journal}. </span>${year}; ${volume}.`
  // 搜索名字对字符进行修改
  let boldMyName = rawStr.replace(
    'Jianying Li',
    `<span style="font-weight:bold;">Jianying Li</span>`
  )
  return boldMyName
}
