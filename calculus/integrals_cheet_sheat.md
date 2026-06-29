# Integration Cheet Sheat

## Integration rules

The inverse of the expoent differentiation rule:

$$ \int x^n \\,dx = \frac{x^{n+1}}{n+1} + C $$
$$ \int x \\,dx = \frac{x^{2}}{2} + C $$

> Tip: Add 1 to the expoent and divide all by the result

Logarithm rule:

$$ \int \frac{f'(x)}{f(x)} \\,dx = \ln \lvert f(x) \rvert + C $$

Natural expoent:

$$ \int e^x \\,dx = \ln e^x + C $$

Some other rules:

$$ \int a^x \\,dx = \frac{a}{\ln(a)} + C $$

Trigonometric rules:

$$
\begin{aligned}
    \int \sin x \\,dx &= -\cos x + C \\
    \int \cos x \\,dx &= \sin x + C \\
    \int \sec^2 x \\,dx &= \tan x + C \\
    \int \csc^2 x \\,dx &= -\cot x + C \\
    \int \sec x \cdot \tan x \\,dx &= \sec x + C \\
    \int \csc x \cdot \cot x \\,dx &= -\csc x + C
\end{aligned}
$$

## Linearity Rules

The integral of a sum is the sum of the integrals of its parts:

$$
\begin{align*}
    \int (f(x) + g(x))\\,dx &= \int f(x)\\,dx + \int g(x)\\,dx \\
    \int (x + x^2)\\,dx &= \int x\\,dx + \int x^2\\,dx \\
\end{align*}
$$

Any constant can be taken out of the integration:

$$
\begin{align*}
    \int c \cdot f(x)\\,dx &= c \int f(x)\\,dx \\
    \int 2x^2 \\,dx &= 2 \int x^2 \\,dx \\
    \int \frac{x}{5} \\,dx &= \frac{1}{5} \int x \\,dx \\
\end{align*}
$$

## Integration By Substitution

The substitution is used as the inverse of the chain derivation rule:

$$ \int (f(x) + g(x))\\,dx = \int f(x)\\,dx + \int g(x)\\,dx $$
$$ \int (x + x^2)\\,dx = \int x\\,dx + \int x^2\\,dx $$

Any constant can be taken out of the integration:

$$ \int c \cdot f(x)\,dx = c \int f(x)\,dx $$
$$ \int 2x^2 \,dx = 2 \int x^2 \,dx $$
$$ \int \frac{x}{5} \,dx = \frac{1}{5} \int x \,dx $$

Solving the following:

$$ \int \frac{2x}{x^2 + 1} \\,dx $$

First, we choose an inner function and set it equal to $u$.

$$
\begin{align}
u = x^2 + 1
\end{align}
$$

Next, we differentiate $u$ with respect to $x$ to find $du$.

$$
\begin{align}
    du &= \frac{dy}{dx}\, u \\
    du &= 2x \\
\end{align}
$$

Then, we substitute $u$ and $du$ into the original integral to eliminate
all variables of $x$.

$$\int u \\,du $$

Solving ...

$$
\begin{align}
    \int u \\,du &= \frac{u^2}{2} + C \\
    u^2 + C &= \frac{(x^2 + 1)^2}{2} + C \\
\end{align}
$$


## Simplified Rules

Based on $\int \frac{f'(x)}{f(x)} \\,dx = \ln \\lvert f(x) \\rvert + C$:


$$
\int \frac{dx}{x} = \ln \lvert x \rvert + C \\
$$

$$
\int \frac{1}{x} \\,dx = \ln\lvert x \rvert + C
$$

$$
\begin{align*}
\int \tan(x) \\,dx
    &= \int \frac{\sin(x)}{\cos(x)} \\,dx \\
    &= -\ln \lvert \cos(x) \rvert + C \\
    &= \ln \lvert \sec(x) \rvert + C \\
\end{align*}
$$

$$
\begin{align*}
\int ctan(x) \\,dx
    &= \int \frac{\cos(x)}{\sin(x)} \\,dx \\
    &= \ln|\sec(x)+\tan(x)| + C
\end{align*}
$$

## Pre-Calculus Useful Rules

### Roots
$$ \sqrt{b} = {b}^{1/2} $$
$$ \sqrt[a]{b} = {b}^{1/a} $$

### Expoents
$$ b^m \cdot b^n = b^{m+n} $$
$$ \frac{b^m}{b^n} = b^{m-n} $$
$$ (b^m)^n = b^{mn} $$

### Fractions
$$ \frac{1}{b^n} = b^{-n} $$
$$ \frac{a}{b^n} = a \cdot b^{-n} $$

### Log
$$ \frac{d}{dx} e^x = e^x $$

$$ \int e^x \, dx = e^x + C $$

$$ \frac{d}{dx} \ln x = \frac{1}{x} $$

### Power Reduction

$$\sin^2(x) = \frac{1 - \cos(2x)}{2}$$
$$\cos^2(x) = \frac{1 + \cos(2x)}{2}$$
