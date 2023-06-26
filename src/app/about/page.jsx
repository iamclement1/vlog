import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'
const About = () => {
   return (
      <div className={styles.container} >
         <div className={styles.imageContainer}>
            {/* <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill="true"
               alt='header_image'
               className={styles.img} /> */}
            {/* <div className={styles.imgText}>
               <h1 className={styles.imgTitle}>Digital Storyteller</h1>
               <h2 className={styles.imageDescription}>Handcrafting award winning digital experience </h2>
            </div> */}
         </div>
         <div className={styles.textContainer}>
            <div className={styles.item}>
               <h1 className={styles.title} >Who are we?</h1>
               <p className={styles.description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae repellendus voluptates veniam consectetur nisi quod neque voluptate, suscipit illo consequatur molestias fuga distinctio laborum quis deserunt voluptatum beatae sequi perferendis, atque itaque error laboriosam tempore quisquam. Doloremque fugiat voluptates unde molestias, et in nemo esse quos rem facilis fugit a dolorem hic ullam, libero nisi similique animi asperiores adipisci blanditiis dicta. 
                  <br />
                  Aliquid facere illum quidem harum odit iusto, dolorum ipsam, rem porro atque quaerat quasi aspernatur voluptatum fugit neque corrupti fugiat iste. Harum esse voluptate, modi beatae impedit ullam odit! Deleniti eaque atque alias. Minus laborum quidem itaque voluptas obcaecati veritatis aliquam nam, labore consequatur fuga? 
                  <br />
                  Nisi id tempora maxime dolore reprehenderit iure earum at ullam rem ipsam quae, minima voluptatum corporis sequi cum nam maiores consequuntur quasi magni! Mollitia sint sit cupiditate reprehenderit? Dolore inventore accusantium vel saepe laborum deserunt quibusdam, rem, vero ipsum quam adipisci iure nemo?
               </p>
            </div>
            <div className={styles.item}>
            <h1 className={styles.title} >What we do?</h1>
            <p className={styles.description}>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore autem dignissimos ipsum accusantium repudiandae eaque voluptate a magnam facere minus aut officiis temporibus nihil quia, accusamus dolores adipisci? Porro odit sint, ea tenetur sed ipsum!
               <br />
               - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, id?
               <br />
               - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, repellat?
            </p>
            <Button url="/contact" text="Contact" />
            </div>
         </div>
      </div>
   )
}

export default About