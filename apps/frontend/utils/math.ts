/**
 * Similar to Math.min() but keep the sign
 * 
 * Example:
 * ```
 * console.log(signedMin(5, 3, 4)); // result is 3
 * console.log(signedMin(-5, 3, 4)); // result is -3
 * ```
 */
export function signedMin(main: number, ...values: number[]): number {
  const sign = Math.sign(main)
  return sign * Math.min(Math.abs(main), ...values)
}

/**
 * Similar to Math.max() but keep the sign
 * 
 * Example:
 * ```
 * console.log(signedMaxClamp(2, 3, 4)); // result is 4
 * console.log(signedMaxClamp(-2, 3, 4)); // result is -4
 * ```
 */
export function signedMax(main: number, ...values: number[]): number {
  const sign = Math.sign(main)
  return sign * Math.max(Math.abs(main), ...values)
}

export interface easeToTargetOptions {
  /**
   * The speed/alpha of the ease
   */
  speed?: number

  /**
   * The deltaTime, to make sure the ease is consistent across framerates
   */
  delta?: number

  /**
   * When the different is lower than the threshold, returns the target  
   * This is helpful to avoid the loop running infinitely
   */
  threshold?: number

  /**
   * Optionally set the minimum bound of the step
   */
  clampMin?: number

  /**
   * Optionally set the maximum bound of the step
   */
  clampMax?: number
}
/**
 * A highly configurable exponential smoothing function
 * @returns number - 
 */
export function easeToTarget(
  current: number,
  target: number,
  {
    speed = 0.005,
    delta = 16.666666666666668, // defaults to delta of 60 FPS if not specified
    threshold = 0.05,
    clampMin,
    clampMax,
  }: easeToTargetOptions = {},
) {
  const diff = target - current
  if (Math.abs(diff) < threshold)
    return target

  let adjust = (speed * diff * delta)

  if (clampMin)
    adjust = signedMax(adjust, clampMin)

  if (clampMax)
    adjust = signedMin(adjust, clampMax)

  return current + adjust
}
