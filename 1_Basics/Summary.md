# JavaScript — Phase 1 Basics
## 1 · Variables

### 1.1 Official definition

> “The `const` declaration creates block‑scoped, read‑only named bindings that cannot be re‑assigned.” — *MDN*[12]
>
> “The `let` declaration declares re‑assignable, block‑scoped local variables, optionally initialising each to a value.” — *MDN*[1]
>
> “A `var` statement declares variables that are scoped to the running execution context’s *VariableEnvironment* … and are initialised to *undefined* when created.” — *ECMA‑262 14.6.2*[2]

### 1.2 Explaination

Variables are labelled jars for data: the **label** is the *identifier*, the contents are the *value*, and the shelf they sit on (block or function) is the *scope*.

`var` **v/s** `let` **v/s** `const`

| Keyword | Scope      | Hoisting & TDZ                                                     | Redeclaration | Re‑assignment                                          | When to use                                                       |
| ------- | ---------- | ------------------------------------------------------------------ | ------------- | ------------------------------------------------------ | ----------------------------------------------------------------- |
| `var`   | *function* | Hoisted & *initialised* to `undefined` (no TDZ)                    | ✅ allowed     | ✅                                                      | Legacy code only — leaks outside `{}` and surprises with hoisting |
| `let`   | *block*    | Hoisted but lives in **Temporal Dead Zone** until first evaluation | ❌             | ✅                                                      | Use for variables that must change                                |
| `const` | *block*    | Hoisted & TDZ like `let`                                           | ❌             | ❌ re‑assignment (but object/array contents may mutate) | Prefer by default when value should not be rebound                |

### Why modern code avoids `var`

1. **Block‑scope leaks** – loop counters declared with `var` escape the loop body, causing unintended side‑effects.
2. **Silent hoisting** – accessing a `var` before declaration yields `undefined` instead of an error, masking bugs.
3. **Accidental redeclaration** – `var x` can be declared again in the same scope, overwriting earlier values.
4. **Closure gotchas** – each iteration of a `for` with `var` shares the same binding, leading to classic timer/handler pitfalls (see the quiz below).

> **Rule of thumb**: write `const` by default, switch to `let` only when you *need* to re‑assign, and reserve `var` for maintaing old codebases.

### 1.3 Key details

|  Aspect       |  `const`       |  `let`  |  `var`                   |
| ------------- | -------------- | ------- | ------------------------ |
| Mutability    | ❌ reassignment | ✅       | ✅                        |
| Scope         | block          | block   | function                 |
| Hoisted?      | TDZ\*          | TDZ\*   | yes (init = `undefined`) |
| Redeclarable? | ❌              | ❌       | ✅                        |

\*TDZ – Temporal Dead Zone: variable exists but cannot be accessed until evaluated.

### 1.4 Mini code

```js
const PI = 3.1416;
let score = 42;
var legacy = "avoid me";
```

### 1.5 Quirks

- Accessing `let`/`const` before declaration → **ReferenceError** (TDZ).
- `var` leaks out of `for`/`if` blocks.

### 1.6 One‑minute quiz

Why does the loop below log `10 10 10 10`?

```js
for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i));
}
```

---

## 2 · Memory model (Stack vs Heap)

> The spec does not name “stack” or “heap”, but JavaScript engines usually store *primitive* values in a call‑stack frame and *objects* in a garbage‑collected heap.

**Plain English —** primitives are tiny sticky‑notes copied by *value*; objects are crates stored in a warehouse, and variables hold only the warehouse *address*.

### Key take‑aways

- Copying a primitive produces an independent value.
- Copying an object/array copies the reference → shallow copy.

---

## 3 · Data types

> “JavaScript values are of two types: **primitive values** and **Object** values.” — *MDN: Data types & structures*[3]

### 3.1 Primitive types

`string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, `null` *(yes, still reported as "object")*.

### 3.2 Reference types

`Object` (includes `Array`, `Function`, `Date`, user literals, etc.).

### Code crib

```js
let city = "Lahore";          // string (primitive)
let person = { name: "Ali" }; // object (reference)
```

### Quirks

- `typeof null` → "object" (legacy bug).
- Numbers are IEEE‑754 doubles → `0.1 + 0.2 !== 0.3`.

---

## 4 · Type conversion & coercion

> “**Type coercion** is the automatic or implicit conversion of values from one data type to another … **Type conversion** can be implicit **or explicit**.” — *MDN Glossary*[4]

### Cheatsheet

| Expression       | Result  | Why                         |
| ---------------- | ------- | --------------------------- |
| `"1" + 2`        | "12"    | string concatenation wins   |
| `1 + "2"`        | "12"    | same                        |
| `"5" - 1`        | 4       | `-` forces numeric coercion |
| `Number("23gh")` | `NaN`   | invalid digits              |
| `Boolean(0)`     | `false` | 0 is falsy                  |

### Truthy vs Falsy

In JavaScript **every value coerces to a Boolean** when used in conditionals (`if`, `while`, logical `&& / ||`, `?:`). Values that coerce to `true` are *truthy*; those that coerce to `false` are *falsy*. Memorising the tiny falsy‑whitelist helps you predict behaviour without surprises.

**Falsy values** (only eight): `0`, `-0`, `0n`, `""` (empty string), `null`, `undefined`, `false`, `NaN`.

**Truthy values**: Everything that isn’t on the falsy list — non‑zero numbers, non‑empty strings, objects, arrays, functions, symbols, BigInt ≠ `0n`, etc.

### Quiz

Why is `null >= 0` **true** but `null > 0` **false**? Answer`>=` converts both sides to numbers (null → 0), `>` first converts, compares strictly then returns false when equal.

---

## 5 · Comparison operators

> “A **comparison operator** compares its operands and returns a boolean value …” — *MDN: Expressions & operators*[5]

### Reference table

| Operator | Name                  | Use                                                    |
| -------- | --------------------- | ------------------------------------------------------ |
| `>`      | greater than          | true if *left* operand is greater than *right* operand |
| `<`      | less than             | true if left operand is less than right operand        |
| `>=`     | greater than or equal | true if left ≥ right                                   |
| `<=`     | less than or equal    | true if left ≤ right                                   |
| `==`     | loose equality        | compares after type coercion (avoid in new code)       |
| `!=`     | loose inequality      | negation of `==` (also coerces)                        |
| `===`    | strict equality       | true when value **and** type are identical             |
| `!==`    | strict inequality     | true when value or type differ                         |

### Pitfalls

- Use `===`/`!==` unless you *want* coercion.
- String comparison is lexicographic by UTF‑16 code units → "Z" < "a".

---

## 6 · Strings

> “**String** objects are used to represent and manipulate sequences of characters.” — *MDN: String*[6]

### Must‑know methods

`length`, `toUpperCase`, `slice`, `substring`, `replace`, `split`, `includes`, template‑literals \`Hello \${name}\`.

```js
const lang = "JavaScript";
console.log(`${lang} length =`, lang.length);
```

### Quirks

- Strings are immutable → methods return **new** strings.
- Index access via `str[i]` (introduced ES5).

---

## 7 · Numbers & Math

### 7.1 Official definition

> “`Number` values represent IEEE‑754 double‑precision floating‑point numbers, which are capable of representing integers up to 253 − 1 precisely as well as fractional values.” — *MDN*
>
> “The \`\`\*\* object\*\* provides static properties and methods for mathematical constants and functions.” — *MDN*

### 7.2 What “number” means in JS 🔬

- Single numeric type: **64‑bit floating point** — integers and decimals live together.
- Precision exact for integers |value| ≤ 253 − 1; beyond that use \`\`.
- All arithmetic is floating‑point, so `0.1 + 0.2 !== 0.3`.

| Static limit              | Value                   | Notes                                            |
| ------------------------- | ----------------------- | ------------------------------------------------ |
| `Number.MAX_VALUE`        | 1.7976931348623157e+308 | Largest finite value                             |
| `Number.MIN_VALUE`        | 5e‑324                  | Smallest positive value                          |
| `Number.MAX_SAFE_INTEGER` | 9 007 199 254 740 991   | 253 − 1 — last integer with exact precision      |
| `Number.MIN_SAFE_INTEGER` | −9 007 199 254 740 991  | −(253 − 1)                                       |
| `Number.NaN`              | NaN                     | “Not‑a‑Number”, never equal to itself            |
| `Infinity`, `-Infinity`   | ±∞                      | Overflow, division‑by‑zero, or explicit literals |

### 7.3 Useful `Number` methods

- \`\` – round & keep *d* decimals → `(1/3).toFixed(2) // "0.33"`
- \`\` – *p* significant digits; may switch to scientific form.
- \`\` – thousands separators / currency formatting.

### 7.4 The **Math** toolbox 🧮

| Call                      | Result (example)    | What it does         |
| ------------------------- | ------------------- | -------------------- |
| `Math.abs(-4)`            | `4`                 | Absolute value       |
| `Math.round(4.7)`         | `5`                 | Round to nearest int |
| `Math.floor(4.9)`         | `4`                 | Round downward       |
| `Math.ceil(4.1)`          | `5`                 | Round upward         |
| `Math.pow(2,3)` or `2**3` | `8`                 | Exponentiation       |
| `Math.sqrt(9)`            | `3`                 | Square root          |
| `Math.max(1,5,3)`         | `5`                 | Highest arg          |
| `Math.min(…arr)`          | lowest              | Lowest arg           |
| Constant                  | `Math.PI` ≈ 3.14159 | Pi (π)               |

### 7.5 Random‑number cheat‑sheet 🎲

```js
// inclusive range [min, max]
const rand = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// even number in range (throws if none)
const randEven = (min, max) => {
  if (min > max) [min, max] = [max, min];
  if (min % 2) min++;                      // bump to next even
  if (min > max) throw "No even value in range";
  const slots = Math.floor((max - min) / 2) + 1;
  return min + Math.floor(Math.random() * slots) * 2;
};

// odd number in range
const randOdd = (min, max) => randEven(min ^ 1, max);

// random multiple of n in range
const randMultiple = (min, max, n) =>
  Math.floor(rand(min, max) / n) * n;
```

### 7.6 Quirks & gotchas 🚧

- `NaN === NaN` is **false** → use `Number.isNaN()`.
- Division by 0 → `Infinity` (or `-Infinity`).
- `parseInt("08")` honours radix 10 by default, but always pass a radix parameter (`parseInt("08", 10)`).
- Floating‑point rounding errors accumulate (`0.1 + 0.2` example).

---

## 8 · Date & Time · Date & Time

> “The **Date** object represents a single moment in time in a platform‑independent format.” — *MDN: Date*[9]

### Essentials

|  Task        |  Snippet                        |
| ------------ | ------------------------------- |
| Current date | `new Date()`                    |
| ISO string   | `date.toISOString()`            |
| Local string | `date.toLocaleString("en‑PK")`  |
| Epoch ms     | `Date.now()` / `date.getTime()` |

### Gotchas

- Months are zero‑indexed (`0 = January`).
- Large arithmetic → prefer **luxon**, **dayjs**, etc., for prod.

---

## 9 · Arrays

> “The **Array** object, as with arrays in other programming languages, enables storing ordered collections of items.” — *MDN: Array*[10]

### Core operations

Mutators → `push`, `pop`, `shift`, `unshift`, `splice`\
Non‑mutators → `slice`, `concat`, spread `[...]`, `flat`, `includes`, `indexOf`, `join`

```js
const nums = [1,2,3];
nums.push(4);       // [1,2,3,4]
const head = nums.shift(); // 1
```

### Quirks

- `push`ing an **array** into another adds it as *nested* value.
- `Array.from("hello")` returns `["h","e","l","l","o"]`.

---

## 10 · Objects & JSON

> “**Objects** in JavaScript are collections of key–value pairs.” — *MDN: Objects*[11]

### Highlights

- Dot vs bracket access; bracket mandatory for keys with spaces or symbols.
- Symbols as keys are hidden from normal enumeration.
- Merging → `Object.assign(target, …sources)` or `{ ...obj1, ...obj2 }`.
- Introspection → `Object.keys`, `Object.values`, `Object.entries`, `Object.hasOwn`.
- Immutability guard → `Object.freeze`.
- Destructuring & renaming: `const { price: cost } = item`.

### JSON & APIs

`JSON.stringify(obj)` ↔ `JSON.parse(str)` — exchange format between browser ↔ server.

### Quirks

- Property order is *usually* insertion order but spec preserves numeric keys differently.

---

## 11 · Truthy / Falsy Quick‑ref

```
Falsy → 0, -0, 0n, "", null, undefined, false, NaN
Truthy → everything else
```

---

## 12 · Practice challenges (from `strings_practice.js`)

- Reverse a string without `.reverse()`
- Count vowels (case‑insensitive)
- Palindrome checker
- Capitalise every word
- Remove duplicate characters

Use these to smoke‑test your understanding after each section.

---

## Footnotes

1. MDN — [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)[ declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
2. ECMA‑262 (2026‑07) — §14.6.2 *Var Declaration*
3. MDN — [Data types & data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures)
4. MDN — [Type coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
5. MDN — [Expressions & operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
6. MDN — [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)[ object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
7. MDN — [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)[ object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
8. MDN — [`Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)[ object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
9. MDN — [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)[ object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
10. MDN — [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)[ object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
11. MDN — [Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
12. MDN — [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)[ declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

