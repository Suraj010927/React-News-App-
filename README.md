

### Start

You may need to change url,page value to whatever api you are using and article accordingly 
if you using news api for test you just need to put api in .env file

### Category
 To add or edit category in news app 
you need to go to NavBar.js file
Add new category for example: <Nav.Link as={NavLink} to="/new category">     new category         </Nav.Link>
 then go to App.js file
   put Route in <Routes> tag for example:  <Route exact path='/IN' element={<News key='india'  country='in' direction={this.state.direction}/>}></Route> 
above instruction may need to change according to api you are using but basic process is similar


### Preview 
![image](https://user-images.githubusercontent.com/132484115/236621775-105e00d8-c237-44c0-9a7f-da8939ccd5fb.png)
![image](https://user-images.githubusercontent.com/132484115/236621796-41adf09f-9f5f-4783-babc-1581d768cbef.png)


### WARNING
The News API is a service provided by a third-party provider, and it is hosted on their servers. As a user, you can only make requests to the News API endpoints to retrieve news data, but you do not have the ability to host the API on your own server.

To access the News API, you need to sign up for an account with the provider, obtain an API key, and make requests to their designated endpoints using the API key. The provider handles all the infrastructure and server-side operations necessary to provide the news data to you.

Therefore, you cannot host the News API on your server, but you can integrate it into your own applications or services by making HTTP requests to the News API endpoints from your server-side code.
