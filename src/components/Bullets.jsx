import { FaCircle, FaRegCircle } from 'react-icons/fa';

export default function ({isFull,onClickVisible}) {
    return (
        <div onClick={onClickVisible}>{isFull ? <FaCircle/> : <FaRegCircle/>}</div>
    )
}