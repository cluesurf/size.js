const NUMBER = ['༠', '༡', '༢', '༣', '༤', '༥', '༦', '༧', '༨', '༩']

export function make(n: number) {
  const y = String(n)
    .split('')
    .map(x => NUMBER[parseInt(x, 10)])
  return y.join('')
}
