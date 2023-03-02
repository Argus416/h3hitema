import app from "./server";
import connectDatabase from "./database";

const port = 3001;


connectDatabase()

app.listen(port, () => {
    console.log('Server is running on port 3000');
});