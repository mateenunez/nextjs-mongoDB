import styles from './page.module.css'
import { connectDB } from '@/utils/mongoose'
import Task from '@/models/Task'
import Link from 'next/link'

async function loadTasks(){
  connectDB()
  const tasks = await Task.find()
  return tasks
}

export default async function Home() {
  const tasksLoaded = await loadTasks()
  return (
    <div className={styles.page}>
      <h1 className={styles.main}>Pagina principal</h1>
      <div className={styles.tasks}>
        {tasksLoaded.map(task => (
          <Link href={`/tasks/${task._id}`} className={styles.task}>
          <div>
            <h3>{task.title}</h3>
            <h4>{task.description}</h4>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
