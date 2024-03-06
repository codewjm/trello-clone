import { Draggable } from "react-beautiful-dnd";

type Props = {
  id: TypedColumn,
  todos: Todo[],
  index: number
}


function Column({id, todos, index}: Props) {
  return (
    <Draggable>
      {(provided) => (
        <div>
          {/* render droppable todos in the column */}
        </div>
      )}
    </Draggable>
  )
}

export default Column
