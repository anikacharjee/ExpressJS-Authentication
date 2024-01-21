# ExpressJS-Authentication
Using Authentication and Authorization in ExpressJS

# Install Required Libraries:
`npm install express express-session body-parser`

# Test the Authentication and Authorization:
1. Login:
    - Use a tool like Postman to send a POST request to `http://localhost:3000/login` with the following JSON body:
    `{
    "username": "user",
    "password": "password"
    }`
    - You should receive a "Login successful!" response.

2. Access Protected Route:
    - Send a GET request to `http://localhost:3000/dashboard`. You should receive a *"Welcome to the Dashboard, user!"* response.
  
3. Logout:
   - Send a GET request to `http://localhost:3000/logout`. You should receive a *"Logout successful!"* response.
      
4. Attempt to Access Protected Route after Logout:
   -  Send another GET request to `http://localhost:3000/dashboard`. You should receive a *"Unauthorized"* response.


