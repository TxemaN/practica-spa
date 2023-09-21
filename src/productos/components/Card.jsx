import {Link,NavLink} from 'react-router-dom'

const {title,price,rating,thumbnail,id = 5} =  FETCHDUMMY

 

export const card = () => {
  return (
    <article>
        <div>
            <img src="" alt="" />
        </div>
        <p>TITLE</p>
        <p>price</p>
        <p>rating</p>
        <Link to={`producto/${id}`}> Mas Info </Link>
        


    </article>
  )
}
