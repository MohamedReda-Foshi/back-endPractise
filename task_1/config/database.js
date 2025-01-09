import app from "../index.js";
import dotenv from "dotenv";


dotenv.config();

const PORT = process.env.PORT
export function connection(){
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT }`);
    });
}