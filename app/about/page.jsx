import styles from "@/app/page.module.css"


function about() {
  return (
    <div className={styles.page}>
        <h1 className={styles.main}>Quien soy</h1> 
        <div className={styles.about}>
        <h3> Soy un estudiante de ingenieria en sistemas de informacion, al momento de hacer esta pagina de NextJs tengo 20 años y busco con esto el aprendizaje de frameworks para front-end.</h3>
        <p className={styles.code}> Esta pagina la desarrolle con la ayuda del video de "FaztWeb", los objetivos fueron el manejo de fetching, aplicar CRUD en MongoDB. 
        </p>
        </div>      
    </div>
  )
}

export default about