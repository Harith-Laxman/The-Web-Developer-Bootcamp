# Section 34 :- Creating Dynamic HTML With Templating

### Templating

    Templating allows us to define a preset "pattern" for a webpage, that we can dynamically modify.

    For example, we could define a single "Search" template that displays all the results for a given search term. We don't know what the search term is or how many results there are ahead of time. The webpage is created on the fly.

### Using EJS with Express

    - To use EJS with Express First install EJS into your express app.
    - You don't need to require EJS in your express app as it automatically requeires it in the background
    - You need to set the *view engine* in the Express app to EJS. using the code

```
   const express = require('express');
   const app = express();
   app.set('view engine', 'ejs');
```

    - Then for a specific html route, say the home route (/), you can return a html file as the response through res.renfer()

```
app.get('/',(req,res)=>{
    res.render('home.ejs')
});
```

    ** Important to note ** the EJS expects a folder "views" to be present in your project and will search this folder for the html file to be rendered.
