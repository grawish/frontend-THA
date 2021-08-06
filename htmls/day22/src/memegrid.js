import React, {useEffect, useState} from "react";
import './memegrid.css';

function MemeGrid({setprop, seteditor}) {
    const [memes,setMemes]=useState([]);
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes').then(
            response => response.json())
            .then(resp=> {
                setMemes(resp.data.memes);

            });
    }, []);

        return (
            <div className={'grid'}>
                {
                    memes.map(memes=>{
                        return(
                            <div key={memes.id} className={'meme'} onClick={()=>{
                                let prop = memes;
                                setprop(prop);
                                seteditor(true)
                            }}>
                                <div className={'memeimg'} style={{backgroundImage: `url(${memes.url})`}}/>
                            </div>
                        )
                    },[])
                }
            </div>
        );
}

export default MemeGrid;