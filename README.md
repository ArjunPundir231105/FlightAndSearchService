/
 -src/
    index.js // server
    models/
    controllers/
    services/
    utils/
    config/
 -tests/ [later] 

/
- flight    
WELCOME TO FLIGHTS SERVICE
-CLONE THE PROJECT ON YOUR LOCAL
-EXECUTE `npm install` on THE SAME PATH AS OF YOUR ROOT DIRECTORY OF THE DOWNLOADED PROJECT
-   CREATE A `.env` FILE IN TEH ROOT DIRECTORY AND ADD THE FOLLOWING ENVIRONMENT VARIABLE'
-`PORT=3000`
-INSIDE THE `src/config` FOLFER CREATE A NEW FILE `config.json` AND THEN ADD THE FOLLOWING PIECE OF JSON
```
{
  "development": {
    "username": "YOUR USER",
    "password": "PASSWORD",
    "database": "database_flights_and_search",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

once you have added your db config as listed above go to the src folder from your terminal and execute `npx sequelize db:create`
```
#FLIGHT TABLE
~

#DB DESIGN
--Airplane table
--Flight table
--Airport table
--City


