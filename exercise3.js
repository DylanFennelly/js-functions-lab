fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json.filter( (todo,index)=> {
        return !todo.completed
     }).map( task => {
        return {
           userID: task.userId,
           todoTitle: task.title
        }
     } )

    console.log(uncompleted)
  }) 
  .catch(function(err) { 
    console.log(err);
  });