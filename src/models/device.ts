import ConsumptionData from "./consumption-data"

export default class Device {
    id: string
    type: string
    consumptionData: ConsumptionData

    constructor(
        id: string,
        type: string,
        consumptionData: ConsumptionData
    ) {
        this.id = id
        this.type = type
        this.consumptionData = consumptionData
    }
}