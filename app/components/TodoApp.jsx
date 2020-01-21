var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },{
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Go to the market'
        },{
          id: 4,
          text: 'Play video games'
        }
      ]
    };
  },

handleAddTodo: function(text) {
    alert('new text: '+ text)
},

  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );

  }
});

module.exports = TodoApp;
