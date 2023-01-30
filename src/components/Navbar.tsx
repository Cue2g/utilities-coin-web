
import styles from '../styles/Navbar.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        Utilities Coin
      </div>
      <div className={styles.social}>
        <a href="https://github.com/Cue2g"><GitHubIcon /></a>
        <a href="https://twitter.com/Cue2g"><TwitterIcon /></a>
        <a href="https://www.linkedin.com/in/gustavo-blanco-213b34193/"><LinkedInIcon /></a>
      </div>
    </nav>
  )
}
