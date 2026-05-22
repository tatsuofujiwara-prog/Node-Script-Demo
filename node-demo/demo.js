// demo.js - Node Script Demo

const fs = require('fs');     // Import File System module

console.log("🚀 Node.js Script is Running...");

// Content to write into the file
const message = `Hello from Node.js!
This file was created at: ${new Date().toLocaleString()}

This is a demo for the Node Script Lab.
Node.js can interact with your computer's file system, unlike browser JavaScript.
`;

// Create the file
fs.writeFile('message.txt', message, (err) => {
    if (err) {
        console.error("❌ Error creating file:", err);
    } else {
        console.log("✅ File 'message.txt' created successfully!");
        console.log("You can now check the file in your folder.");
    }
});

// Bonus: Show current directory
console.log("Current folder:", __dirname);