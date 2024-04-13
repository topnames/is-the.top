import type { UseScrollOptions, UseScrollReturn } from '@vueuse/core'

export interface scrollCallbackOptions {
  startOffset?: number
  endOffset?: number
  length?: number
  element?: HTMLElement
}
export function usePageScrollPercentage(callback: (scrollPercentage: number) => void, { startOffset = 0, endOffset = 0, length, element }: scrollCallbackOptions = {}) {
  useEventListener('scroll', onScrollCallback)

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
