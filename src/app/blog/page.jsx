import React from 'react';
import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/17260662/pexels-photo-17260662/free-photo-of-tattoos-on-man-back.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='blog_image'
          width={450}
          height={250}
          className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Description</p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/17260662/pexels-photo-17260662/free-photo-of-tattoos-on-man-back.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='blog_image'
          width={450}
          height={250}
          className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.description}>Description</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog