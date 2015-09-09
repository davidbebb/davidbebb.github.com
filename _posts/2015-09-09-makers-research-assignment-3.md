---
layout: post
title: "Makers research assignment 3"
description: ""
category:
tags: []
---
{% include JB/setup %}

##Makers Research Challenge: Number 3.


In collaboration with <a href="https://github.com/alexlemons1">Alex Lemons</a>


#'Describe the difference between composition and inheritance. What are some of the dangers of inheritance? Why would we prefer composition over inheritance? Give code examples of using inheritance to build ships.'
***

Inheritance: - Inheritance causes a class to to inherit features from a parent class.

Composition: - Composition is the selective use of functionality from another class.

The main danger of inheritance is that is is difficult to control - you probably don't need your new class to inherit *all* of the functionality from another class.
Composition allows you to call functions from another class selectively, so you have a greater degree of control and transparency in what your new class can do.

### Ship building using in inheritance:

{% highlight ruby %}

Module Ship

  def position
  end

  def heading
  end

end

Class Battleship < Ship

  @length=100
  @armament=[something]

end

Class CruiseLiner < Ship

  @lengh=75
  @number_of_passengers=900
  @swimming_pool=true

end

Class PeddleBoat < Ship

  @length=1
  @number_of_passengers=2
  @swimming_pool=false

end



{% endhighlight %}
