<div align="center">
  <h3>Baha-Go</h3>
  <p>A full-stack restaurant app that allow locals to make reviews on their experience!</p>
  <br/>
  <a href="https://github.com/JayRKyd/Baha-Go">Explore the docs</a>
  <br/>
  <br/>
  <a href="https://baha-go.cyclic.app/">BAHA-GO</a>
</div>



## About the project
<div align="center">
  </div>
  <br/>
  Have you ever had trouble finding good restaurants around you? Well BAHA-GO solves your issues. Join a trustworthy community that post restaurant reviews about their experience. No more second guessing where to eat. Know what places to avoid and what places are a must try!
  
  ### Built with
  - Express.js
  - Node
  - EJS
  - Mongoose
  - Passport
  - JavaScript
  - CSS
  - Cloudinary

<br/>
<br/>
<br/>
<br/>
##Getting Started

### Installation
_In order to clone a local copy of this repository, please follow the steps below._

1. Navigate to the folder you would like to store the project
2. Clone the repo
   ```sh
   git clone https://github.com/JayRKyd/Baha-Go.git
   ```
3. Switch into the directory that was just created
    ```sh
    cd baha-go
    ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Navigate to the config folder
6. Create a .env file there called `.env`
7. Enter your MongoURI string in `.env` with the key `DB_STRING`
   ```sh
   DB_STRING="<Replace everything in quotes with MongoDB Connection String>"
   ```
8. Create a session secret for express sessions called `SESSION_SECRET`
    ```sh
    SESSION_SECRET="<any string value>"
    ```
9. Connect to your cloudinary db with the following 3 environment variables `CLOUD_NAME`, `API_KEY`, `API_SECRET`
    ```sh
    CLOUD_NAME="<cloud name here>"
    API_KEY="<api key here>"
    API_SECRET="<api secret here>"
    ```
10. To run the application, use `npm start` to run the app in a development environment


<br/>
<br/>
<br/>

## Roadmap (still to be added in v2)

- [ ] Implement a Dollar Rating System
- [ ] Modernize feed page
- [ ] Revamp comment section
- [ ] Add Pagination for user posts
- [ ] Fix the My Restaurant & Favorite Restaurants page

## Lessons Learned

coming soon...


## Contact

Twitter [@jayrcodes](https://twitter.com/jarycodes)

Project Link: [https://github.com/JayRKyd/baha-go](https://github.com/jayrkyd/baha-go)
    

  
