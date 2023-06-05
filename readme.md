<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<h3 align='center'>@tunebond/size</h3>
<p align='center'>
  Number conversion in multiple languages in TypeScript
</p>

<br/>
<br/>
<br/>

## Installation

```
pnpm add @tunebond/size
yarn add @tunebond/size
npm i @tunebond/size
```

## Example

```ts
import size from './index.js'

// test a === b
// (this is the hebrew number for 123)
test('קג', size.hebrew.make(123))

function test(a: string, b: string) {
  if (a !== b) {
    throw new Error(`${a} != ${b}`)
  }
}
```

## Goal

The goal of this library is to easily convert a number in
JavaScript/TypeScript to a number in any of the worlds writing systems.
So for example, write the number `123` in Hebrew as `קג`.

Each language / writing system has many quirks on how they handle
generating numbers. For example, there are two separate number systems
in Korean (because they evolved separately), and in Chinese there are
specific numbers for "general usage" and those for "financial usage" (in
addition to there being "simplified" and "traditional" variants in both
those categories!). Another example is some languages don't count by 10
the way English does, they may count by 5 or 16 or 60 or have some other
interesting ways of grouping the numbers, so it can get rather complex
potentially, but most cases it's pretty straightforward.

The goal is to, for each writing system in the
[code](https://github.com/tunebond/size.js/tree/make/code) folder,
create a way to convert a JavaScript number to the native writing system
number, using their preferred standard system, and to convert it back
from the native writing system format into JavaScript. So 2 functions.

For now, we are only focusing on basic numbers, i.e. "cardinal numbers",
not ordinal numbers or other types of numbers.

## Walkthrough

This library in general has 2 methods per writing system:

- `make`: Generates a number within that writing system, given a regular
  input number.
- `read`: Generates a regular number, given a number in some writing
  system.

So we have (TODO):

```ts
size.hebrew.make(123) // => קג
size.hebrew.read('קג') // => 123
```

See the [code](https://github.com/tunebond/size.js/tree/make/code)
folder for the current and future supported later. Once we are closer to
finishing them we will document them here in the readme.

## Implementing

If you are helping to implement these functions, you might have to do a
little browsing around GitHub, Wikipedia, and the web in general to find
how the numbers work in your particular focused language or writing
system, and go into a tiny bit of depth. Ideally we would cover numbers
up to 1 trillion, so it should handle large numbers, but if you can't
find that information, just skip it for now.

You can test it working by adding to the
[test.ts](https://github.com/tunebond/size.js/blob/make/test.ts) file,
and run the tests with:

```
pnpm test
```

Oh also you can install the dependencies with:

```
pnpm install
```

(Just make sure you have `pnpm` installed, which is an alternative to
npm/yarn):

```
npm install -g pnpm
```

## Notes

- [Writing systems](https://en.wikipedia.org/wiki/List_of_writing_systems)
- https://en.wikibooks.org/wiki/Chinese_(Mandarin)/Numbers
- https://improvemandarin.com/chinese-numbers/
- https://ling-app.com/ko/korean-numbers/
- https://www.koreanclass101.com/blog/2019/10/24/korean-numbers/
- [Korean number algorithms](https://github.com/AdamDavisDeveloper/learn-korean-numbers/blob/master/app.js)

## License

MIT

## TuneBond

This is being developed by the folks at [TuneBond](https://tune.bond), a
California-based project for helping humanity master information and
computation. TuneBond started off in the winter of 2008 as a spark of an
idea, to forming a company 10 years later in the winter of 2018, to a
seed of a project just beginning its development phases. It is entirely
bootstrapped by working full time and running
[Etsy](https://etsy.com/shop/tunebond) and
[Amazon](https://www.amazon.com/s?rh=p_27%3AMount+Build) shops. Also
find us on [Facebook](https://www.facebook.com/tunebond),
[Twitter](https://twitter.com/tunebond), and
[LinkedIn](https://www.linkedin.com/company/tunebond). Check out our
other GitHub projects as well!
