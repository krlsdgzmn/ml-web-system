import { useEffect, useState } from "react";
import $ from "jquery";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { TbCheckbox } from "react-icons/tb";

export default function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const fetchToDoList = async () => {
      try {
        const database = await fetch("database.xml");
        const response = await database.text();
        const xml = new DOMParser()
          .parseFromString(response, "text/xml")
          .getElementsByTagName("toDo");

        const taskList = Array.from(xml).map((t) => t.getAttribute("task"));
        setToDoList(taskList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchToDoList();
  }, []);

  const handleAddTask = (e) => {
    e.preventDefault();

    const form = $(e.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success: (response) => {
        console.log(response);
        setToDoList((t) => [...t, task]);
        setTask("");
      },
      error: (_, __, error) => {
        console.error(error);
      },
    });
  };

  const handleDoneTask = (index) => {
    $.ajax({
      type: "POST",
      url: "assets/handleDoneTask.php",
      data: { index },
      success: (response) => {
        console.log(response);
        const updatedLists = toDoList.filter((_, i) => i !== index);
        setToDoList(updatedLists);
      },
      error: (_, __, error) => {
        console.error(error);
      },
    });
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
            action="assets/handleAddTask.php"
            method="POST"
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
            {toDoList.map((toDo, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 border-b py-5"
              >
                <Label htmlFor={index} className="w-full">
                  {toDo}
                </Label>
                <TbCheckbox
                  onClick={() => handleDoneTask(index)}
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
