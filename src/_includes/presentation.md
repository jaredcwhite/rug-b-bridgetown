class: center, middle, white-titles animated fadeIn faster
background-image: url(https://res.cloudinary.com/mariposta/image/upload/w_1800,c_limit,q_65/IMG_5232_srqhvl.jpg)

# Introducing Bridgetown
--

## (Ruby + Jamstack = 😍)

---
class: animated fadeInRight faster bigger-list

# Here’s What We’ll Talk About

1. A Brief Introduction
2. Why Bridgetown?
3. A Fun Surprise
4. Features & Roadmap
5. DEMO 
6. Q & A

.right.gray[Presented on]
.right.gray[Tuesday, May 5, 2020]

---
class: center animated fadeIn

# Allow Me To Introduce Myself
--

.avatar[![Jared White](https://jaredwhite.com/assets/jared-white-2018-II.jpg)]

I’m Jared White, the Founder and Lead Rubyist at [Whitefusion](https://whitefusion.io),  
a boutique web studio based in Portland, OR.

[.twitter[![Twitter](/assets/twitter.svg)]@jaredcwhite](https://twitter.com/jaredcwhite) .gray[/] [.github[![Github](/assets/github.svg)]@jaredcwhite](https://github.com/jaredcwhite)

I’ve been Rails developer since 2008, and a Jekyll website builder since 2015.

And as a designer/developer in general, since 1997!!! 😱

---
class: animated fadeIn

# Web “Sites” vs. “Applications”

As the 2010s progressed, and I was happily creating nifty apps in Rails for myself and for clients, I was simultaneously frustrated that I was forced to use crummy CMSes to create content-focused sites for clients.

WordPress? _Perish the thought!_

Drupal? _Spare me._

A Rails-based CMS like Refinery? _Meh._ 😕

--

### **Then I discovered Jekyll.**

---
class: center animated fadeIn faster

# ❤️🧡💛💚💙💜

![Unicorn Love](https://media.giphy.com/media/YkuzftfzdoPOE/source.gif)

---
class: animated fadeInRight

# Ticking All the Boxes

.small[![Jekyll](https://jekyllrb.com/img/logo-2x.png)]

* Jekyll is powered by Ruby and Liquid templates.
* Jekyll is purpose-built for one thing and one thing only: generating websites.
* Jekyll sites are simply static snapshots of a Git-based content repository. You can host that output ANYWHERE. It's just compiled HTML/CSS/Javascript.
* The most basic way you author content with Jekyll is…write Markdown in a text file. Add smarts with Liquid tags. Git commit. Boom. Done.
* Want to provide a visual editor for non-techies? No problem! It can just open/save files under the hood and generate live previews, or provide data via an API (aka a “headless” CMS).

---
class: center middle animated fadeIn faster

## This approach has now come to be called the **Jamstack**

### **JAM**.gray[…]stack

### JAM .gray[=] **J**avascript, **A**PIs, **M**arkup

--

And there are a ton of Jamstack tools and frameworks out now, not just Jekyll.

--

Which, coincidentally, brings us to today's topic.

---
class: center middle animated fadeInRight

### Where is Bridgetown?

### Who is Bridgetown?

![Why is Bridgetown](/assets/why-is-bridgetown.jpg)

---
class: animated fadeIn

# In a nutshell…

* Hugo (written in Go) .gray[—] last release was ~11 days ago
* Eleventy (written in Javascript) .gray[—] last release was ~6 days ago
* Gatsby (writen in Javascript) .gray[—] last release was, WOW they do a release almost every single day!?!?
* Jekyll's last release was…

--

### .center[**August 20, 2019** 😱]

---
class: center middle animated fadeInRight

.medium[![Eleventy replaces Jekyll?](/assets/eleventy-replaces-jekyll.png)]

## Um…

## Is this true??

---
class: center middle animated zoomIn

.medium[![ruby-is-slow-dependency-hell](/assets/ruby-is-slow-dependency-hell.png)]

## Ruby is slow and suffers from dependency hell?!?

---
class: center middle animated zoomIn

# 🙁

## So Twitter is a dumpster fire 🔥, and meanwhile the unfortunate reality is that Jekyll mostly went on hiatus in mid-2019 after lead maintainer Parker Moore exited the building.

---
class: center middle animated zoomIn faster

# 🥺

## And this comes at a time when Jekyll and the ecosystem's DX (developer experience) is _desperately_ in need of **modernization**.

---
class: center middle animated zoomIn faster

# 😭

## So I had a lengthy conversation with the current Jekyll core team about all that…

---
class: center middle animated zoomIn faster

# 🧐

## …and, while amicable, it did not go as I had hoped.

---
class: center middle animated zoomIn faster

# 🤔

## So I began to ponder my future as a Jamstack web designer.

---
class: center middle animated zoomIn faster

# 😣

## I did not want to have to abandon Ruby and suffer in the Go or Javascript world forevermore.

---
class: center middle animated zoomIn faster

# 😒

## Middleman? Uh, erm, huh, hmm…<br/><br/>not for me I'm afraid.

---
class: center middle animated zoomIn faster

# 😃💡

## But then I had a .gray[<strike>crazy</strike>] great idea!

---
class: center middle animated fadeInRight

.big[![Holy Mother Forking Shirt Ball](/assets/holy-mother-forking.gif)]

---
class: center middle animated fadeIn

# JUST FORK IT. 🍴

--

### .gray[(I blame @onewheelskyward)]

---
class: animated fadeInRight

# So, a Brief Timeline…

* **April 2:** Cloned Jekyll repo and batch-renamed all identifiers to Bridgetown. Astonishingly, it actually worked !!
* **April 3-5:** Completed in-depth code audit, started cleaning up and rearranging the furniture.
* **April 5-9:** Started work on new website & logo, updating and rewriting documentation, etc.
* **April 9:** First big new "feature" — `bridgetown console`
* **April 13:** Notified Jekyll core team of fork
* **April 18:** A true frontend integration with Webpack! 🎉
* **April 18-Present:** A caffeine/beer-infused haze of releases, announcements, and enhancements galore

---
class: center middle animated zoomIn

# Which brings us to today.

--
class: faster

## Would you like to help me release the NEXT VERSION of Bridgetown (v0.13 “Klickitat”)?

---
class: center middle animated zoomIn

# Let's do it right now!

.big[![Do It](https://media.giphy.com/media/pTQUOfSmjo2hG/giphy.gif)]

---
class: animated fadeInRight

## Bridgetown Features **Already Released**

* ✅ **Streamline internals** to remove deprecated or legacy code paths and reduce confusing configuration options.
* ✅ **Improve default site file/folder structure** to bring Bridgetown in line with other popular static site generators.
* ✅ **Retool the codebase** into a monorepo of multiple gems.
* ✅ Integrate **pagination features** directly into the monorepo. 
* ✅ Add streamlined taxonomy solution (for categories, tags, and other metadata) called **Prototype Pages**.
* ✅ **Add** the Rails-inspired `bridgetown console` command.
* ✅ Remove the aging asset pipeline and **regroup around a modern solution: Yarn + Webpack.** (Plus Browsersync for live reload!)
* ✅ _New in v0.13!_ Supercharge content logic with **Ruby Front Matter**.

---
class: animated fadeInRight

## **Coming Soon** to Bridgetown

* ✳️ A **predictable release schedule** based on SemVer.
* ✳️ External theme(s) support via Gem-based plugins with complete **NPM/Webpack integration**. 🤯
* ✳️ **Hot reloading** of in-repo custom Ruby plugins during development. 🎉
* ✳️ An easy to use, **brand-new DSL** for writing Bridgetown plugins that far outstrips what is possible with Jekyll.
* ✳️ Building upon that DSL, **extensive support** for third-party content/data APIs as well as GraphQL endpoints.
* ✳️ **Liquid Components**: makes component-based design and authoring a reality. Ready for “Liquidbook.rb”? 😁
* ✳️ Massive opportunity for tight integration with Rails on multiple levels…plus a **melt-your-brain Ruby on Rails on Bridgetown on Jamstack** hybrid application architecture! 🤓

---
class: center middle animated zoomIn

# And we’re just getting started…

# 🙌

---
class: center middle animated zoomIn

# DEMO

## .gray[Let’s look at some code!]

---
class: center middle animated fadeIn

![Nod](https://media.giphy.com/media/gVoBC0SuaHStq/giphy.gif)

## _final takeaway:_
## Bridgetown is here and prepared for the **long haul**…

--
## … and Ruby, **you still got it**. 👍

---
class: center middle animated fadeIn faster

# Thank You

# 🙏

--
## Start using Bridgetown, file some issues, become a contributor, and rock this party! 🎉
## **[www.bridgetownrb.com](https://www.bridgetownrb.com)**

---
class: center middle animated fadeInRight faster

# Questions?

.avatar[![Jared White](https://jaredwhite.com/assets/jared-white-2018-II.jpg)]

Jared White  
https://whitefusion.io  

### Watch this again:

https://pdxrb-bridgetown.netlify.app  
_(built with Bridgetown & Remark.js [[source]](https://github.com/jaredcwhite/pdxrb-bridgetown))_
