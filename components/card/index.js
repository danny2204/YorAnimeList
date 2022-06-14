/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import {css} from '@emotion/react'
import Link from 'next/link'
import {
    Card as Cards, CardBody
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
        width: 100%;
        height: 50vh;
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
            <Card css={css`
                ${attr.style}
            `}>
                <Image src={image} />
                <div css={css`
                    padding: 0 1.5rem;
                `}>
                    <Title>{title}</Title>
                    <CardBody>
                        <p>Season : {season}</p>
                        <p>Episodes : {episode} </p>
                    </CardBody>
                </div>
                {attr.removeButton}
            </Card>
        </Link>
    )
}