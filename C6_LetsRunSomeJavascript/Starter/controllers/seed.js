const Todo = require('../models/todos.js');

module.exports = function(app){

app.get('/api/setupTodos', function(req, res) {

  //seed database
  const starterTodos = [
    {
      username: 'China',
      todo: 'get pets',
      isDone: false,
      hasAttachment: false
    },
    {
      username: 'China',
      todo: 'get treats',
      isDone: false,
      hasAttachment: false
    },
    {
      username: 'China',
      todo: 'more treats',
      isDone: false,
      hasAttachment: false
    },
    {
      username: 'China',
      todo: 'nap',
      isDone: false,
      hasAttachment: false
    }
  ];
  Todo.create(starterTodos, function(err, results){
    res.send(results);
  })

})

}
