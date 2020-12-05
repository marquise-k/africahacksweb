## AfricaHacks2020: Starter Web Project (Front-End)
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

### Getting External Data
Displaying data form different sources can be a nice way to provide information to your applications. This is the goal of APIs. Here are a list of [public apis](https://github.com/public-apis/public-apis) which you can add to your app. If you are not interested in displaying external data, a database might be better suited for your needs as you can enter the data directly into the database and then display and modify as you need from your front-end.

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

Other collection methods can be found [here](https://docs.mongodb.com/manual/reference/method/js-collection/)

#### Building the back-end
Refer to the back-end repo for guidelines on building a back-end server which interacts with your database.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Preparing your app for release

In the ```Public``` directory of your front-end repository, you will find app metadata like your web app favicon and title. Make sure these are updated to reflect your project before releasing. For example:

In ```Public``` -> ```index.html``` , editing line 25 from 

```<title>React App</title>``` to     ```<title>My Project Name</title>``` will reflect the new app page on the browser tab.

In ```manifest.json```, the name and short name properties should also be updated to your reflect your new app.

Not required but if you have made a logo for your app,  you can also add to this repository after using a [favicon generator](https://realfavicongenerator.net/) and replacing the ```favicon.ico``` file in the public folder by your generated ```favicon.ico```

### Deployment
Once you're front-end is ready to be connected to your backend for deployment, run ```npm run build``` in the front-end repo. This will create a `build` folder in your front-end repository. Copy this build folder into the root of your back-end repository. Then you can use the back-end repository as your 'full stack app' as it will be serving both the server files and the front-end files.

An easy way to deploy a full-stack application is by using an AWS instance. To do this:

- Create an [AWS Console](https://aws.amazon.com/console/) account and login to the console.

- Under all services, click on 'EC2' and then launch instance

- Select the top result from the list of options (Amazon Linux 2 AMI). Make sure the free tier is selected and click on "Review and Launch" then launch.

- AWS will then prompt you to create a key pair which is just a private key file you will need to SSH into your server and make changes. Make sure you;ve downloaded the key pair file (.pem extension) before your proceed.

