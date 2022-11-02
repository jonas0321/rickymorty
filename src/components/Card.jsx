import styles from  "./Card.module.css";

export default function Card(props) {
   return (
     <div className={styles.card}>
       <div className={styles.header}>
         <button className={styles.boton} onClick={props.onClose}>X</button>
         <h2 className={styles.contenido}>{props.name}</h2>
       </div>
       <img src={props.image} alt="" />
       <div className={styles.cartas}>
         <h2 >{props.species}</h2>
         <h2 >{props.gender}</h2>
       </div>
     </div>
   );
}

