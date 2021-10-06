import {useState} from "react"
import * as Component from "./App.styles"

import { Item } from "./types/Item"
import { ListItem } from "./components/ListItem"

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


  return (
    <Component.Container>
      <Component.Area>
        <Component.Header>Lista de Tarefas</Component.Header>

        {/* Area para adicionar nova tarefa*/}


        {list.map((item, index) => (
          // <div>{item.name}</div>
          <ListItem key={index} item={item}/>
        ))}

      </Component.Area>
    </Component.Container>
  )
}

export default App;