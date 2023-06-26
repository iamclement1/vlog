import React, { Fragment } from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {

   return (
      <Fragment>
         <div className={styles.container}>
            <div>
               &copy; 2023 vlog. All rights reserved
            </div>
            <div className={styles.social} >
               <Image src="/img/1.png" width={15} height={15} alt="facebook"  className={styles.icon}/>
               <Image src="/img/2.png" width={15} height={15} alt="instagram" className={styles.icon} />
               <Image src="/img/3.png" width={15} height={15} alt="twitter" className={styles.icon} />
               <Image src="/img/4.png" width={15} height={15} alt="youtube" className={styles.icon} />

            </div>
         </div>


      </Fragment>
   )
}

export default Footer