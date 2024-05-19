import { classNames } from 'shared/lib/classNames/classNames'
import s from './ErrorPage.module.scss'
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({className}: ErrorPageProps) => {
    const {t} = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={classNames(s.ErrorPage, {}, [className])}>
           <p>{t("Что-то пошло не так...")}</p>
            <Button onClick={reloadPage}>
                {t("Обновить страницу")}            
            </Button>   
        </div>
    )
}