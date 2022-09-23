fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter( (todo,index)=> {
        return todo.completed
     })
    // const completed = json.filter( (todo,index)=> {
    //     return todo.userId == 1
    //  })

     completed.forEach( (todo, index) => {
      console.log(`${todo.title} - ${todo.completed}`)
    })
    console.log(completed.length)
  }) 
  .catch(function(err) { 
    console.log(err);
  });