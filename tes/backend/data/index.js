/* const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Highscore-lista
let highscores = [];

// API-rutter för att hantera highscore-listan
app.get('/api/scores', (req, res) => {
  // Returnera highscores, sorterade i fallande ordning efter poäng
  const sortedHighscores = highscores.slice().sort((a, b) => b.score - a.score);
  res.json(sortedHighscores.slice(0, 5)); // Returnera de 5 bästa highscores
});

app.post('/api/scores', (req, res) => {
  const { name, score } = req.body;
  // Lägg till det nya highscore-objektet
  highscores.push({ name, score });
  // Sortera highscores och behåll de 5 högsta poängen
  highscores = highscores.sort((a, b) => b.score - a.score).slice(0, 5);
  res.json({ message: 'Highscore har uppdaterats' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 */
/* const express = require('express');
const app = express();
const port = 3000; // Anpassa porten efter dina preferenser
const fs = require('fs');

app.use(express.json());

app.get('/highscore', (req, res) => {
    fs.readFile('./backend/data/highscore.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json([]);
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.post('/highscore', (req, res) => {
    const newHighscore = req.body;
    fs.readFile('./backend/data/highscore.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Error reading highscore data' });
        } else {
            const highscore = JSON.parse(data);
            highscore.push(newHighscore);

            highscore.sort((a, b) => b.score - a.score); // Sortera highscore-listan

            // Begränsa highscore-listan till de 5 bästa resultaten
            const top5Highscore = highscore.slice(0, 5);

            fs.writeFile('./backend/data/highscore.json', JSON.stringify(top5Highscore), 'utf8', (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ message: 'Error writing highscore data' });
                } else {
                    res.json({ message: 'Highscore updated successfully' });
                }
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 */

// index.js

/* const express = require('express');
const app = express();
const port = 3000; // Anpassa porten efter dina behov
const fs = require('fs');

app.use(express.json());
let highscoreData = loadHighscores();

// Läs highscore-data från highscore.json-filen
let highscoreData = require('./data/highscore.json');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Endpunkt för att hämta highscore-listan
app.get('/api/highscores', (req, res) => {
  res.json(highscoreData);
});

// Endpunkt för att skicka ny highscore-data
app.post('/api/highscores', (req, res) => {
  const { name, score } = req.body;

  // Lägg till den nya highscore-dataposten
  highscoreData.push({ name, score });

  // Sortera highscore-listan i fallande ordning baserat på score
  highscoreData.sort((a, b) => b.score - a.score);

  // Begränsa highscore-listan till de fem bästa poängen
  highscoreData.splice(5);

  // Spara den uppdaterade highscore-listan till highscore.json-filen
  fs.writeFileSync('./data/highscore.json', JSON.stringify(highscoreData));

  // Hämta highscore-listan
app.get('/api/highscores', (req, res) => {
  res.json(highscores);
});




  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const fs = require('fs');

function loadHighscores() {
  try {
    const data = fs.readFileSync('highscores.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading highscores:', error);
    return [];
  }
}
function saveHighscores(highscores) {
  try {
    fs.writeFileSync('highscores.json', JSON.stringify(highscores, null, 2));
  } catch (error) {
    console.error('Error saving highscores:', error);
  }
}
 */
/*  const fs = require('fs');

const express = require('express');
const { json } = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;


// Dina övriga kodrader här

app.use(json());

app.use(cors());
const highscoresData = fs.readFileSync('backend/data/highscores.json', 'utf8');
 const highscores = JSON.parse(highscoresData); 
// Läs highscore-data från highscore.json-filen
let highscoreData = loadHighscores();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Endpunkt för att hämta highscore-listan
app.get('/api/highscores', (req, res) => {
  res.json(highscoreData);
  const sortedHighscores = highscoreData.slice(0, 5);
});

// Endpunkt för att skicka ny highscore-data
app.post('/api/highscores', (req, res) => {
  const { name, score } = req.body;

  // Lägg till den nya highscore-dataposten
  highscoreData.push({ name, score });

  // Sortera highscore-listan i fallande ordning baserat på score
  highscoreData.sort((a, b) => b.score - a.score);

  // Begränsa highscore-listan till de fem bästa poängen
  highscoreData.splice(5);

  // Spara den uppdaterade highscore-listan till highscore.json-filen
  saveHighscores(highscoreData);

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function loadHighscores() {
  try {
    const data = fs.readFileSync('highscores.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading highscores:', error);
    return [];
  }
}

function saveHighscores(highscores) {
  try {
    fs.writeFileSync('highscores.json', JSON.stringify(highscores, null, 2));
  } catch (error) {
    console.error('Error saving highscores:', error);
  }
} */
 

const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Läs highscore-data från highscore.json-filen
let highscoreData = loadHighscores();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Endpunkt för att hämta highscore-listan
app.get('/api/highscores', (req, res) => {
  const sortedHighscores = highscoreData.slice(0, 5);
  res.json(sortedHighscores);
});

// Endpunkt för att skicka ny highscore-data
app.post('/api/highscores', (req, res) => {
  const { name, score } = req.body;

  // Lägg till den nya highscore-dataposten
  highscoreData.push({ name, score });

  // Sortera highscore-listan i fallande ordning baserat på score
  highscoreData.sort((a, b) => b.score - a.score);

  // Begränsa highscore-listan till de fem bästa poängen
  highscoreData.splice(5);

  // Spara den uppdaterade highscore-listan till highscore.json-filen
  saveHighscores(highscoreData);

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function loadHighscores() {
  try {
    const data = fs.readFileSync('backend/data/highscores.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading highscores:', error);
    return [];
  }
}

function saveHighscores(highscores) {
  try {
    fs.writeFileSync('backend/data/highscores.json', JSON.stringify(highscores, null, 2));
  } catch (error) {
    console.error('Error saving highscores:', error);
  }
}
