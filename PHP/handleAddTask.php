<?php
header('Access-Control-Allow-Origin: http://localhost:5173');

// Get task data from POST request
$task = $_POST['task'];

// Absolute path to the XML file
$xmlFilePath = '../public/database.xml';

// Load the XML file
$xml = new DOMDocument();
$xml->load($xmlFilePath);

// Get the root element
$toDo = $xml->createElement('toDo');
$toDo->setAttribute('task', $task);


// Append the task to the root element
$xml->documentElement->appendChild($toDo);

// Save the XML file
$xml->save($xmlFilePath);
?>