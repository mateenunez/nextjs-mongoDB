import mongoose from "mongoose"

const con = {
    isConnected: false
}

export async function connectDB(){
if (con.isConnected)  return ;

    const db = await mongoose.connect('mongodb://127.0.0.1:27017/test');
    con.isConnected = db.connections[0].readyState
    console.log(db.connection.db.databaseName)
}


mongoose.connection.on('connected', () => {
    console.log('Mongoose connection successed ')
    
})

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection failed ' + err)
})