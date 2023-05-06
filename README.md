# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instruction

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Start

You may need to change url value to whatever api you are using and article accordingly 
if you using news api for test you just need to put api in .env file

### Category
 To add or edit category in news app 
you need to go to NavBar.js file
Add new category for example: <Nav.Link as={NavLink} to="/new category">     new category         </Nav.Link>
 then go to App.js file
   put Route in <Routes> tag for example:  <Route exact path='/IN' element={<News key='india'  country='in' direction={this.state.direction}/>}></Route> 
above instruction may need to change according to api you are using but basic process is similar


#Preview 
![image](https://user-images.githubusercontent.com/132484115/236621775-105e00d8-c237-44c0-9a7f-da8939ccd5fb.png)
![image](https://user-images.githubusercontent.com/132484115/236621796-41adf09f-9f5f-4783-babc-1581d768cbef.png)
