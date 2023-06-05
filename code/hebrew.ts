const one = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט']

const ten = ['י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ']

const hundred = ['ק', 'ר', 'ש', 'ת', 'ך', 'ם', 'ן', 'ף', 'ץ']

/**
 * Convert number to Hebrew script number.
 */

export function make(n: number) {
  const a = Math.floor(n / 100)
  const x = n % 100
  const b = Math.floor(n / 10)
  const y = x % 10

  const s = []
  if (a) {
    s.push(hundred[a - 1])
  }
  if (b) {
    s.push(ten[b - 1])
  }
  if (y) {
    s.push(one[y - 1])
  }

  return s.join('')
}

/**
 * Convert Hebrew script number to number.
 */

export function read(text: string) {}
