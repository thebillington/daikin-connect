export default class ConsumptionData {
    embeddedId: string
    managementPointType: string
    managementPointCategory: string
    
    dayData: Array<Number>
    weekData: Array<Number>
    monthData: Array<Number>

    constructor(
        embeddedId: string,
        managementPointType: string,
        managementPointCategory: string,
        
        dayData: Array<Number>,
        weekData: Array<Number>,
        monthData: Array<Number>,
    ) {
        this.embeddedId = embeddedId
        this.managementPointType = managementPointType
        this.managementPointCategory = managementPointCategory

        this.dayData = dayData
        this.weekData = weekData
        this.monthData = monthData
    }
}