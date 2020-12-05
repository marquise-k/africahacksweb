This is a sample React front-end project to base your web project on. The corresponding back-end project can be found on this [link](https://github.com/marquise-k/africahacksweb2). Pull both into the same directory if you are working on a full stack project.

### How to Clone the Project

Clone the project by running ``` git clone https://github.com/marquise-k/africahacksweb.git ``` into your terminal.

To run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### Adding Components

Components in React are easy to add and remove based on your functional requirements. The sample project has sample components but we recommend modifying them and adding/removing components based on your needs. For inspiration, explore some easy to integrate component libraries:

- [MaterialUI](https://material-ui.com/)
- [TailwindUI](https://tailwindui.com/)
- [Visx](https://github.com/airbnb/visx) - You might want to try this one out if your idea requires data visualizations
- [ReactBootstrap](https://react-bootstrap.github.io/)

### Creating a database 
(Ignore this section if your project does not require a database)

This sample project uses a MongoDB database. Mongodb databases are non-relational hence require little upfront work or knowledge on the intended data structure. As always the more knowledge you have of your application's data needs the better. See intructions on how to install MongoDB into your local machine [here](https://docs.mongodb.com/manual/administration/install-community/)

Once your Mongo database is setup, you will need knowledge of a few commands to get started.

#### Adding data to your database

- Run ```mongo``` into your termminal to start a database instance

- If your mongo setup is done correctly you shoud see the following message appear:

```
    MongoDB shell version v4.4.1
    connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
    Implicit session: session { "id" : UUID("58b08487-441b-4035-9404-0ca1de5c9930") }
    MongoDB server version: 4.4.1
    ---
    The server generated these startup warnings when booting:
            2020-12-02T15:24:01.679-05:00: ***** SERVER RESTARTED *****
            2020-12-02T15:24:05.681-05:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
    ---
    ---
            Enable MongoDB's free cloud-based monitoring service, which will then receive and display
            metrics about your deployment (disk utilization, CPU, operation statistics, etc).

            The monitoring data will be available on a MongoDB website with a unique URL accessible to you
            and anyone you share the URL with. MongoDB may use this information to make product
            improvements and to suggest MongoDB products and deployment options to you.

            To enable free monitoring, run the following command: db.enableFreeMonitoring()
            To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
    ---
```

- Create a collection to begin. In mongo, your database will be made up of one or more "collections" which will hold your data. To create a collection, 
simply type the following command into the terminal. Replace "my-collection-name" with the identifier you wish to use for your database.

``` use <my-collection-name> ```

- Once you've initiated and entered a collection, you should be able to run the following command to insert into your database, like below

```
db.analytics.insert([{
... pageViews: 10,
... repeatVisits: 10,
... topLocation: Canada,
... averageVisitLength: '2 mins',
... }, {
... pageViews: 15,
... repearVisits: 20,
... topLocation: China,
... averageVisitLength: '5 mins',
... }, {
... pageViews: 3,
... repreatVisits: 1,
... topLocation: Spain,
... averageVisitLength: '1 min'
... }])
```

Other collection methods canbe found [here](https://docs.mongodb.com/manual/reference/method/js-collection/)

#### Building the back-end
Refer to the back-end repo for guidelines on building a back-end server which interacts with your database.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
