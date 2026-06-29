# Math and equations with LaTeX

## Basic syntax and arithmetic

### Fractions

```latex
\frac{a}{b}
```
$$ \frac{a}{b} $$

### Superscript

This syntax is also used to define expoents

```latex
a^b
```
$$ a^b $$

Words or equations must be surrounded by `\{\}`

```latex
S^{omething}
```
$$ S^{omething} $$


### Subscript

```latex
a_b
```
$$ a_b $$

Words or equations must be surrounded by `\{\}`

```latex
S_{omething}
```
$$ S_{omething} $$

### Squareroots and other roots

Squareroots

```latex
\sqrt{x}
```
$$\sqrt{x}$$

For roots of other numbers or variables, `\sqrt[x]` must be used, being `x`
the root value

```latex
\sqrt[a]{b}
```
$$\sqrt[a]{b}$$


## Calculus

### Summation

`\sum` defines the summation symbol

```latex
\sum
```
$$ \sum $$

The subscript and supescript syntax can be used to define the upper and
lower values. \
in `\sum_{a}^{b}`, `a` defines the bottom and `b` the upper value

```latex
\sum_{i=1}^{n} i
```
$$ \sum_{i=1}^{n} i  $$

### Product

`\prod` defines the product symbol

```latex
\prod
```
$$ \prod $$

The subscript and supescript syntax can be used to define the upper and
lower values. \
in `\prod_{a}^{b}`, `a` defines the bottom and `b` the upper value

```latex
\prod_{i=1}^{n} i
```
$$ \prod_{i=1}^{n} i  $$

### Limit

`\lim` defines the limit symbol
```latex
\lim
```
$$ \lim $$

`\to` defines the right arrow symbol

```latex
\to
```
$$ \to $$

Combined with those, the subscript syntax can be used to define the limit value
```latex
\lim_{x \to 0}
```
$$ \lim_{x \to 0} $$

### Integration

The integration symbol can be defined as
```latex
\int
```
$$ \int $$

The diferential can be defined as text. the use of any space before it is
reccomended.
```latex
\:dx
```
$$ \:dx $$

Combined with those, the subscript and superscript syntax can be used to
define the defined integral's limits

```latex
\int_{a}^{b} x \:dx
```
$$ \int_{a}^{b} x \:dx $$

### Linear Algebra

#### Matriceses

A matrix is defined inside a LaTeX context:
```latex
\begin{c}
\end{c}
% Being `c` the name of the context
```

The collumns are separated by `&` and the lines by `\\`.

The options for matrix contexts are:
- matrix - No delimiters
- pmatrix - Parenthesis delimters
- vmatrix - Vertical line delimters
- Vmatrix - Double vertical line delimters

```latex
\begin{matrix}
1 & 2 \\
3 & 4
\end{matrix}
```
$$
\begin{matrix}
1 & 2 \\
3 & 4
\end{matrix}
$$

```latex
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
```
$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$

```latex
\begin{vmatrix}
1 & 2 \\
3 & 4
\end{vmatrix}
```
$$
\begin{vmatrix}
1 & 2 \\
3 & 4
\end{vmatrix}
$$

```latex
\begin{Vmatrix}
1 & 2 \\
3 & 4
\end{Vmatrix}
```
$$
\begin{Vmatrix}
1 & 2 \\
3 & 4
\end{Vmatrix}
$$

It is also possible to manually define the delimiters of the matrix with
`\left` and `\right`:

```latex
\left[
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right]

\left(
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right)

\left|
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right|

\left\|
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right\|

\left\langle
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right\rangle

\left\lfloor
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right\rfloor

\left\lceil
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right\rceil
```

$$
\left[
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right]

\left(
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right)

\left|
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right|

\left\|
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right\|

\left\langle
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right\rangle

\left\lfloor
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right\rfloor

\left\lceil
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right\rceil
$$

It is also possible to mix them

```latex
\left(
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right|

\left\rceil
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right\rfloor
```

$$
\left(
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right|

\left\rceil
    \begin{matrix} 1 & 2 \\ 3 & 4 \end{matrix}
\right\rfloor
$$

### Cases
//TODO

```latex
f(x)=
    \begin{cases}
        x^2, & x \ge 0 \\
        -x, & x < 0
    \end{cases}
```

$$
f(x)=
    \begin{cases}
        x^2, & x \ge 0 \\
        -x, & x < 0
    \end{cases}
$$

### Alignment
//TODO

$$
\begin{align*}
    f(x) &= x^2 + 2x + 1 \\
    f'(x) &= 2x + 2 \\
    f'(0) &= 2
\end{align*}
$$

$$
\begin{align}
5x &= 2 \times 10 \\
x & = \frac{2 \times 10}{5} \\
x & = \frac{20}{5} \\
x & = 4
\end{align}
$$

### Symbol Tables

### Binary Operations

| Symbol | Syntax | Name |
|:------:|:------:|:----:|
| $ + $       | `+`       | Plus            |
| $ - $       | `-`       | Minus           |
| $ \pm $     | `\pm`     | Plus or Minus   |
| $ \mp $     | `\mp`     | Minus or Plus   |
| $ \times $  | `\times`  | Times           |
| $ \cdot $   | `\cdot`   | Dot             |
| $ \div $    | `\div`    | Division        |
| $ \circ $   | `\circ`   | Composition     |
| $ \bullet $ | `\bullet` | Bullet Operator |

#### Greek Letters Symbols
| Symbol         | Syntax        | Name              |
|:--------------:|:-------------:|:-----------------:|
|$ \alpha $      | `\alpha`      | alpha             |
|$ \beta $       | `\beta`       | beta              |
|$ \gamma $      | `\gamma`      | gamma             |
|$ \delta $      | `\delta`      | delta             |
|$ \epsilon $    | `\epsilon`    | epsilon           |
|$ \varepsilon $ | `\varepsilon` | epsilon variant   |
|$ \zeta $       | `\zeta`       | zeta              |
|$ \eta $        | `\eta`        | eta               |  
|$ \theta $      | `\theta`      | theta             |
|$ \vartheta $   | `\vartheta`   | theta variant     |
|$ \Theta $      | `\Theta`      | theta uppercase   |
|$ \zeta $       | `\zeta`       | zeta              |
|$ \iota $       | `\iota`       | iota              |
|$ \kappa $      | `\kappa`      | kappa             |
|$ \lambda $     | `\lambda`     | lambda            |
|$ \Lambda $     | `\Lambda`     | lambda uppercase  |
|$ \mu $         | `\mu`         | mu                |
|$ \nu $         | `\nu`         | nu                |
|$ \xi $         | `\xi`         | xi                |
|$ \Xi $         | `\Xi`         | xi uppercase      |
|$ \pi $         | `\pi`         | pi                |
|$ \Pi $         | `\Pi`         | pi uppercase      |
|$ \rho $        | `\rho`        | rho               |
|$ \varrho $     | `\varrho`     | rho variant       |
|$ \sigma $      | `\sigma`      | sigma             |
|$ \Sigma $      | `\Sigma`      | sigma uppercase   |
|$ \tau $        | `\tau`        | tau               |
|$ \upsilon $    | `\upsilon`    | upsilon           |
|$ \Upsilon $    | `\Upsilon`    | upsilon uppercase |
|$ \phi $        | `\phi`        | phi               |
|$ \varphi $     | `\varphi`     | phi variant       |
|$ \Phi $        | `\Phi`        | phi uppercase     |
|$ \chi $        | `\chi`        | chi               |
|$ \psi $        | `\psi`        | psi               |
|$ \Psi $        | `\Psi`        | psi uppercase     |
|$ \omega $      | `\omega`      | omega             |
|$ \Omega $      | `\Omega`      | omega uppercase   |

#### Arrows

| Symbol    | Syntax   | Name  |
|:---------:|:--------:|:-----:|
| $ \leftarrow $      | `\leftarrow`      | Left Arrow                    |
| $ \Leftarrow $      | `\Leftarrow`      | Left Arrow (double)           |
| $ \rightarrow $     | `\rightarrow`     | Right Arrow                   |
| $ \Rightarrow $     | `\Rightarrow`     | Right Arrow (double)          |
| $ \leftrightarrow $ | `\leftrightarrow` | Left and Right Arrow          |
| $ \Leftrightarrow $ | `\Leftrightarrow` | Left and Right Arrow (double) |
|
| $ \uparrow $     | `\uparrow`     | Up Arrow                 |
| $ \Uparrow $     | `\Uparrow`     | Up Arrow (double)        |
| $ \downarrow $   | `\downarrow`   | Down Arrow               |
| $ \Downarrow $   | `\Downarrow`   | Down Arrow (double)      |
| $ \updownarrow $ | `\updownarrow` | Up & Down Arrow          |
| $ \Updownarrow $ | `\Updownarrow` | Up & Down Arrow (double) |
| $ \nearrow $     | `\nearrow`     | North-East Arrow         |
| $ \nwarrow $     | `\nwarrow`     | North-Weast Arrow        |
| $ \swarrow $     | `\swarrow`     | South-Weast Arrow        |
| $ \searrow $     | `\searrow`     | South-Weast Arrow        |
|
| $ \leftharpoonup $     | `\leftharpoonup`     | Left Harpoon Up         |
| $ \leftharpoondown $   | `\leftharpoondown`   | Left Harpoon Down       |
| $ \rightharpoonup $    | `\rightharpoonup`    | Right Harpoon Up        |
| $ \rightharpoondown $  | `\rightharpoondown`  | Right Harpoon Down      |
| $ \rightleftharpoons $ | `\rightleftharpoons` | Left and Right harpoons |
|
| $ \to $         | `\to`         | To             |
| $ \mapsto $     | `\mapsto`     | Maps To        |
| $ \longmapsto $ | `\longmapsto` | Maps To (long) |


### Equality and Relation

| Symbol | Syntax | Name |
|:------:|:------:|:----:|
| $=$ | `=` | Equals |
| $\neq$ | `\neq` | Not Equal |
| $\equiv$ | `\equiv` | Identical To |
| $\approx$ | `\approx` | Approximately Equal |
| $\sim$ | `\sim` | Similar |
| $\simeq$ | `\simeq` | Similar or Equal |
| $\cong$ | `\cong` | Congruent |
| $\propto$ | `\propto` | Proportional To |
|
| $<$ | `<` | Less Than |
| $>$ | `>` | Greater Than |
| $\le$ | `\le` | Less Than or Equal |
| $\ge$ | `\ge` | Greater Than or Equal |
| $\ll$ | `\ll` | Much Less Than |
| $\gg$ | `\gg` | Much Greater Than |
|
| $\subset$ | `\subset` | Subset |
| $\subseteq$ | `\subseteq` | Subset or Equal |
| $\supset$ | `\supset` | Superset |
| $\supseteq$ | `\supseteq` | Superset or Equal |
| $\in$ | `\in` | Element Of |
| $\notin$ | `\notin` | Not an Element Of |
| $\ni$ | `\ni` | Contains As Member |
|
| $\forall$ | `\forall` | For All |
| $\exists$ | `\exists` | There Exists |
| $\nexists$ | `\nexists` | There Does Not Exist |
|
| $\vdash$ | `\vdash` | Proves |
| $\models$ | `\models` | Models |
| $\perp$ | `\perp` | Perpendicular |
| $\parallel$ | `\parallel` | Parallel |

### Miscellaneous

| Symbol | Syntax | Name |
|:------:|:------:|:----:|
| $\infty$ | `\infty` | Infinity |
| $\partial$ | `\partial` | Partial Derivative |
| $\nabla$ | `\nabla` | Nabla / Del |
| $\angle$ | `\angle` | Angle |
| $\triangle$ | `\triangle` | Triangle |
| $\Box$ | `\Box` | Square |
| $\Diamond$ | `\Diamond` | Diamond |
| $\bullet$ | `\bullet` | Bullet |
| $\cdot$ | `\cdot` | Dot |
| $\circ$ | `\circ` | Circle |
| $\oplus$ | `\oplus` | Circled Plus |
| $\ominus$ | `\ominus` | Circled Minus |
| $\otimes$ | `\otimes` | Circled Times |
| $\oslash$ | `\oslash` | Circled Slash |
| $\odot$ | `\odot` | Circled Dot |
|
| $\Re$ | `\Re` | Real Part |
| $\Im$ | `\Im` | Imaginary Part |
|
| $\aleph$ | `\aleph` | Aleph |
| $\wp$ | `\wp` | Weierstrass p |
| $\hbar$ | `\hbar` | Reduced Planck Constant |
| $\ell$ | `\ell` | Script l |
|
| $\clubsuit$ | `\clubsuit` | Club Suit |
| $\diamondsuit$ | `\diamondsuit` | Diamond Suit |
| $\heartsuit$ | `\heartsuit` | Heart Suit |
| $\spadesuit$ | `\spadesuit` | Spade Suit |
|
| $ \star $ | `\star` | Star |