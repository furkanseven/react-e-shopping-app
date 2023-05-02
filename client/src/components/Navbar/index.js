import React from 'react'
import { Link } from "react-router-dom";
import styles from './styles.module.css'
import { Button} from '@chakra-ui/react'
import { useAuth } from '../../context/AuthContext';


function Navbar() {

  const {loggedIn}= useAuth();
  console.log(loggedIn);

  return (
    <nav className={styles.nav}>
        <div className={styles.left}>
            <div className={styles.logo}>
                <Link to='/'>eCommerce</Link>
            </div>
            <ul className={styles.menu}>
                <li>
                    <Link to='/'>Ürünler</Link>
                </li>
            </ul>
        </div>

        <div className={styles.right}>
           {
            !loggedIn && <>
             <Link to = "/signin">
            <Button colorScheme='orange'>Giriş Yap</Button>
            </Link>
            <Link to="signup">
            <Button colorScheme='orange'>Kayıt Ol</Button>
            </Link>
            </>
           }  
           {
            loggedIn&&<>
             <Link to = "/profile">
            <Button colorScheme='gray'>Profile</Button>
            </Link>
            </>
           }
        </div>
    </nav>

  )
}

export default Navbar