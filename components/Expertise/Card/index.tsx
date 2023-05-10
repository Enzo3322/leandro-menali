import { ReactNode } from "react"
import styles from './styles.module.scss'

export interface ExpertiseCardProps {
    title: string,
    text: string,
    children: ReactNode
}

const ExpertiseCard = (props: ExpertiseCardProps) => {
    const { children, title, text } = props

    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>{children}</div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default ExpertiseCard