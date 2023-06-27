import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'

//DATA FETCHING
// async function fetchData() {
//   const res = await fetchData("example.com", {
//     // cache: 'force-cache' //stactic data fetching, when data never changes,
//     // next: {revalidate: 10} //data changes but not too often -revalidating data
//     // cache: "no-store" //dynamic data fetching, when data changes all the time and you want to fetch the fresh data on every request
//   });
//   return res.json() 
// }


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title} >Better design for your digital products</h1>
        <p className={styles.description} >Turning your idea into reality. We bring together the teams from the global tech</p>
        <Button url="/portfolio" text="See our works" />
      </div>
      <div className={styles.item}>
        <Image src="/img/hero.png" alt='hero-image' width={500} height={500} className={styles.img}/>
      </div>
    </div>
  )
}
