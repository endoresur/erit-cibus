import { mockStorage } from 'mock/storage'
import { MeasurementType } from 'models/products/api'

export const getQuantityStep = (unitName: string | null) => {
	const units = mockStorage.getList<{ name: string; measurementType: MeasurementType }>()
	const unit = units.find(unit => unit.name === unitName)
	if (unit) {
		return unit.measurementType === MeasurementType.INTEGER ? 1 : 0.01
	}
	return 0.01
}
