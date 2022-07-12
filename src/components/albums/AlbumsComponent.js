import {useEffect, useState} from "react";
import {getAlbums} from "../../services";
import {AlbumComponent} from "./AlbumComponent";

const AlbumsComponent =() => {

    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        getAlbums().then(value => setAlbums([...value]))
    },[])
    return (
        <div>
            {
                albums.map(value => <AlbumComponent key={value.id} item={value}/>)
            }
        </div>
    );
}

export {AlbumsComponent}