'use server'

import ConsumptionData from "@/models/consumption-data"
import Device from "@/models/device"

export async function getAccessToken(auth_code: string): Promise<string> {

const AUTH_URL = `https://idp.onecta.daikineurope.com/v1/oidc/token?
grant_type=authorization_code
&client_id=${process.env.CLIENT_ID}
&client_secret=${process.env.CLIENT_SECRET}
&code=${auth_code}
&redirect_uri=https://chief-colt-novel.ngrok-free.app`
  
  const response = await fetch(AUTH_URL, {
    method: 'POST'
  })
  const result = await response.json()
  return result['access_token']
}

export async function getDevices(access_token: string): Promise<string> {
  const response = await fetch(`https://api.onecta.daikineurope.com/v1/gateway-devices`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  const result: Array<any> = await response.json()
  const devices = Array<Device>()
  result.forEach( device => {
    const id = device.id
    const type = device.type
    device.managementPoints.forEach(managementPoint => {
        const embeddedId = managementPoint.embeddedId
        const managementPointType = managementPoint.managementPointType
        const managementPointCategory = managementPoint.managementPointCategory
        
        if (['climateControl', 'domesticHotWaterTank'].includes(managementPointType)) {
            const dayData = managementPoint.consumptionData.value.electrical.heating.d
            const weekData = managementPoint.consumptionData.value.electrical.heating.d
            const monthData = managementPoint.consumptionData.value.electrical.heating.d

            devices.push(
                new Device(
                    id,
                    type,
                    new ConsumptionData(
                        embeddedId,
                        managementPointType,
                        managementPointCategory,
                        dayData,
                        weekData,
                        monthData
                    )
                )
            )
        }
    })
  })

  return JSON.stringify(devices, null, 2)
}