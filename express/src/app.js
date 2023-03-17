const express = require('express');
const app = express();
const PORT = 3000;

const json = {
    "name": "Caleb Curry",
    "Industry": "Music",
    "FaviryteColors": [
        "red", "blue", "green"
    ],
    "FavoriteNumbers": [
        5, 3, 7
    ],
    "FavoritePeople": [{
            "name": "mom",
            "relationship": "parent"
        },
        {
            "name": "mom",
            "relationship": "parent"
        }
    ]
};



app.get('/', (req, res) => {

    res.send({"data": json.FavoritePeople});
});


app.post('/', (req, res) => {

    res.send('This is a pot request');
});

app.listen(PORT, () => {
    console.log('App lintening on port' + PORT);

});