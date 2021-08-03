import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '..'

const TypeBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <div>
            {device.types.map((el) => (
                <ListGroup.Item
                    key={el.id}
                    style={{cursor: 'pointer'}}
                    active={device.selectedType.id === el.id}
                    onClick={() => device.setSelectedType(el)}
                >
                    {el.name}
                </ListGroup.Item>
            ))}
        </div>
    )
})

export default TypeBar
