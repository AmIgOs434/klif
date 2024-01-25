import { Gallery } from "./js/Carousel"
import { Gallery1 } from "./js/Carousel1"



export function Carous(props) {
    if (props.num === 2) {
        return <p>The given number is 2</p>
    } else {
        return  <Gallery items1={props.num} />
    }
 }
 export function Carous1(props) {
    if (props.num === 2) {
        return <p>The given number is 2</p>
    } else {
        return  <Gallery1 items1={props.num} />
    }
 }