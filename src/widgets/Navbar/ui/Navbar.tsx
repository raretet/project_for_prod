import { classNames } from 'shared/lib/classNames/classNames'
import s from './Navbar.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShownModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])
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
