---
layout: post
title: "Red green refactor"
description: ""
category: computer
tags: []
---
{% include JB/setup %}


##Makers Research Challenge: Number 1.


In collaboration with <a href="http://www.chweeks.github.io">Chris Weeks</a>


#'What is a Red-Green-Refactor, and how does it relate to test driven development'
***


The process of Red-Green-Refactor can be summarised as follows - this whole cycle should take around 10 minutes - if it takes longer, you're probably working in too large a step:

1) Identify the feature you want. Be specific.

2) Write the test for this specific feature.

  - Be clear about what you want.

3) Watch it fail (Red).

  - This is expected (and good) - you shouldn't have implemented it yet.

4) Write simplest code to pass test.

  - This might not be your full feature, just pass the test.

5) Watch test pass (Green)

6) Clean up code & tests (Refactor).

7) Repeat

This is the core process in test driven development. It helps to ensure that you always have a working code base, and reduces the temptation to include 'sort-of-working' or untested code.
