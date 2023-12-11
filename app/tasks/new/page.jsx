"use client"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "@/app/page.module.css"

function FormPage() {

    const router = useRouter()
    const params = useParams()
    
    const [newTask, setNewTask] = useState(
            {title: "", 
            description: ""});
    
    const handleSubmit = async (event) => {
    event.preventDefault()
    if (!params.id){
     await createTask()
    } else {
      await updateTask()
    }}

    const getTask = async () => {
      const res = await fetch(`/api/tasks/${params.id}`)
      const data = await res.json()
      setNewTask(data)
    }

    const handleChanges = (event) => {
        setNewTask({... newTask, [event.target.name]: event.target.value})
    }

    const handleDelete = async () => { /*Podriamos preguntar con window.confirm*/
    const res = await fetch(`/api/tasks/${params.id}`, {
      method: "DELETE"
    })
    router.push('/')
    router.refresh()
    }

    const createTask = async () => {
      const res = await fetch('/api/tasks', {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: {
          "Content-Type": "application/json"
        }
      })
      //console.log(res.json())
      router.push('/')
      router.refresh()
    }

    const updateTask = async () => {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(newTask),
        headers: {
          "Content-Type": "application/json"
        }
      })
      //console.log(await res.json())
      router.push('/')
    }

    const getPlaceholder = async () => {
      if (params.id){
        const res = await fetch(`/api/tasks/${params.id}`)
        const data = await res.json()
        console.log(data.title)
        return `${data.title}`
      } else {
        return "Titulo"
      }
    }

  useEffect( () => {
    if (params.id){ 
      getTask()
      
    }
  }, [])

  return (
    <div className={styles.page}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2> {!params.id ? 'Crear tarea' : 'Actualizar tarea'} </h2>
            <input type='text' name='title' placeholder={!params.id ? 'Titulo' : `${newTask.title}`} onChange={handleChanges} className={styles.forminput}/>
            <textarea name='description' placeholder={!params.id ? 'Descripcion' : `${newTask.description}`} onChange={handleChanges} className={styles.formtextarea}/>    
            <button type="submit" className={styles.sbtn}> Guardar </button>
            <button type="button" className={styles.dbtn} onClick={handleDelete}> Eliminar </button>
        </form>

    </div>
  )
}

export default FormPage