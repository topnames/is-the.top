import { throttle as throttleFn } from 'kontroll'

export interface scrollCallbackOptions {
  startOffset?: number
  endOffset?: number
  length?: number
  throttle?: number
  element?: HTMLElement
}
export function usePageScrollPercentage(callback: (scrollPercentage: number) => void, { startOffset = 0, endOffset = 0, length, element, throttle = 100 }: scrollCallbackOptions = {}) {
  const throttleKey = Date.now() + Math.random()
  useEventListener(
    'scroll',
    throttle
      ? () => throttleFn(throttle, onScrollCallback, { key: throttleKey, trailing: true })
      : onScrollCallback,
  )

  function onScrollCallback() {
    const _element = (toValue(element)) ?? window.document.body
    const _startOffset = toValue(startOffset)
    const _endOffset = toValue(endOffset)

    const current = window.scrollY + window.innerHeight
    const from = _element.offsetTop + _startOffset
    const to = (length || _element.scrollHeight)

    const percent = (current - from) / (to - _startOffset + _endOffset)

    callback(percent)
  }
}
