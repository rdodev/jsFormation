jsFormation  [![Build Status](https://travis-ci.org/rdodev/jsFormation.png?branch=master)](https://travis-ci.org/rdodev/jsFormation)
===========

An AWS CloudFormation Template Generator

State of Development
===========
Very, very, very, very early in the development stages. Nothing is guaranteed to work properly -- although I strive to have the products already public in good working condition.

Now with much better testing and coverage!

Roadmap (as of 2015-02-17)
===========
 
 - [ ] Update to _not_ use Yeoman and related generators
 - [ ] Upgrade to Angular 1.3
 - [ ] Upgrade to Bootstrap 3
 - [ ] Get user-data working and iron out other AWS bugs.
 - [x] Support for OpenStack Heat templates (this has been spun off to its own project: https://heat.foundry.rocks)

What AWS products does this application cover?
===========

* EC2 Instances (limited, no UserData yet)
* S3 Buckets
* Dynamo DB
* SQS

How to help?
============
1. Using the web app and reporting any issues or suggesting features.
2. Unfortunately, due to the way Yeoman/Grunt/Bower work together and their rapid pace of change, it's a bit too cumbersome to collaborate, at the moment; once I find a good way to do so with less friction, I'll post instructions.

Where can I see it in action?
===========
Glad you asked. The latest version is hosted at http://rdodev.github.io

License
===========
The MIT License (MIT)

Copyright (C) 2013 Ruben Orduz.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
