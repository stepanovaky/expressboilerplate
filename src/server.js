const app = require('./app');
const { PORT } = REQUIRE('./config');

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost${PORT}`);
});

