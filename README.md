# Node Express Handlebars

### Overview

In this assignment, you'll create a Burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

- - -

### Run App In-Browser with Heroku



- - -

### App Preview




- - -

### Before You Begin

* Eat-Da-Burger! is a restaurant app that lets users input the names of ~burgers~ cakes they'd like to eat.

* Whenever a user submits a burger name, your app will display the burger on the left side of the page waiting to be devoured.

* Each burger in the waiting area also has an burgers to eat and burgers eaten button. When the user clicks it, the burger cake will move to the right side of the page.

* Your app will store every burger in a database, whether devoured or not.


.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars

- - -


If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.


**Good Luck!**

## Copyright

Coding Boot Camp (C) 2019. All Rights Reserved.
