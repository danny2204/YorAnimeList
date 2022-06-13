import styled from "@emotion/styled";
import 
    Card
from "../../card";

export default function Layout(props) {
    const {
        data,
        isPage,
        action
    } = props;
    
    const Containers = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `;

    return(
        <Containers>
            {isPage == true && data != null ? data?.Page.media.map(function(d, idx) {
                return (<Card key={idx}
                  season={d.seasonInt} episode={d.episodes}
                  title={d.title.romaji} image={d.coverImage.large}
                  id={d.id}>{d.title.romaji}</Card>)
              }) : ""}
            {isPage == false && data != null && data.map(function(d, idx) {
                return (<Card key={idx}
                  season={d.Media.seasonInt} episode={d.Media.episodes}
                  title={d.Media.title.romaji} image={d.Media.coverImage.large}
                  id={d.Media.id} 
                  removeButton={
                    <button onClick={() => action(d.Media.id)}>Remove From Collection</button>}
                    >
                      {d.Media.title.romaji}
                  </Card>)
              })}
        </Containers>
    )
}