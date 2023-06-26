import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title} >Better design for your digital products</h1>
        <p className={styles.description} >Turning your idea into reality. We bring together the teams from the global tech</p>
        <button className={styles.button} >See our works</button>
      </div>
      <div className={styles.item}>
        <Image src="/img/hero.png" alt='hero-image' width={500} height={500}/>
      </div>
    </div>
  )
}
