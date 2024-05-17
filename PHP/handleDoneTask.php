<?php
// Allow requests from the specified origin
header('Access-Control-Allow-Origin: http://localhost:5173');
// Get task index from POST request
$index = $_POST['index'];

// Load the XML file
$xmlFilePath = '../public/database.xml';
$xml = new DOMDocument();
$xml->load($xmlFilePath);

// Get the <toDoList> element
$toDoList = $xml->getElementsByTagName('toDoList')->item(0);

// Remove the task at the specified index
$tasks = $toDoList->getElementsByTagName('toDo');
$taskToRemove = $tasks->item($index);
$toDoList->removeChild($taskToRemove);


// Save the updated XML file
$xml->save($xmlFilePath);
?>
