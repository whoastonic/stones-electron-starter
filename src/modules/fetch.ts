export interface FetchResponse {
  status: [string, number]
  headers: Headers
  body: any
}

export interface FetchOptions {
  serializeToJSON: boolean
}

export const fetchJSON = async (
  url: string,
  method?: string,
  body?: string,
  options?: FetchOptions
): Promise<FetchResponse> => {
  const fetchResponse: FetchResponse = {
    status: ['Internal Error', 500],
    headers: new Headers(),
    body: new Uint8Array()
  }

  const response = await fetch(url, {
    method: method === undefined
      ? 'GET'
      : method,
    body: method === 'POST' && body !== undefined
      ? options?.serializeToJSON === true
        ? JSON.stringify(body)
        : body
      : null
  })

  if (response.status !== 200) {
    console.log(response.status)

    const text = await response.text()

    throw new Error(text)
  }

  const json = await response.json()

  fetchResponse.status = [
    response.statusText,
    response.status
  ]

  fetchResponse.headers = response.headers

  fetchResponse.body = json

  return fetchResponse
}
