import { Link } from 'react-router-dom';
import styles from './card.module.css'

const Card = ({title, id}) => {

    return(
        <div className={styles['card-container']}>
            <span>Quiz Title: {title}</span> <Link to={`/editquiz/${id}`}><span>Edit</span></Link>
        </div>
    )
}

export default Card;