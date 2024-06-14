import { FaCircle, FaRegCircle } from 'react-icons/fa';

export default function ({isFull,onClickVisible}) {
    return (
        <li className='bullet'  onClick={onClickVisible}>{isFull ? <FaCircle/> : <FaRegCircle/>}</li>
    )
}