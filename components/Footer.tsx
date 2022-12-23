import * as React from 'react'
import styles from './styles.module.css'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import { useDarkMode } from '../lib/use-dark-mode'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2022 Clark Weckmann</div>

      <div className={styles.social}>
      {hasMounted && (
          <a
            className={styles.darkToggle}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
          <a
            className={styles.twitter}
            href={`https://twitter.com/TheWeckmann`}
            title={`Twitter @TheWeckmann`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
