import { throttle as throttleFn } from 'kontroll'

export interface scrollCallbackOptions {
  startOffset?: number
  endOffset?: number
  length?: number
  element?: HTMLElement

  /**
   * The callback only starts to get called when the progress starts increasing instead of first/any scroll event  
   * Useful when the target element is deep down in the viewport and you only want the callback starts triggering once it saw the element.
   * 
   * @default true
   */
  delayStart?: boolean

  /**
   * @default 100
   */
  throttle?: number
}
export function usePageScrollPercentage(
  callback: (scrollPercentage: number) => void,
  {
    startOffset = 0,
    endOffset = 0,
    length,
    element,
    delayStart = true,
    throttle = 100,
  }: scrollCallbackOptions = {},
) {
  const throttleKey = Date.now() + Math.random()
  useEventListener(
    'scroll',
    throttle
      ? () => throttleFn(throttle, onScrollCallback, { key: throttleKey, trailing: true })
      : onScrollCallback,
  )

  let started = false
  function onScrollCallback() {
    const _element = (toValue(element)) ?? window.document.body
    const _startOffset = toValue(startOffset)
    const _endOffset = toValue(endOffset)

    const current = window.scrollY + window.innerHeight
    const from = _element.offsetTop + _startOffset
    const to = (length || _element.scrollHeight)

    const percent = (current - from) / (to - _startOffset + _endOffset)

    if (!started) {
      if (delayStart && percent <= 0)
        return
      else
        started = true
    }

    callback(percent)
  }
}
