class: center, middle, white-titles animated fadeIn faster
background-image: url(https://jaredwhite.com/assets/background-portland.jpg)

# What’s New in Rails 6
--

## (…and the Future of the Ecosystem)

---
class: animated fadeInRight faster

# Here’s What We’ll Talk About

1. A Brief Introduction
2. How We Got Here (in the Space-Time Continuum? as Rails Programmers?)
3. Down to the Nitty-Gritties (6! One more than 5!)
4. Wrap Up (🌯)
5. Quick Break Before Next Lightning Talk

---
class: center animated fadeIn faster

# Allow Me To Introduce Myself
--

.avatar[![Jared White](https://jaredwhite.com/assets/jared-white-2018-II.jpg)]

I’m Jared White, the Founder and Lead Rubyist at [Whitefusion](https://whitefusion.io),  
a boutique web studio based in Portland, OR.

I’ve been at this Ruby on Rails game since v2 (circa 2008).

And as a designer/developer in general, since 1997!!! 😱

---
class: animated fadeIn faster

# Now Here’s An Interesting Thing

It dawned on me, as I was putting this presentation together, that I owe my livelihood as a developer to essentially three companies:

--

1. **Basecamp**
1. **Shopify**
1. **GitHub**

--

But it’s not just Rails I’m talking about…

---
class: center animated fadeInRight

# Let Us Turn Back the Clock

.rounded[![Rewind](https://media2.giphy.com/media/d3yxg15kJppJilnW/giphy.gif?cid=790b7611d0b971ab89f024def2ef2feec8dee6352e453df5&rid=giphy.gif)]

---
class: animated fadeIn faster

## On December 13, 2005…

DHH released the first official 1.0 version of **Ruby on Rails**.

--

## In 2006…

Tobi Lütke released **Liquid**, a Ruby-based template engine used by his new startup **Shopify**. (Much more on Shopify shortly…)

--

## In 2008…

Tom Preston-Warner, founder of **GitHub**, was fed up with WordPress and coded up a little Git-friendly static site generator called **Jekyll**. Tom's template engine of choice? You guessed it: **Liquid**.

---
class: center middle animated fadeIn

# Fast-Forward to Today

![Tape deck](https://media0.giphy.com/media/kigok3k6Ru2kP3hfNq/giphy.gif?cid=790b76119b4dd4034d52e08cade5d18ccc413525c5df9192&rid=giphy.gif)

On any given day of a typical week, I'm just as likely to be working on a Jekyll-based website as I am a Rails-based application. But in either case, the core technologies were spearheaded by those three companies I just mentioned. And you know what else is cool?

---
class: center middle animated fadeIn faster

# Guess Which Companies Are the <em>Top Contributors</em> to Rails for v6 and Beyond?

---
class: center middle animated zoomIn faster

# Basecamp

--

# Shopify

--

# GitHub

--

## _And all three are running off of <br/>**rails master**!!!_ 🤯

---
class: animated fadeIn faster

# Now Here’s Something Even Cooler?!

We all know that **Amazon** is the largest e-commerce platform in **America**.  
They’re huge. Maybe even yuge!

But do you know who the _second largest_ is?

--

# Shopify!

\* <small>well, it’s actually eBay, but Shopify is on track to surpass them by the end of the year.</small>

---
class: center middle animated zoomIn faster

# bUt rUbY oN rAiLs cAn'T sCaLe!

![SpongeBob SquarePants](https://media2.giphy.com/media/jpnUo1K9G5nzUuFUQT/giphy.gif?cid=790b76112cec5a472de8822692d7177f41b6cbe7f919b9e8&rid=giphy.gif)

---
class: center middle animated fadeIn faster

# But seriously, why does this matter to us, here and now?

---
class: center middle animated fadeIn faster

# Because I still remember the dark days of ~2015…

--

<hr />

## **Q:** Is Rails dying?

## **A:** Yes, you should switch to Node.js and AngularJS (v1).

---
class: animated fadeIn faster

# Thankfully, Rails did not, <br/>in fact, die!

We got a solid 5.0 release, then 5.1 with Webpacker (truly a major leap forward!), then more recently 5.2.

Meanwhile, GitHub went through a **massive** overhaul of its Rails codebase (at the leading of the very talented Eileen M. Uchitelle) to shift from using a crazy fork of Rails 2.x to using modern, "stock" Rails. This is what allowed GitHub to go even farther and [start running off of master](https://github.blog/2019-09-09-running-github-on-rails-6-0/) and contributing heavily to Rails for version 6 (and they show no signs of stopping!)

[Shopify is also running off of master](https://engineering.shopify.com/blogs/engineering/living-on-the-edge-of-rails) and has also contributed heavily to Rails 6.

---
class: center middle animated fadeIn faster

# Bottom line: Rails is arguably in the best shape ever!  

--

![Charlie Brown Dance Party](https://media0.giphy.com/media/UDUjlUnZyzVAY/giphy.gif?cid=790b7611c0ced1f31daa0da5e8d7b48eeb983b76c54f2784&rid=giphy.gif)

## And there was much rejoicing o'er the land!

---
class: center middle animated zoomIn faster

# OK, let’s dive into Rails 6.

## Time to peek under the hood.

---
class: animated fadeIn faster

# The Best Feature of Rails 6

Thanks to the new **Action Mailbox** framework, it is now fully compliant with **Zawinski’s Law**!

--

> Every program attempts to expand until it can read mail. Those programs which cannot so expand are replaced by ones which can.

--

.center[![Dancing Troll](https://media0.giphy.com/media/amxLHEPgGDCKs/giphy.gif?cid=790b76116288c5b5bae58323266e99c597ea50b3f20c34b0&rid=giphy.gif)]

---
class: animated fadeIn faster

# Let’s Code!

```ruby
def add(a,b)
  if 1 != 2 && {:a => :b} == {:a => :b}
    a + b
  # yeah! <->
  end
end
```