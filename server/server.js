const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist/fetchgitissues/')));

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/dist/fetchgitissues/', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log('server started...');
})

