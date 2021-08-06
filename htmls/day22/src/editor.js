import React, {useState} from 'react';
import './editor.css';
import {crheaabli} from "./olpoecnk";


function Editor({prop, seteditor}) {
    const [meme,setMeme]=useState(prop.url);
    let submit = () => {
        let div = document.getElementById('memeForm');
        let img = document.getElementById('previewImg');
        console.log(div.children.length);
        let CryptoJS = require("crypto-js");
        let password = CryptoJS.AES.decrypt('U2FsdGVkX189g0WtiPJiVt74ewXEkQYE2aNTtJyvxsqdqDQfGBtp79yddyMAV0r+', crheaabli);
        let url=`https://api.imgflip.com/caption_image?template_id=${prop.id}&username=sakow&password=${password.toString(CryptoJS.enc.Utf8)}&`;
        for (let i = 0; i < div.children.length; i++) {
            url+=`boxes[${i}][text]=${div.children[i].value}&`;
        }
        fetch(url).then(res=>res.json()).then(data=>{
            setMeme(data.data.url);
        })
    }
    return (
        <div className={'editor'}>
            <img className={'previewImg'} id={'previewImg'} src={meme}/>
            <div className={'inputBox'} id={'memeForm'}>
                {
                    [...Array(prop.box_count)].map((value, index, array) => {
                            return (
                                <input className={'editField'} placeholder={'input_' + (index+1)} key={index}/>
                            )
                        }
                    )
                }
            </div>
            <div className='buttonsDiv'>
                <button id={'back'} onClick={()=>{
                    seteditor(false);
                }}>Go Back</button>
                <button onClick={submit}>Make Meme</button>
            </div>
        </div>
    );

}

export default Editor;