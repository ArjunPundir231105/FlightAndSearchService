const express = require('express');

const {PORT} = require('./config/serverConfig');


const setupAndStartServer = async () => {
    // create a express object
    const app = express();
    // start the app
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        console.log(process.env.PORT);
    });
}  

setupAndStartServer();
