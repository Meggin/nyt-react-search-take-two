# nyt-react-search-take-two

This is a Mongo Express React Node application that lets users search for NYTimes articles and save them to a database.

The app is live so you can check it out here: [http://tranquil-lowlands-57722.herokuapp.com/](http://tranquil-lowlands-57722.herokuapp.com/)

It is important to note that this is my second attempt to try and build this app! My first attempt is in this repo: [https://github.com/Meggin/nyt-react-search](https://github.com/Meggin/nyt-react-search)

There's definitely a learning curve to working with REACT. In my first go at building this app, I managed to get the search working, but then when I tried to save articles, I realized fairly quickly that I didn't genuinely understand REACT state or immutability. Also, part of the problem is that many of the examples I found to help me learn were a mix of ES6 and ES5.

Confusing!

So I decided to start afresh, give my chance to breath and learn REACT a bit better, as well as ES6, and then I finally built this app in a much better way.

For sure, I got stuck especially understanding how to handle the interaction between the database, the routes, and the components. It was tricky, especially, to know how to get the data you need from a user input, pass it to a helper, and then pass it to the server, and then the really tricky bit-- make sure that state is as it should be in the entire app.

Updating the props based on a comparison between a previous and latest state is something I finally understand, but it took awhile!

The last thing I learned in building this app was how to handle routes. I did a bit of research on routes, and there's lots more I can do with them, but I decided to go with a very simple top level route to main. I didn't try and add routes to the various other components. It just seemed like enough for this first round of React. Also, it's a simple single-page app, and I geniunely felt like it would be weird to hide components. It's nice to see the search, the results, and the saved in one page. 

The next REACT app that I build might make more use of routes, but for now, as least I have a basic understanding of what they do and how to implement them.

One final thought-- the docs out there are great, in some respects, and seriously misleading in others. One of the biggest challenges is knowing if the thing you are reading is out-of-date. For example, in order to get routes to work, I needed to use react-router-dom, not react-router, due to changes in the actual node module. And I needed to update syntax to match react-router-dom, that didn't compare to a lot of the syntax that I reviewed out there.

Another one that got me was the change from ES5 to ES6. I spent at least a few hours bashing my head against the wall, trying to get one of my result items to save. And I kid you not, I had mislocated the fat arrow in my map. Thanks, Michael, my teacher, for finding that one syntactical error that broke everything.

Onward.
