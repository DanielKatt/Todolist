import React, { useState } from "react";
import TaskList from "./TaskList";
import FormTodo from "./Formtodo";
const Container = () => {
const [list, setList] = useState([]);

const handleAddItem = addItem => {
setList([...list, addItem]);
};
return (
    <div>
        {/*(A-1)*/}
        <FormTodo handleAddItem={handleAddItem} />
        {/*(C)*/}
        <TaskList list={list} setList={setList} />
    </div>
    );
};
export default Container
