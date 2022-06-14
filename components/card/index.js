/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import {css} from '@emotion/react'
import Link from 'next/link'
import {
    Card as Cards, CardBody, Image, Title
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
                    padding: 1rem 1.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 20%;
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