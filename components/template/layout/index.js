/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import 
    Card
from "../../card";
import { DeleteButton } from "../style";
import {css} from "@emotion/react"

export default function Layout(props) {
    const {
        data,
        isPage,
        action
    } = props;
    
    const style = {
        margin: 0
    }

    const Containers = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `;

    return(
        <Containers>
            {isPage == true && data != null ? data?.Page.media.map(function(d, idx) {
                return (<Card style={{margin: "1rem 1rem"}} key={idx}
                  season={d.seasonInt} episode={d.episodes}
                  title={d.title.romaji} image={d.coverImage.large}
                  id={d.id}>{d.title.romaji}</Card>)
              }) : ""}
            {isPage == false && data != null && data.map(function(d, idx) {
                return (
                    <div css={css`
                        padding: 2rem;
                    `}>
                        <Card
                            style={style}
                            key={idx}
                            season={d.Media.seasonInt} episode={d.Media.episodes}
                            title={d.Media.title.romaji} image={d.Media.coverImage.large}
                            id={d.Media.id}>
                            {d.Media.title.romaji}
                        </Card>
                        <DeleteButton onClick={() => action(d.Media.id)}>Remove From Collection</DeleteButton>
                    </div>
                  )
              })}
        </Containers>
    )
}