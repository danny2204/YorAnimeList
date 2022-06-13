import styled from '@emotion/styled'
import Link from 'next/link'
import {
    Card as Cards
} from '../template/style'

export default function Card(props) {

    const {
        image,
        title,
        season,
        episode,
        id,
        ...attr
    } = props;

    const Card = Cards;

    const Image = styled.img`
        object-fit: cover;
        width: 15vw;
        height: 20vw;
    `;

    const Title = styled.h5`
        margin: 0;
        text-align: center;
        max-width: 14vw;
        word-wrap: break-word;
    `;

    return(
        <Link href = {{
            pathname: '/details/[id]',
            query: {id: id}
        }}>
            <Card>
                <Image src={image} />
                <Title>{title}</Title>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                    <p>Season : {season}</p>
                    <p>Episodes : {episode} </p>
                </div>
                {attr.removeButton}
            </Card>
        </Link>
    )
}