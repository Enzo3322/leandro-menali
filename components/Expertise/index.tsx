/* eslint-disable react/no-children-prop */
import ExpertiseCard, { ExpertiseCardProps } from "./Card"

const ExpertiseCardCarousel = (props: { data: ExpertiseCardProps[] }) => {
    const { data } = props

    if (!data) return null

    return <div>
        {data.map((card, i) => <ExpertiseCard children={<p>Ovo</p>} text="" title="" key={i} />)}
    </div>
}

export default ExpertiseCardCarousel