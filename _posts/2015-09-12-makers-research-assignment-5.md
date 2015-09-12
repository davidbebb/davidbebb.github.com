---
layout: post
title: "Makers research assignment 5"
description: ""
category:
tags: []
---
{% include JB/setup %}

##Makers Research Challenge: Number 5.

#'What are blocks, procs and lambdas? Provide code examples to show the differences between each of them. What makes procs and lambdas different to methods?'
***

###Block
A `block` in ruby is a block of code.
The struture of a block in ruby is
{% highlight ruby %}
block_name{
   statement1
   statement2
   ..........
}
{% endhighlight %}
or
{% highlight ruby %}
block_name do
   statement1
   statement2
   ..........
end
{% endhighlight %}
Blocks can be called from a method of the same name using `yield`
{% highlight ruby %}
def test
   yield 5
end

test {|i| puts "The yield has passed #{i} to the block."}

$ test
=> 'The yield has passed 5 to the block.'
{% endhighlight %}

### Proc
A `Proc` (or procedure) is a saved block (i.e. a `block` that can be called from multiple places)

An example of a proc is
{% highlight ruby %}
name = Proc.new do |i|
  puts "The proc has been passed #{i} as a parameter."
end

$ name.call(3)
 => The proc has been passed 3 as a parameter.
{% endhighlight %}

This can be called by calling `name` where you want the proc to be run, rather than including an explicit block.

### Lambdas
A lambda is similar to a Proc, but has two noticeable differences:

1. A `lambda` checks the number of arguments and returns an error if it is not what is expected, where as a `Proc` will fill any undefined arguments with `nil`.
2. A Proc exits immediately upon reaching `return`, where as a `lambda` will complete any remaining commands after a `return` before returning the specified value.


{% highlight ruby %}
def proc_return
  Proc.new { return "Proc.new"}.call
  return "proc_return method finished"
end

def lambda_return
  lambda { return "lambda" }.call
  return "lambda_return method finished"
end

puts proc_return
puts lambda_return

# => Proc.new
# => lambda_return method finished
(with apologies to http://www.reactive.io/tips/2008/12/21/understanding-ruby-blocks-procs-and-lambdas/)
{% endhighlight %}

### Difference between Procs, lambdas and Methods.

In short, Procs and lambdas are Objects, whereas a method is not.
 -http://awaxman11.github.io/blog/2013/08/05/what-is-the-difference-between-a-block/
