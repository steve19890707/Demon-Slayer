import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Canvas } from './Canvas';
import { loader } from './DataLoader';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const GlobalStyle = createGlobalStyle`
  body { background:#1d2430; }
`;
const StyledApp = styled.div`
  position: relative;
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height:100vh;
  .loading {
    color: #fff;
    font-size:24px;
  }
`;

const StyledD = styled.div`
  padding:16px;
  color:#000;
  font-size:16px;
  background-color:#fff;
  margin-bottom:5px;
`;

export const App = ()=> {
  const [ dataIsDone, setDataIsDone ] = useState(false);
  const [ todo, setTodo ] = useState([
    { oder:1, text:'dnd-1' },
    { oder:2, text:'dnd-2' },
    { oder:3, text:'dnd-3' }
  ]);
  useEffect(()=>{
    loader.onComplete.add(()=>{
      setDataIsDone(true);
    });
  });
  return <StyledApp>
    <GlobalStyle/>
    {dataIsDone?<Canvas />:
      <span className="loading">Loading..</span>}
    {/* DragDropContext */}
    <DragDropContext 
      onDragEnd={result => {
        const { source, destination } = result;
        if (!destination) {
          console.log('over!')
          return;
        }
        let arr = Array.from(todo);
        const [remove] = arr.splice(source.index, 1);
        arr.splice(destination.index, 0, remove);
        setTodo(arr);
        console.log(arr);
      }}
    >
      <Droppable droppableId="id">
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {todo.map((val,key)=> (
              <Draggable draggableId={`${key}`} index={key} key={key}>
                {p=> (
                  <StyledD 
                    ref={p.innerRef}
                    {...p.draggableProps}
                    {...p.dragHandleProps}
                    key={val.id}
                  >{val.text}</StyledD>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
    {/* DragDropContext */}
  </StyledApp>
};
