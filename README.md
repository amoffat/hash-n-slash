Hash-n-Slash
============

![demo gif](http://i.imgur.com/Wf5pmir.gif)

What
----
A [Google Chrome](http://google.com/chrome) proof-of-concept that allows any text to be used as a domain name.

Install
-------
Available in the Chrome Web Store [here](https://chrome.google.com/webstore/detail/empty-title/deeodhnicjhejapbkohokpgglnnmgbkc), or as the `.crx` file [here](https://github.com/amoffat/hash-n-slash/blob/master/hashnslash.crx)

How
---
Hash-n-Slash does 3 things:
  * Any url, typed in the url bar, that starts with `# ` will be intercepted and SHA-1 hashed to a `.com` address.
  * Any link on a web page whose href starts with `#://` will be SHA-1 hashed to a `.com` address.
  * If a link's href contains just `#://`, the link's textContent will be SHA-1 hashed to a `.com` address.

![demo transformation](http://i.imgur.com/NXu34x1.png)  

Why
---
Good domain names are pretty scarce.  It's a source of frustration for anyone who has ever tried to find a good domain name.  I thought it might be fun if there was a hashing scheme that allowed more flexibility in mapping resources to locations on the web.  Under a domain hashing scheme, the following might be possible:
* More expressive domain names.  Quotes or phrases could point somewhere.  eg "For sale: baby shoes, never worn" => `3f7bc217f621dfd7ce371ca2450c99787a11ce5b.com`
* Bind searches to domain names, eg "food in chicago" => `f02970848a63988965aa40cd368ffcf9046209ca.com`
* Documents could have unique resources on the web?  A document's `sha1sum` could be a valid domain name to find the document itself.  eg `sha1sum ForestFire.pdf` => `5fd035907cf17542631feb891babe3235e56c198.com`

Why this is a bad idea that will never work™
--------------------------------------------
This is just for fun!  A proof of concept.
