module.exports = (app) => {
  app.post('/api/userData', (req, res) => {
    res.send('12');
  });
};