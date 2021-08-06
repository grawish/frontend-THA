import './App.css';
import MemeGrid from "./memegrid";
import {useState} from "react";
import Editor from "./editor";


function App() {
    const [prop,setProp] = useState({});
    const [editor,setEditor]=useState(false);
    return (
        <>
            <h1>Meme Generator</h1>
            {
                editor?<Editor prop={{url: prop.url, id: prop.id, box_count: prop.box_count}} seteditor={setEditor} />:<MemeGrid setprop={setProp} seteditor={setEditor}/>

            }
        </>
    );
}

export default App;
