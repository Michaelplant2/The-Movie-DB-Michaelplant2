# The Movie DB

In this portfolio project, you'll build a single page app (SPA) with searchable movie listings using [The Movie Database Api (TMDB)](https://www.themoviedb.org/documentation/api).

The desktop mockup has 2 main parts: header and main.

## Objective


Utilize CSS grid and/or flexbox to create a responsive layout. A desktop mockup is provided, however, make sure your layout is responsive for tablet and mobile devices.

**Default:** 
Movie listings display the Poster, Title, Average Voting in CSS boxes (card).

**Hover:**
The default view is hidden and the Overview of each movie is displayed.

Use JavaScript to connect to the [TMDB api](https://www.themoviedb.org/documentation/api) to access available movie data: Title, Image, Overview and Vote Average. Connect to the TMDB search API to make the website searchable.


## Mockups

[Link to Figma](https://www.figma.com/file/x6MNBSRr5L6IslMTS5VGk5/The-Movie-DB?node-id=0%3A1)

## Getting Started

- You will need to [create an account at www.moviedb.org](https://www.themoviedb.org/signup) to generate an API Key for API access.
- READ CAREFULLY the TMDB documentation, starting with the [Overview](https://www.themoviedb.org/documentation/api) and then the [Developer's Documentation](https://developers.themoviedb.org/3/getting-started/introductionapi).

- You're not given any HTML markup inside of the `<body></body>` tags, first start by outlining the main elements. Once you have done that, you can start implementing the styles. You'll be expected to edit `style.css` to implement the styles. 

- The `style.css` and `index.html` files are linked, which you can see in the `<head></head>` tag.
- The `script.js` contains a simple example of starter code and is linked in the `<head></head>` tag since we are using `defer`.

**Example Endpoint**
Below is an example endpoint showing json data. DO NOT USE this example api url, please follow the instructions above to create your own account and register your own api key.

    APIURL = https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1


## Design Notes

### Font

- Font-family used in this project is "`Poppins`" and already imported in `style.css` using `@import`.


### Color Palette
Primary Color

 - #051923

Secondary Color

 - #003554

Text Colors
- #FFA500


## Submissions

**Timeline:** You have 3 weeks to complete this project.
**Due:** 10/02/2022

Create an empty repository on Github. Clone it to your local environment.
Copy your code from the Movie DB project into your local repository. Push it to Github. 

Push your code to Github.

Share your repository with your instructor once it is completed.
