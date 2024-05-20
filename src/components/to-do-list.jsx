import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { TbCheckbox } from "react-icons/tb";
import { Input } from "./ui/input";

export default function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const fetchToDoList = async () => {
      try {
        const response = await axios.get(
          "https://mksg-lifestyle.onrender.com/api/todo_list/",
        );
        setToDoList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchToDoList();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://mksg-lifestyle.onrender.com/api/todo_list/",
        { task },
      );
      setToDoList([...toDoList, response.data]);
      setTask("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDoneTask = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/todo_list/${id}/`);
      const newToDoList = toDoList.filter((item) => item.id !== id);
      setToDoList(newToDoList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="col-span-5 h-fit lg:col-span-3">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="md:text text-xl font-semibold">
            To Do List
          </CardTitle>
          <CardDescription>
            You have {toDoList.length} pending tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Form */}
          <form
            onSubmit={handleAddTask}
            className="flex w-full items-center space-x-2"
          >
            <Input
              value={task}
              name="task"
              type="text"
              placeholder="Enter you task..."
              maxLength={25}
              onChange={(e) => setTask(e.target.value)}
              required
            />

            <Button className="bg-primary hover:bg-primary/70" type="submit">
              Add Task
            </Button>
          </form>

          <ul>
            {toDoList.map((toDo) => (
              <li
                key={toDo.id}
                className="flex items-center space-x-2 border-b py-5"
              >
                <Label htmlFor={toDo.id} className="w-full">
                  {toDo.task}
                </Label>
                <TbCheckbox
                  onClick={() => handleDoneTask(toDo.id)}
                  size={24}
                  className="cursor-pointer transition-colors hover:opacity-50"
                  color="hsl(var(--primary))"
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
