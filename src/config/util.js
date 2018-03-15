export function getRedirectPath({avatar}) {
  // 根据用户信息
  let url = '/'
  if (!avatar) {
    url += 'complete'
  }
  return url
}
