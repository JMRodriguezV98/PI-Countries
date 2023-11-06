const server = require("./src/server");
const { conn } = require('./src/db.js');
const { getCountriesHandler } = require("./src/handlers/countriesHandler.js");
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  getCountriesHandler();
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
