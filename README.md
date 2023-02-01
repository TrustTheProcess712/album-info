## Welcome to my pratice project 'Favourite Albums'!

This is a simple application to practice some Javascript and building an application with React. I started with static data in a db.json file and ended up using the Json Server package to replicate fetching data.

You can view a full list of albums on the Home Page, search for albums by Artist, Album name, year and Genre. Click a link to tfull album details and link to further info about the artist from there. If you want to share a favourite album you can link directly to 'Create Album' in the av bar and post one from there!

I need to add more features such as login/user capabilities and clean up the loading and errors for each component. Feel free to take a look around and have fun!

## To run the APP locally

Clone the repo and cd to my-albums. Open your terminal type pwd and make sure you are in the root directory (my-albums). Run the command npm install to install the relevent dependencies. Then run the script npm start Which runs the app in development mode. Open http://localhost:3000 to view it in your browser. To connect to the server you can install the Json Server package globally and go from there or run it locally with the following command: npx json-server --watch data/db.json --port (select which port you with to run)!
