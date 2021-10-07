import * as Componets from "./styles"
import { Item } from "../../types/Item"

type BananaProps = {
    item: Item
    onChange: (id:number, done:boolean) => void
}

export const ListItem = ({ item, onChange }: BananaProps) => {
    return (
        <Componets.Container done={item.done}>
            <input type="checkbox" checked={item.done} onChange={e => onChange(item.id, e.target.checked)}/>
            <label>{item.name} - {item.done.toString()}</label>
        </Componets.Container>
    )
}