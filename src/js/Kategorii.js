import AliceCarousel from "react-alice-carousel";
import { delKategorii1, getKomplexpredlinfodesc, putKategorii, putKategorii1 } from "../https/deviceAPI";
import { useEffect } from "react";
import useState from 'react-usestateref'
import $ from 'jquery'
import {Form} from "react-bootstrap";
export const Kategorii1 = ({i,get}) => {
    const [svg1,setsvg1,setsvg1Ref] = useState(i.svg)
    const [svg,setsvg,setsvgRef] = useState(i.svg)
    const [title,settitle,settitleRef] = useState(i.title)
    const [description,setdescription,setdescriptionRef] = useState(i.description)
    


    const del_kateg = async() => {
          await delKategorii1(i.id)
        $(`.input_211${i.id}`).addClass('ddd_nnn')
        
    }
    const function1 = async() => {
        $(`.input_${i.id}`).toggleClass('input_active')
        $(`.input_1${i.id}`).toggleClass('input_1_active')
    }
    const function2 = async() => {
        const formData = new FormData()
        formData.append('id', i.id)
        formData.append('title', settitleRef.current)
        formData.append('description', setdescriptionRef.current)

if(setsvgRef.current==setsvg1Ref.current){
    const kat = await putKategorii1(formData)
}else{
    formData.append('svg', setsvgRef.current)
    const kat = await putKategorii(formData)
}
       

   get()
    }
    const function3= async() => {
        const formData = new FormData()
        formData.append('id', i.id)
        formData.append('svg', setsvgRef.current)
        formData.append('title', settitleRef.current)
        formData.append('description', setdescriptionRef.current)
   const kat = await putKategorii(formData)

   get()
    }
    const selectFile = e => {
        setsvg(e.target.files[0])
    }

    return (
<div class= {`  col-12 col-xl-6 top2 input_211${i.id}`} >
<div class="features__item">
<div>
<img class={`input_1${i.id} reveal fill pd fade-bottom1`}  src={process.env.REACT_APP_API_URL + setsvgRef.current}/>

</div>
<input onChange={selectFile} placeholder={'Иконка'} type="file" class={`input_${i.id} file`} />
{/* <Form.Control
class={`input_${i.id} file`}
                    
                        type="file"
                        onChange={selectFile}
                    /> */}
  <div class="features__item-content">
    <div class='f_d'>

    <div class={`input_1${i.id} reveal fade-right1 features__item-title aos-init aos-animate font color_new`} data-aos="fade-left" data-aos-delay="0"> {settitleRef.current}
    </div>
    <input class={`input_ input_${i.id}`} defaultValue={i.title} onChange={ e => settitle(e.target.value)}/>
    <svg class='mar_lf invize' onClick={function1} viewBox="0 0 24 24" width='30px' cursor='pointer' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    <svg onClick={function2} width='47px' class='pd_f invize' viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" fill="rgb(0,0,0)" data-name="Layer 2"><path d="m1421.3 1539.6h-689.5c-107.4 0-194.8-87.4-194.8-194.9v-689.4c0-107.5 87.4-194.9 194.8-194.9h689.5c107.4 0 194.8 87.4 194.8 194.9v689.4c0 107.5-87.4 194.9-194.8 194.9zm-689.5-1009.2a124.9 124.9 0 0 0 -124.8 124.9v689.4a124.9 124.9 0 0 0 124.8 124.9h689.5c68.8 0 124.8-56 124.8-124.9v-689.4c0-68.9-56-124.9-124.8-124.9z"/><path d="m1023.7 1153a35.1 35.1 0 0 1 -24.7-10.2l-130.5-130.5a35 35 0 0 1 49.5-49.5l105.7 105.7 211.4-211.3a35 35 0 0 1 49.5 49.5l-236.1 236.1a35.4 35.4 0 0 1 -24.8 10.2z"/></g></svg> 
    <svg onClick={del_kateg}   class='del_krest invize' fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cross-checkbox</title> <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-2.496-1.76-4.256t-4.224-1.76h-20q-2.496 0-4.256 1.76t-1.76 4.256v20zM4 26.016v-20q0-0.832 0.576-1.408t1.44-0.608h20q0.8 0 1.408 0.608t0.576 1.408v20q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408zM9.76 20.256q0 0.832 0.576 1.408t1.44 0.608 1.408-0.608l2.816-2.816 2.816 2.816q0.576 0.608 1.408 0.608t1.44-0.608 0.576-1.408-0.576-1.408l-2.848-2.848 2.848-2.816q0.576-0.576 0.576-1.408t-0.576-1.408-1.44-0.608-1.408 0.608l-2.816 2.816-2.816-2.816q-0.576-0.608-1.408-0.608t-1.44 0.608-0.576 1.408 0.576 1.408l2.848 2.816-2.848 2.848q-0.576 0.576-0.576 1.408z"></path> </g></svg>
   </div>

    <div class={`input_1${i.id} reveal input_1 fade-right features__item-text aos-init aos-animate color_new_2"`} data-aos="fade-left" data-aos-delay="100">   {setdescriptionRef.current}</div>
    

    <textarea class={`input_ input_${i.id}`} name="Text1" cols="40" defaultValue={i.description} onChange={ e => setdescription(e.target.value)} rows="5"></textarea>
  </div>
</div>
</div>
    )
}