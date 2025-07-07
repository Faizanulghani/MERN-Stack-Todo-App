export const addItemToServer = async (task, date) => {
  let response = await fetch("http://localhost:3001/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  });
  let item = await response.json()
  return mapServerItemToLocalItem(item)
};

export const getItemsFromServer = async ()=>{
    let response = await fetch("http://localhost:3001/api/todo")
    let items = await response.json()
    return items.map(mapServerItemToLocalItem)
}

export const markItemCompletedOnServer = async (id)=>{
    let response = await fetch(`http://localhost:3001/api/todo/${id}/completed`,{
      method:"PUT"
    })
    let item = await response.json()
    return mapServerItemToLocalItem(item)
}

export const deleteItemFromServer = async (id)=>{
   await fetch(`http://localhost:3001/api/todo/${id}`,{
      method:"DELETE"
    })
    return id
}

let mapServerItemToLocalItem = (serverItem) => {
  return {
    id: serverItem._id,
    name: serverItem.task,
    dueDate: serverItem.date,
    completed: serverItem.completed,
    createdAt: serverItem.createdAt,
    updatedAt: serverItem.updatedAt,
  };
};
