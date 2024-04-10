# Global Database Concurrency and Recovery Web Application Simulation

### This is a web application whos main goal is to simulate database concurrency, replication, and recovery scenarios. The application uses NodeJS and Express, while the Database uses MySQL.
<hr>

### 1. Copy and Paste these Commands in the IDE Terminal
`npm init` <br>
`npm i express express-handlebars body-parser mysql hbs dotenv method-override` <br>
`node app.js`

### 2. Open any Web-browser and Type "http://localhost:3000"
![image](https://github.com/Wads01/STADVDB/assets/148616782/774e9160-027e-461a-98b6-b27c045ea03e)

### 3. Set Preferred Isolation Level
The buttons automatically set the preferred global transaction isolation level among all the nodes in the web-application <br>
`SET GLOBAL TRANSACTION ISOLATION LEVEL READ UNCOMMITTED` <br>
`SET GLOBAL TRANSACTION ISOLATION LEVEL READ COMMITTED` <br>
`SET GLOBAL TRANSACTION ISOLATION LEVEL REPEATABLE READ` <br>
`SET GLOBAL TRANSACTION ISOLATION LEVEL SERIALIZABLE` <br>

### 4. Select A Node
The web application and the database simulated multi-master replication. This means that any changes set to central node also reflects in luzon/vismin node and vice versa. <br>
![image](https://github.com/Wads01/STADVDB/assets/148616782/522bffb6-be87-408c-94ab-aa45120b2180)

### 5. READ a User
To select a user, just copy paste the preferred `apptid` and paste in the searchbar and click the search button. <br>
![image](https://github.com/Wads01/STADVDB/assets/148616782/8a00456e-7d94-4b7e-a9b8-abca4de8b45a)


### 6. EDIT or DELETE a User
![image](https://github.com/Wads01/STADVDB/assets/148616782/2ed5f68e-33f1-4931-8b77-132ef5b8b6f9)


### 7. Reflected Changes
![image](https://github.com/Wads01/STADVDB/assets/148616782/be9d775f-8ce7-4451-989e-2ea06ac21cb0)
