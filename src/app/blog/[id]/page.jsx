import Image from "next/image"
import styles from "./page.module.css"

const Post = () => {
   return (
      <div className={styles.container}>
         <div className={styles.top}>
            <div className={styles.info}>
               <h1 className={styles.title}> Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
               <p className={styles.description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, iusto beatae. Ducimus!
               </p>
               <div className={styles.author}>
                  <Image src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="profile-image"
                  width={40}
                  height={40}
                  className={styles.avatar} />
                  <p className={styles.avatarName}>Nnamdi Azubuike</p>
               </div>
            </div>
            <div className={styles.imageContainer}>
               <Image src="https://images.pexels.com/photos/6335643/pexels-photo-6335643.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
               alt="blog-images"
               fill={true}
               className={styles.image}
               />
            </div>
         </div>
         <div className={styles.content}>
            <div className={styles.text}>
               <p>
                  {"Lorem ipsum dolor sit amet consectetur adipisicing elit. In, placeat aspernatur? Ipsam illo suscipit dolorem consequatur vero dignissimos. Odit voluptas laboriosam rerum similique dolores eligendi!"}
               </p>
               <br />
               <p>
                  {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus commodi neque ullam id, tempore ea velit totam reprehenderit laboriosam dolores praesentium ad repellat explicabo similique accusamus, numquam, doloremque quasi. Fugit, harum illo. Commodi, debitis."}
               </p>
               <br />
               <p>
                  {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis eveniet eaque architecto, eos itaque praesentium. Voluptatem eius animi dolor mollitia reprehenderit doloribus deserunt impedit hic minus laudantium? Placeat, quae maxime ex laudantium quisquam necessitatibus quas quos maiores ipsa. Repellat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus error obcaecati tenetur numquam. Quia illo natus praesentium, ipsam aliquid doloremque debitis voluptate sint, autem nam amet? Quas delectus aspernatur ullam neque, earum dolorum cupiditate ad suscipit et recusandae exercitationem vitae, cum beatae enim, dolor velit minima molestiae blanditiis magnam harum facilis. Pariatur iusto, perferendis voluptatem debitis corrupti eos dignissimos ex exercitationem nihil, quo ipsa. Veritatis amet, vel dignissimos impedit commodi ut necessitatibus eum architecto natus dolorem quos ab maiores, porro eligendi doloremque molestias itaque incidunt quia ipsum consequatur, dolorum deserunt? Perspiciatis corporis, veritatis maiores quae autem aut ipsa est?"}
               </p>
            </div>
         </div>
      </div>
   )
}

export default Post