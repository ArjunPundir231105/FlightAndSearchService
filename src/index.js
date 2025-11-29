const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/index');

const { Airport, City} = require('./models/index'); 
const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {

        console.log(`Server is running on port ${PORT}`);

        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }
});
}

setupAndStartServer();

// npm sequelize db:migrate is used to run the migration files and create the tables in the database.
// it is used after 1:N etc linking and other required defining