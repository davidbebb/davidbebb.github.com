---
layout: post
title: "Makers research assignment 2"
description: ""
category:
tags: []
---
{% include JB/setup %}


##Makers Research Challenge: Number 2.


In collaboration with <a href="http://github.com/gavinwcheng">Gavin Cheng</a>


#'Describe the SOLID principle of dependency inversion, by giving an example of dependency injection with a module and a class. how does DI improve the reusability of code?'
***

Borrowing heavily from <a href='https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)'>wikipedia</a>, the SOLID principles are:



`S` | Single responsibility principle: each class should only have one responsibility.
`O` | Open/closed principle: Software entities should be extendible, but not modifiable.
`L` | Liskov substitution principle: you should be able to replace instances with sub-types of the same instance without having to change the program.
`I` | Interface segregation principle: Have multiple specific interfaces, not one that is trying to do everything
`D` | Dependency inversion principle: High level functionality should not depend on specific low level functionality. It should instead use an abstraction.  

## 'So, what IS dependency inversion'

A traditional approach to software design relies upon designing your high level functionality, and then adding code that it depends upon to deliver this. This can lead to code that has very rigid dependencies - i.e. if you change a low-level piece of functionality (your dependency), you are likely to need to change you high-level functionality.

Dependency inversion attempts (and often succeeds) to avoid this by writing (or as often borrowing) low-level functionality and writing your high level code to use it's output. This relies upon having a series of abstractions between functionalities.

Dependency injection is an elegant way of feeding in dependencies. This is most easily understood with an example.

{% highlight ruby %}
# Without dependency injection
class ArrayMuncher

  def initialize
    @array = Array.new
  end

 #Do stuff

end

# and now with dependency injection
class ArrayMuncher

  def initialize(array)
    @array = array
  end

  # Do stuff
end

{% endhighlight %}

The first example forces us to use the output of Array.new - this is fine if we always want an empty array, but not if we want to use different ones.

The second example solves this - it allows us to feed in any array we like. This means that rather than having to write a specific ArrayMuncher for each array, we can reuse this method for any compatible array.
