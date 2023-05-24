const express=require('express');
const dbconnect=require('./Database/index');
const {PORT}=require('./Config/index')
const router=require('./Routes/index')
const errorHandler=require('./Middleware/errorHandler');
const cookieParser=require('cookie-parser');

const app = express();

app.use(cookieParser());

app.use(express.json());

app.use(router);

dbconnect();

app.use('/storage' , express.static('storage'));

app.use(errorHandler);

app.listen(PORT, console.log(`Backend is running on port:  ${PORT}`));