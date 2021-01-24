const fs = require("fs");

const names = fs.createReadStream("names.txt");

names.on("data", (data) => {
    console.log(data.toString());
})

// process.stdout itself streams the data, so we can pipe into it.
names.pipe(process.stdout);

const namesCopy = fs.createWriteStream("namesCopy.txt");
names.pipe(namesCopy);