import {
    Container as ContainerTemplate
} from '../../components/template/style';
import React, {useEffect} from 'react';
import Link from 'next/link';

export default function Collections() {
    const Container = ContainerTemplate;
    const [collections, setCollections] = React.useState([]);
    const [keys, setKeys] = React.useState([]);

    useEffect(() => {
        if (localStorage.length == 0) {
            setCollections([...collections, "No Collection Yet"]);
        } else {
            for (let index = 0; index < Object.entries(localStorage).length; index++) {
                // console.log(JSON.parse(localStorage.getItem(localStorage.key(index))))
                if (localStorage.key(index) != "ally-supports-cache") {
                    var value = JSON.parse(localStorage.getItem(localStorage.key(index)));
                    if(Array.isArray(value)) {
                        setKeys([...keys, localStorage.key(index)]);
                        setCollections([...collections, value]);
                    }
                }
            }
        }
    }, []);

    function removeCollection(collection) {
        let arr = [...keys];
        arr.splice(arr.indexOf(collection));
        setKeys(arr);
        localStorage.removeItem(collection);
    }

    return(
        <Container>
            {collections.length != 0 && collections?.map(function(c, index) {
                return (
                    <div>
                        <div>
                            <Link href={`/collections/${keys[index]}`}>
                                <p key={index}>{keys[index]}</p>
                            </Link>
                        </div>
                        <button onClick={() => removeCollection(keys[index])}>Delete Collection</button>
                    </div>
                );
            })}
        </Container>
    )
}