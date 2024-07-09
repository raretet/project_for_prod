import { classNames } from 'shared/lib/classNames/classNames'
import s from './Navbar.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShownModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <div className={classNames(s.navbar, {}, [className])}>
        <Button
          theme={ThemeButton.CLEAR}
          className={s.links}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </div>
    )
  }
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR}
        className={s.links}
        onClick={onShownModal}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}
