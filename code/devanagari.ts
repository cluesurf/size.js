const NUMBER = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']

export function make(n: number) {
  const y = String(n)
    .split('')
    .map(x => NUMBER[parseInt(x, 10)])
  return y.join('')
}
