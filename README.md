# Assignment Discovery

This application will allow a user to 
1. Search YouTube for videos by keyword
2. View information about the 25 most popular results as a list
3. Select a video from that list to load and    watch it in a player at the top of the page
4. Sort the videos by Title (ascending or descending) and Data Uploaded (ascending or descending)

### View without installation
This app can also be viewed at https://flyingace.github.io/discovery/.

### Installation instructions
1. Clone the repo found at https://github.com/flyingace/discovery using 
```
git clone git@github.com:flyingace/discovery.git
```
2. From the command line cd into the project's directory and type (code will run following entry of each command before you can enter the next one)
```
npm run setup
 
npm install
 
npm run start
```
3. This should launch the project in your browser at http://localhost:3000

### Project Notes
#### Packages Used
In addition to more commonly used React-related packages such as Redux and Lodash, this project was created using 
1. _create-react-app,_ For boilerplate files and directory structure 
2. _react-bootstrap_ For simple styled components (e.g., form elements, stylized list items)
3. _react-youtube_ To simplify the process of using the YouTube player as a component

#### Differences from original assignment
This implementation diverges slightly from the project's stated requirements. Some of the requirements were unclear to me, and given the timeline I made some assumptions and additions in order to try to meet the overall requirements of the assignment.

1. The app is contained on a single page. Rather than load a second page when a video was selected the video is loaded into the player at the top of the page.
2. The project calls for '10 additional videos from various categories', but I was unclear as to how to the source of these categories. Rather than choose categories of my own I have added a **search field** which interact's with YouTube's api and retrieves data about the first 25 relevant videos, sorted by popularity.
3. This list of videos isn't lazy-loaded, all 25 are loaded at once. YouTube's API provides the ability to page through further videos though I haven't implemented paging here. (It may be worth noting that user studies have returned mixed results about experience with lazy loading, many users finding it frustrating to never be able to reach the 'end' of the page.)
4. Since I didn't see a clear path to having the videos divided into categories, as above, I could not sort them by category once they'd been loaded. Instead I have added the option to **sort** the videos using a **pull-down menu with sorting options based on title and date uploaded to YouTube.** This sorts the video data that has been already loaded and doesn't make new calls to YouTube's API.
