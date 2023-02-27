import * as Cowsay from "cowsay"
import axios from "axios"

export const homePage = (req, res, next)=>{
    res.send('Hello world')
}

export const cowsay = async (req,res,next) =>{
    const quouteRequest  = await axios.get('https://api.quotable.io/random')
    const {content} = quouteRequest.data
    const text = Cowsay.say({ text: content });
    const style= `
    margin: auto;
    width: 99vw;
    height: 99vh;
    display: flex;
    align-items: center;
    justify-content: center;
    `

    res.send(`
    <pre style='${style}'>
        <span>
            ${text}
        </span>
    </pre>`
    )
}