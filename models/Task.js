import { Schema, model, models } from "mongoose"



const taskSchema = new Schema ({
    title : {type: String, required:[true, 'El titulo es obligatorio.'], unique:true, trim:true, },
    description : {type: String}
})

export default models.Task || model('Task', taskSchema)