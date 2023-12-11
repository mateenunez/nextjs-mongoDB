import { NextResponse } from "next/server"
import { connectDB } from "@/utils/mongoose"
import Task from "@/models/Task"

export async function DELETE(request, { params }){
    const DeletedTask = await Task.findByIdAndDelete(params.id)

    if(!DeletedTask) return NextResponse.json({message: "La tarea no existe."})
    return NextResponse.json(DeletedTask)
    
}

export async function GET(request, {params}){
    const TaskFound = await Task.findById(params.id)
    if (!TaskFound) return NextResponse.json({message: "No se encontro la tarea."})
    return NextResponse.json(TaskFound)
}

export async function PUT(request, {params}){
    try {
        const data = await request.json()
        const TaskUpdated = await Task.findByIdAndUpdate(params.id, data, {new:true})
        if (!TaskUpdated) return NextResponse.json({message: "Error al actualizar la tarea"})
        return NextResponse.json(TaskUpdated)
        
    } catch (error) {
        return NextResponse.json(error)
    }
}