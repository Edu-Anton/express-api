const { Router } = require('express'); // desde express requiro su objeto Router
const router = Router();

router.get('/', (req, res) => {
  res.json({'title': 'Hello World Eduardo'})
});

router.get('/test', (req, res) => {
  // Cuando un usuario pida esta ruta devuelvo este dato
  const data = {
    "name": "Eduardo",
    "website": "anton.com"
  };
  res.json(data);
});

module.exports = router;