import { useState } from "react"

import * as Componets from "./styles"
import { Item } from "../../types/Item"

type BananaProps = {
    item: Item
}

export const ListItem = ({ item }: BananaProps) => {
    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <Componets.Container done={isChecked}>
            <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)}/>
            <label>{item.name}</label>
        </Componets.Container>
    )
}