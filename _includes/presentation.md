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

Meanwhile, GitHub went through a **massive** overhaul of its Rails codebase (at the leading of the very talented Eileen M. Uchitelle) to shift from using a crazy fork of Rails 3.2 to using modern, "stock" Rails. This is what allowed GitHub to go even farther and [start running off of master](https://github.blog/2019-09-09-running-github-on-rails-6-0/) and contributing heavily to Rails for version 6 (and they show no signs of stopping!)

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

# The Real Best New Features of Rails 6

* Support for multiple databases to help with scaling
* Action Mailbox
* Action Text
* Parallel Test Runner
* Action Cable Testing + ES6 rewrite with NPM package
* Webpacker by default, Sprockets for images (and optionally CSS)
* Zeitwerk (a brand new autoloader)
* Tons of little enhancements and goodies

---
class: animated fadeIn faster

# The Real Best New Features of Rails 6

## …and coming soon…

* ActionView::Component (!!!)

--

<br/>
.center[![Star Trek nod](https://media3.giphy.com/media/tsgNNs93oIbwk/giphy.gif?cid=19f5b51a659d78d993dbad1c73c8ac2b04bc609bbfab62eb&rid=giphy.gif)]

---
class: animated fadeInRight faster

# Multiple Databases

Typical `config/database.yml` looks like this:

```yaml
production:
  database: my_primary_database
  user: root
  adapter: mysql
```

---
class: animated fadeIn faster

# Multiple Databases

But now, `config/database.yml` can get really complicated!

```yaml
production:
  primary:
    database: my_primary_database
    user: root
    adapter: mysql
  primary_replica:
    database: my_primary_database
    user: root_readonly
    adapter: mysql
    replica: true
  animals:
    database: my_animals_database
    user: animals_root
    adapter: mysql
    migrations_paths: db/animals_migrate
  animals_replica:
    database: my_animals_database
    user: animals_readonly
    adapter: mysql
    replica: true
```

---
class: animated fadeIn faster

# Multiple Databases

Yes, you can store different models in different databases. Set up a new base class:

```ruby
class AnimalsBase < ApplicationRecord
  self.abstract_class = true
 
  connects_to database: { writing: :animals,
    reading: :animals_replica }
end
```

```ruby
class Dog < AnimalsBase
# model stuff here
end
```

Migrations and rake tasks are all updated to support multiple databases:

```
$ rails g migration CreateDogs name:string --database animals
```

---
class: animated fadeIn faster

# Lots of New ActiveRecord Hotness

Stick around for the lightning talk later this evening!

---
class: center middle animated zoomIn faster

# Action Mailbox

Process _incoming_ mail with ease!

---
class: animated fadeIn faster

# Action Mailbox

```ruby
# app/mailboxes/application_mailbox.rb
class ApplicationMailbox < ActionMailbox::Base
  routing /^save@/i     => :forwards
  routing /@replies\./i => :replies
end
```

```
$ bin/rails generate mailbox forwards
```

```ruby
# app/mailboxes/forwards_mailbox.rb
class ForwardsMailbox < ApplicationMailbox
  before_processing :require_forward
 
  def process
    Forward.create(from: mail.from, subject: mail.subject,
      content: mail.content)
  end

  private
  def require_forward; bounce_etc; end
end
```

---
class: center middle animated zoomIn faster

# Action Text

Rich text editing workflow using Trix (extracted from Basecamp 3)

---

class: center middle animated fadeIn faster

.big[![Trix Editor](/assets/trix-editor.jpg)]

---
class: animated fadeIn faster

# Action Text

One-time setup (yarn package, db migration, etc.):

```
$ rails action_text:install
```

```ruby
# app/models/message.rb
class Message < ApplicationRecord
  has_rich_text :content
end
```

```html
<% # app/views/messages/_form.html.erb %>
<%= form_with(model: message) do |f| %>
  <div class="field">
    <%= f.label :content %>
    <%= f.rich_text_area :content %>
  </div>
<% end %>
```

---
class: animated fadeIn faster

# Action Text

And then you just display the rich text somewhere in a view!

```html
<h3>Message</h3>

<%= @message.content %>
```
<br/>

**From the docs:** By default, the Action Text editor and content is styled by the Trix defaults. If you want to change these defaults, you'll want to remove the `app/assets/stylesheets/actiontext.scss` linker and base your stylings on the contents of that file.

You can also style the HTML used for embedded images and other attachments (known as blobs). On installation, Action Text will copy over a partial to `app/views/active_storage/blobs/_blob.html.erb`, which you can specialize.

---
class: center middle animated zoomIn faster

# Parallel Testing

Speed up your test suite with the power of multiple CPU cores!

---
class: animated fadeIn faster

# Parallel Testing

All you need to do is add this to your `test_helper.rb`:

```ruby
parallelize(workers: 2)
```

You can also alter the commands you run to kick off your test suite (such as in a CI environment):

```
$ PARALLEL_WORKERS=15 rails test OR PARALLEL_WORKERS=15 rspec spec
```
<br/>

**Hot tip:** each test worker gets its own database copy (`test-database-1`, `test-database-2`, etc.)

---
class: animated fadeIn faster

# Parallel Testing

The parallelization can happen via either forks or threads. If using forks (the default, unless you're on JRuby), you can use these callbacks:

```ruby
class ActiveSupport::TestCase
  parallelize_setup do |worker|
    # setup databases
  end
 
  parallelize_teardown do |worker|
    # cleanup databases
  end

  # …
end
```

---
class: center middle animated zoomIn faster

# ActionCable

Goodbye CoffeeScript, Hello ES6!

😁

(Also new testing features! 👋 `test/channels`)

---
class: center middle animated zoomIn faster

# Webpacker is now the default build tool for Javascript

If you're still on Sprockets and have been putting off learning Webpack/Webpacker, now is the time to do so.

---
class: animated fadeIn faster

# Webpacker

OK, here's a dumb thing. Where is the Webpacker setup guide on `guides.rubyonrails.org` ???

--

Seriously, where is it?

--

Bueller?

--

Bueller?

---
class: animated fadeIn faster

# Webpacker

Until they add an official guide, check out the docs at the GitHub repo:

https://github.com/rails/webpacker

## Adding a modern front-end is easy!

```
$ rails new myapp --webpack=react

$ rails new myapp --webpack=stimulus
```

Running `rails assets:precompile` automatically runs `yarn install` and compiles your Webpack code as well.

---
class: animated fadeIn faster

# Webpacker

I actually don't use Sprockets for CSS/SCSS anymore. It's very simple just to rely on Webpack:

```js
// app/javascript/packs/application.js
import "../../styles/application.scss"
```

```scss
// app/styles/application.scss
@import "~bulma/bulma.sass";
@import "helpers.scss";
// etc.
```

```html
<!-- app/views/layout/application.html.erb -->
<%= stylesheet_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```


---
class: center middle animated zoomIn faster

# Zeitwerk

![Kraftwerk](https://media.giphy.com/media/OxxcW11fbGQ80/source.gif)

(not the latest album from Kraftwerk)

---
class: animated fadeIn faster

# Zeitwerk

Zeitwerk is a new autoloader for Rails. It is enabled by default in Rails 6 applications running on CRuby.

The main difference between Zeitwerk and the "classic" Rails autoloader is Zeitwerk starts with your folder/file structure and infers the class names from that, rather than the other way around.

So Zeitwerk encounters

```
./app/controllers/admin/payments_controller.rb
```

and expects to find `Admin::PaymentsController`.

```
./app/helpers/users_helper.rb
```

should define `UsersHelper`. And so on.


---
class: center middle animated zoomIn faster

# And finally, coming soon to a developer console near you…

---
class: center middle animated zoomIn faster

# ActionView::Component

<br/>

![Fireworks](https://media.giphy.com/media/DgLwPZVu5tT32/source.gif)

---
class: animated fadeIn faster

# ActionView::Component

First, write your component as a Ruby object.

`app/components/test_component.rb`:

```ruby
class TestComponent < ActionView::Component::Base
  validates :content, :title, presence: true

  def initialize(title:)
    @title = title
  end

  private

  attr_reader :title
end
```

---
class: animated fadeIn faster

# ActionView::Component

Second, write your view partial.

`app/components/test_component.html.erb`:

```html
<span title="<%= title %>"><%= content %></span>
```

--

Now, render it in your parent view!

```html
<%= render(TestComponent, title: "my title") do %>
  Hello, World!
<% end %>
```

---
class: animated fadeIn faster

# ActionView::Component

Validation is pretty cool! If the component is rendered with a blank title:

```html
<%= render(TestComponent, title: "") do %>
  Hello, World!
<% end %>
```

An error will be raised:

```
ActiveModel::ValidationError: Validation failed: Title can't be blank
```
---
class: animated fadeIn faster

# ActionView::Component

Can't wait for Rails 6.1?

You can actually try it out now:

https://github.com/github/actionview-component

---
class: center middle animated zoomIn faster

# Let’s Recap!

<br/>

![Mr. Bean](https://media.giphy.com/media/4KLv24CPUoZ0I/source.gif)

---
class: animated fadeInRight faster

# What We’ve Learned

1. Rails isn't dead…yet! 😜
1. Shopify and GitHub are contributing mightily to the future of Rails!
1. If massive "web-scale" companies can run off of Rails master, you can too!
1. Rails 6 comes with nifty new frameworks!
  * Action Mailbox
  * Action Text
1. And other stuff!
  * Scale Rails with Multiple Databases
  * Parallel Test Runner, Action Cable Testing
  * Webpacker by default
  * Zeitwerk
  * Tons of little enhancements and goodies

---
class: animated fadeIn faster

# What We’ve Learned

…and stay tuned for Rails 6.1 with ActionView::Component!

<br/>

.center[![Fireworks](https://media.giphy.com/media/DgLwPZVu5tT32/source.gif)]

---
class: center middle animated zoomIn

# Thank You

# 🙏

---
class: center middle animated zoomIn

# Questions?

.avatar[![Jared White](https://jaredwhite.com/assets/jared-white-2018-II.jpg)]

Jared White  
https://whitefusion.io  
_(hire me!)_

### Watch this again:

https://rails6.whitefusion.design  
_(built with Jekyll & Remark.js)_
