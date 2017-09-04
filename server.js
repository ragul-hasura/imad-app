var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
    
 'article-One': {
    title: 'article-one ragul sakthivel',
    heading:'article-one',
    date: 'sep 4, 2017',
    content: `  <p>
             this is the content of my first html article this is the content of my first html article this is the content of my first html article this is the content of my first html
        </p>
        <p>
             this is the content of my first html article this is the content of my first html article this is the content of my first html article  this is the content of my first html
        </p>
        <p>
             this is the content of my first html article this is the content of my first html article this is the content of my first html article this is the content of my first html
        </p>  `
},

'article-Two': { title: 'article-two ragul sakthivel',
    heading:'article-two',
    date: 'sep 5, 2017',
    content: `  <p>
             this is the content of my seond html article rst html
        </p> 
    `},
    
'article-Three': { title: 'article-three ragul sakthivel',
    heading:'article-one',
    date: 'sep 6, 2017',
    content: `  <p>
             this is the content of my third html 
        </p> 
    `}
};

function createTemplate (data) {
 var title= data.title;
 var date= data.date;
 var heading= data.heading;
 var content= data.content;
 
var  htmlTemplate = `<html>
    <head>
        <title>
            ${title}
        </title> 
        <meta name="viewport" content="width=device-width, limited-scale-1">
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
     <div class="container">
        <div>
            <a href="http://rahulsakthivel1998.imad.hasura-app.io">home</a>
        </div>
        <hr/> 
        <h1>
            ${heading}
        </h1>
        <div>
            ${date}
        </div>
        <div>
       ${content}
        </div>
   </div>
 </body>   
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function (req,res) {
    //articleName== article-one
    //article(articleName)=={} content object for article one
    var articleName= req.params.articleName;
    res.send(createTemplate(articles[articleName]));
 });

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
