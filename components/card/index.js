import styled from '@emotion/styled'
import Link from 'next/link'

export default function Card(props) {

    const {
        image,
        title,
        season,
        episode,
        id
    } = props;

    const Card = styled.div`
        flex-direction: column;
        margin: 1vh 1vw;
        width: fit-content;
        height: 55vh;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)
    `;

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
            </Card>
        </Link>
    )
}