import { ReactNode } from "react"

export interface ExpertiseCardProps {
    title: string,
    text: string,
    children: ReactNode
}

const ExpertiseCard = (props: ExpertiseCardProps) => {
    const { children, title, text } = props

    return <div>
        {children}
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
}

export default ExpertiseCard