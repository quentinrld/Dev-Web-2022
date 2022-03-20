const express = require('express');
const {readFile} = require('fs').promises;

const app = express();

app.use(express.json());

app.get('/', async (request, response) => {
    response.send(await readFile('./main.html', 'utf-8'));
});

app.post('/tshirt/:id', async (request, response) => {
        const {id} = request.params;
        const {logo} = request.body;
        if (!logo) {
            response.status(418).send({message: 'We need a logo'})
        }
        response.send(
            {tshirt: `Tshirt with ${logo} and ID of ${id}`}
        )
    }
);

app.listen(process.env.PORT || 3000, () => console.log('App is available on http://localhost:3000'));

