import React from 'react';
import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 10 } })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
      <Link href="/blog/testId" className={styles.container} key={item.id}>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/17260662/pexels-photo-17260662/free-photo-of-tattoos-on-man-back.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='blog_image'
            width={450}
            height={250}
            className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.description}>{item.body}</p>
        </div>
      </Link>
      ))}

    </div>
  )
}

export default Blog