import Button from '@/components/button/Button'
import styles from './page.module.css'
import Image from 'next/image'

const Category = ({params}) => {
  // console.log(params)
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}> {params.category} </h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet.
          </p>
          <Button text="See more" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/15979422/pexels-photo-15979422/free-photo-of-amon.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='cat_image' fill={true}
          className={styles.img} />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet.
          </p>
          <Button text="See more" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/15979422/pexels-photo-15979422/free-photo-of-amon.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='cat_image' fill={true}
          className={styles.img} />
        </div>
      </div>
    </div>
  )
}

export default Category