
import { DEV_ORIGIN, PROD_ORIGIN } from "./config/config.js";
import express from "express";
const app = express();
import { DbConnection } from "./config/db.js";
import cookieParser from 'cookie-parser';
import cors from 'cors';

const isProduction = process.env.NODE_ENV == 'production';
console.log(isProduction);


const origin = isProduction ? PROD_ORIGIN : DEV_ORIGIN
console.log(origin);
app.use(cors({
  origin, 
  credentials: true 
}))


app.use(cookieParser())

app.use(express.json())


app.get("/" ,(req ,res) =>{
  res.end("hello from backend")
})
// manager routes 
import managerRoute from './routes/manager.routes.js'
app.use("/api/v1/manager" , managerRoute)

// team routes 
import teamRoutes from './routes/team.routes.js'
app.use("/api/v1/team" , teamRoutes)

// task routes 
import taskRoutes from './routes/task.routes.js'

app.use("/api/v1/task" , taskRoutes)

// developer routes 
import developerRoutes from './routes/developer.route.js'
app.use("/api/v1/developer" , developerRoutes)





// database connection 
DbConnection()
  .then(() => {
    app.listen(process.env.DEV_PORT, () => {
      console.log(`server is running on port number ${process.env.DEV_PORT}`);
    });
  })
  .catch((error) => console.log(error));


export default app;