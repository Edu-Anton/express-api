const express = require('express');
const app = express();
const morgan = require('morgan');
const routes = require('./routes/index');
// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2) // Averiguar su función

// middleware
app.use(morgan('dev')); // permite ver por consola lo que llega al servidor ['dev', 'combined']
app.use(express.urlencoded({extended:false})) // permite decodificar información de formulario
app.use(express.json()); // permite al servidor recibir formato json y entenderlo

// routes
// app.get('/', (req, res) => {
//   res.json({'title':'Hello World'})
// })
// app.use(require('./routes/index'))
app.use(routes);
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

// server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
});