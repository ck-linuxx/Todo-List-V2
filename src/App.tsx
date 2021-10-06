import {useState} from "react"
import * as Component from "./App.styles"

import { Item } from "./types/Item"
import { ListItem } from "./components/ListItem"
import { AddArea } from "./components/AddArea"

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "Comprar o pão na padaria",
      done: false
    },
    {
      id: 2,
      name: "Estudar ReactJS",
      done: true
    },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };


  return (
    <Component.Container>
      <Component.Area>
        <Component.Header>Lista de Tarefas</Component.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          // <div>{item.name}</div>
          <ListItem key={index} item={item}/>
        ))}

      </Component.Area>
    </Component.Container>
  )
}

export default App;