'use server'

import { getAccessToken, getDevices } from "./api/daikin-api"

const daikin_auth_url = `https://idp.onecta.daikineurope.com/v1/oidc/authorize?\
response_type=code\
&client_id=${process.env.CLIENT_ID}\
&redirect_uri=https://chief-colt-novel.ngrok-free.app\
&scope=openid%20onecta:basic.integration`

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const auth_code = (await searchParams).code as string
  if (auth_code) {
    const access_token = await getAccessToken(auth_code)
    const devices = await getDevices(access_token)
    return (
      <div className='h-screen flex flex-col items-center justify-center'>
        <textarea className="block p-2.5 w-96 h-64 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={devices}/>
        <a href={daikin_auth_url} className="mt-4">Fetch Data</a>
      </div>
    )
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <a href={daikin_auth_url}>Fetch Data</a>
      </main>
    </div>
  )
}
