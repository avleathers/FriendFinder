# FriendFinder
Friend Finder Homework - New Best Friend Dog Breed Matchup
Express unit homework
# Friend Finder - Node and Express Servers

### Overview

In this activity, I built a compatibility-based "Best Friend Finder" application -- basically a dog breed match app. This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the dog breed with the best overall match. 

Express was used to handle routing and the app was deployed to Heroku so other users can fill it out.

The following folder structure was created:

  Friend-Finder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - assets
            - css
                - style.css
                - reset.css
                - backgroung image
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```

Details about Homework

1. The survey contains 10 questions. Each question has 5 answers that are specific to the question being asked to determine the best dog breed match.

2. The `server.js` file requires require the basic npm packages we've used in class: `express` and `path` (though path is included in the package.json).

3. The `htmlRoutes.js` file includes two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. 

4. The `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

5. Application's data is saved inside of `app/data/friends.js` as an array of objects. Each of these objects follow the format below.

{
  "name":"Wire Fox Terrier",
  "photo":"ttps://cdn1-www.dogtime.com/assets/uploads/gallery/fox-terrier-dog-breed-pictures/6-sidebeach.jpg",
  "scores":[
      3,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      3,
      4,
    ]
}
```

6. The user's most compatible dog breed will be determined using the following as a guide:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * The absolute value of the differences is used. Put another way: no negative solutions! The app calculates both `5-3` and `3-5` as `2`, and so on. 
   * The closest match is the dog breed with the least amount of difference.

7. Once you've found the current user's most compatible new best friend, the result is      displayed as a modal pop-up.
   * The modal should display both the name and picture of the closest dog breed match. NOTE:  This feature is not fully working yet as of 1/6/2019.


