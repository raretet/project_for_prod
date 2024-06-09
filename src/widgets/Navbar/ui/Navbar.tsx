import { classNames } from 'shared/lib/classNames/classNames'
import s from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const { t } = useTranslation()

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR}
        className={s.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        ojwoicjwwejweoijiocjwoejciojoiwcoiweciocoidcoijweoicjoijecwcwoicjwoicjweoicj
      </Modal>
    </div>
  )
}
