import Image from "next/image"
import styles from "./page.module.css"
import Button from "@/components/button/Button"

const Contact = () => {
   return (
      <div className={styles.contact}>
         <div className={styles.title}>
            {"Let's keep in touch"}
            <div className={styles.content}>
               <div className={styles.imgContainer}>
                  <Image src="/img/contact.png" fill="true" alt="contact-image" 
                  className={styles.image}/>
               </div>
               <div className={styles.form}>
                  <input type="text" placeholder="name" className={styles.input} />
                  <input type="email" placeholder="email" className={styles.email} />
                  <textarea className={styles.textarea} placeholder="message" cols="30" rows="10"></textarea>
                  <Button url="#" text="Send message" />
               </div>

            </div>
         </div>
      </div>
   )
}

export default Contact