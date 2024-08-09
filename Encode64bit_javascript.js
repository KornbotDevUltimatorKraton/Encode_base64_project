// Define the JSON object
const data = {
    "email": "kornbot380@hotmail.com",
    "project_name": "Smart_bots"
};

// Convert JSON object to a string
const jsonString = JSON.stringify(data);

// Encode the JSON string to Base64
const encodedData = btoa(jsonString);

console.log(encodedData);
