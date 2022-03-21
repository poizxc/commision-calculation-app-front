
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Application
This is simple frontend application for commision calculation task

its require [Commision API](https://github.com/poizxc/commision-api) to run on port 8080 (if api will be started on diffrent port then proxy property needs to be changed in package.json)


# Running 

To Start Development Server you need to have instaled node modules:

```
npm install
```

or 

```
yarn install
```

after instalation it can be started via start script:

```
yarn start
```
or 
```
npm run start
```

## Notes To Reviewers
app have 2 pages "/calculate-commision" and  "/results"

calculation form was created using formik and it have validation done via "joy"

I used redux for handling the api errors/successes and to store the calls to api, that can be previewed on /results, it was not best choice for such small application but it was mantioned in task description, so i followed the requirements.

tests were created using jest and react testing library.
## Techstack 

- React
- typescript
- redux
- material ui 
- react-router
- formik
- jest+RTL
