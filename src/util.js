export function addQuery(urlStr, paramsObj) {
  let url = new URL(urlStr)

  Object.keys(paramsObj).forEach(key =>
    url.searchParams.append(key, paramsObj[key])
  )

  return url
}
