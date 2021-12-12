const {events} = require('./data.json');

export default  (req, res) => {

  const evt = events.filter(idx => idx.slug === req.query.slug);
  console.log('evt', evt);

  res.status(200).json(evt);
} 
