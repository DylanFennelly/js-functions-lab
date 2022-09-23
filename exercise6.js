fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    //  const userIDs = []
    //  for (var i = 0; i < json.length; i++){
    //   if (!userIDs.includes(json[i].userId)){
    //     userIDs.push(json[i].userId)
    //   }
    //  }
    // //  console.log(userIDs)

    const completedByUser = json.reduce((totals, todo)=> {
      if(todo.completed){
        //if index of user ID does not exist yet in array, initilise it with value of 1
        //else (if it does exist), increase value at index by 1

        // console.log(todo.userId)
        // console.log(total[todo.userId])
        //  console.log(total[todo.UserId])
        totals[todo.userId] === undefined ? (totals[todo.userId] = 1) : (totals[todo.userId] = totals[todo.userId] + 1);
      }
      return totals;
    }, []);
    console.log(completedByUser);
    
  }) 
  .catch(function(err) { 
    console.log(err);
  });