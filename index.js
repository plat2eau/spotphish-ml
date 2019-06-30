let express = require("express");
let app = express();

app.use(function(req, res, next) {
    console.log(`${new Date()} - ${req.method} request for ${req.url}`);
    next();
});

app.use(express.static("public"));
app.listen(3000, function() {
    console.log("serving static on port 3000")
});
