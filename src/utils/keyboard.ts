export const isAcceptableKey = (
  keyPressEvent: React.KeyboardEvent<HTMLElement> | KeyboardEvent,
  acceptableKey: string[]
): boolean => acceptableKey.includes(keyPressEvent.code)
