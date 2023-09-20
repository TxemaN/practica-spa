import {link,NavLink} from 'react-router-dom'

const {title,price,rating,thumbnail,id} =  FETCHDUMMY


export const card = () => {
  return (
    <article>
        <div>
            <img src="" alt="" />
        </div>
        <p>TITLE</p>
        <p>price</p>
        <p>rating</p>
        <NavLink>Saiba Mas</NavLink>
        


    </article>
  )
}
