---
layout: post
title: "Makers research assignment 6"
description: ""
category:
tags: []
---
{% include JB/setup %}

##Makers Research Challenge: Number 6.

#'What is a ruby gem? Give a code example showing how to use a ruby gem in a piece of code. What are some dangers to using a gem?'
***

###Ruby Gems
Ruby Gems are self-contained ruby packages or libraries. Gem is designed to be an easy to use package manager for their distribution, and version control.

A gem can be called directly in ruby as follows:
{% highlight ruby %}
require 'rubygems'
require 'name-of-gem'
{% endhighlight %}

Alternatively they can be listed in a Gemfile (http://bundler.io/v1.5/gemfile.html), which in conjunction with a lock file can also be used to control version in use - see http://bundler.io/ for more detail. This reduces the problems related to managing dependencies, especially those that are version dependent, in ruby.
