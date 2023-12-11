/* En este archivo estaran las funciones GET, SET, etc*/

import { NextResponse } from "next/server"
import { connectDB } from "@/utils/mongoose"
import Task from "@/models/Task"

export async function GET(){
    connectDB()

    const alltasks = await Task.find()

    return NextResponse.json( alltasks )

}

export async function POST(request){
    try {
        const data = await request.json()
        const newTask = new Task(data)
        const savedTask = await newTask.save()
        return NextResponse.json(savedTask)
    } 
    catch (err) {
        return NextResponse.json(err.message)
    }

   

}
