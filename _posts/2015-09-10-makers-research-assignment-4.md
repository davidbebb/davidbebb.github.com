---
layout: post
title: "Makers research assignment 4"
description: ""
category:
tags: []
---
{% include JB/setup %}

##Makers Research Challenge: Number 4.


In collaboration with <a href="https://github.com/bat020">Anindya Bhattacharyya</a>


#'What is duck typing? Give a code example to demonstrate why this is useful.'
***

If an object walks like a duck and talks like a duck, then the Ruby interpreter is happy to treat it as if it were a duck.

 -http://rubylearning.com/satishtalim/duck_typing.html

For example, the following won't work in Ruby (although it may in some other languages):
{% highlight ruby %}
a = '3' + 5
{% endhighlight %}

This is because the string type does not know how to add a integer to it.

However, both of the following work, using the same method, as they are of the same type.
{% highlight ruby %}
a = '3' + '5'
a = 3 + 5
{% endhighlight %}

This is useful, as it allows us to use the same methods with different type of object.
The downside of this is that it may mean that methods can be passed objects not originally intended by their developer, with unexpected results.

 e.g. fire.light and bulb.light both have the same method, but (presumably) we don't want to set fire to our light bulb.

This makes testing duck-typed code very important - but also very easy, since we can use doubles that imitate an object by duplicating the relevant aspects of its interface.
