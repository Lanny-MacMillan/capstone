import {useState,useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import Button from '@mui/material/Button';
import { useSpeechSynthesis } from 'react-speech-kit';



function Translate() {
    const[options,setOptions]=useState([])
    const [to, setTo]=useState("en");
    const [from, setFrom]=useState("en");
    const [input, setInput]=useState("");
    const [output, setOutput]=useState("");

    //=============== TEXT TO SPEECH ============================
    const { speak } = useSpeechSynthesis();

    const translate=()=>{
        const params=new URLSearchParams();
        params.append('q',input);
        params.append('source',from);
        params.append('target',to);
        params.append('api_key','xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
        

        axios.post('https://libretranslate.de/translate',params,{
        headers:{'accept':'application/json',
            'Content-Type':'application/x-www-form-urlencoded'},
            }).then(res=>{
        // console.log(res.data)
        setOutput(res.data.translatedText)
        })
    };
    useEffect(() => {
        axios.get("https://libretranslate.de/languages",{headers:{'accept':'application/json'}}).then(res=>{
        // console.log(res)
        setOptions(res.data)
        })

    })
    return (
        <>
        <div className='container'>
        <h2>Translator will yield the best results with short, direct sentences.</h2>
        </div>
        <div className="translate">
        <div>
        From ({from}):
        <select onChange={e=>setFrom(e.target.value)}>
        {options.map(opt=><option key={opt.code} value={opt.code}>{opt.name}</option>)}
        
        </select>
        To({to}):
        <select onChange={e=>setTo(e.target.value)}>
        {options.map(opt=><option key={opt.code} value={opt.code}>{opt.name}</option>)}
        
        </select>
        </div>
        <br/>
        <div>
        <textarea cols='50' rows='8' onInput={(e)=>setInput(e.target.value)}></textarea>
        </div>
        <br/>
        <div>
        <textarea cols='50' rows='8' value={output}

        ></textarea>
        
        </div>
        <br/>
        <div>
        <Button variant="contained" onClick={e=>translate()}>Translate</Button>
        <Button variant="contained"  onClick={() => speak({ text: output })}>Speech</Button>
        </div>

        </div>
        </>
    );
}

export default Translate;