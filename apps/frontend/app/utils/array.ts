export function repeatArray(arr: any[], repeatTimes: number) {
  return Array.from({ length: repeatTimes }).fill(arr).flat()
}
