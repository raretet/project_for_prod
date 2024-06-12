import { classNames } from 'shared/lib/classNames/classNames'
import s from './Modal.module.scss'
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import { Portal } from 'widgets/Portal/Portal'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Modal = ({
  className,
  children,
  isOpen,
  onClose,
  lazy
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, 200)
    }
  }, [onClose])

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    },
    [closeHandler]
  )

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
      window.removeEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timerRef.current)
    }
  }, [isOpen, onKeyDown])

  const mods: Record<string, boolean> = {
    [s.opened]: isOpen,
    [s.isClosing]: isClosing
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal element={document.body}>
      <div className={classNames(s.Modal, mods, [className])}>
        <div className={s.overlay} onClick={closeHandler}>
          <div className={s.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
