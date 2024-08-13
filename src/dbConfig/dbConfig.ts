import mongoose from "mongoose";


export async function connect(){
    try {
        mongoose.connect(process.env.MONGODB_URI!,{
            dbName: "nextjs-auth",
            bufferCommands: true,
        })
        const connection = mongoose.connection 
        //console.log("connection: ",connection)

        connection.on("connection",() => {
            console.log("Database connection established")
        })
        connection.on("error",(error: any) => {
            console.log("Error connecting to Database");
            process.exit();
        })

    } catch (error: any) {
        console.log("Error connecting to Database");
        console.error(error.message);
    }
}

