import { isValid, set } from 'date-fns'

export const joinDatetimeISO = (date: Date, time: Date) => {
  const isValidDate = isValid(date)
  const isValidTime = isValid(time)
  if (isValidDate && isValidTime) {
    return set(date, { hours: time.getHours(), minutes: time.getMinutes() }).toISOString()
  }
  return ''
}
