import {Link} from 'react-router-dom'
import classes from './CategoryAdmin.module.css';
export const CategoryAdmin = ({title='Category',image='https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=400%2C400&ssl=1'}) => {
return (
<Link to='store' className="flex flex-col gap-3 items-center">
<figure className={classes.category} style={{backgroundImage: `url(${image})`}}></figure>	
<h1>{ title }</h1>
</Link>
)
}