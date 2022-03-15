import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";
import { Grid, Label, Card, Image } from "semantic-ui-react";
import RightComponent from "./RightComponent";
import { arr } from "./data";

function App() {
  const [new_arr, updateArr] = useState(arr);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(new_arr);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateArr(items);
  }

  return (
    <div className="components">
      <div className="left-component">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {new_arr.map(
                  (
                    { id, name, surname, avatar, amount, currency, status },
                    index
                  ) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <div
                            className="pad"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Card fluid>
                              <Grid verticalAlign="middle" padded>
                                <Grid.Column width={3}>
                                  <Image
                                    avatar
                                    size="massive"
                                    className="myfirstcard"
                                    src={avatar}
                                  />
                                </Grid.Column>

                                <Grid.Column width={8}>
                                  <Card.Header>
                                    Payment to {name} {surname}
                                  </Card.Header>
                                  <Card.Meta>
                                    <span className="span-currency">
                                      ${amount}
                                    </span>{" "}
                                    {currency}
                                  </Card.Meta>
                                </Grid.Column>

                                <Grid.Column width={5} verticalAlign="right">
                                  <Label
                                    circular
                                    color={
                                      status === "Success"
                                        ? "green"
                                        : status === "Failed"
                                        ? "red"
                                        : "orange"
                                    }
                                    basic
                                    content={status}
                                    icon="circle"
                                  />
                                </Grid.Column>
                              </Grid>
                            </Card>
                          </div>
                        )}
                      </Draggable>
                    );
                  }
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="right-component">
        <RightComponent />
      </div>
    </div>
  );
}

export default App;
