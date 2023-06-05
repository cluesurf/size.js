const NUMBER = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']

export function make(n: number) {
  const y = String(n)
    .split('')
    .map(x => NUMBER[parseInt(x, 10)])
  return y.join('')
}
