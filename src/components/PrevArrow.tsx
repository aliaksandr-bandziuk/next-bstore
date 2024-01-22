import { FaLongArrowAltLeft } from 'react-icons/fa';

const PrevArrow = (props: any) => {

  const { onClick } = props;

  return (
    <div
      onClick={onClick}
            className="w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 flex items-center justify-center cursor-pointer z-10 absolute top-[35%] left-2"
    >
      <span className='text-xl'>
        <FaLongArrowAltLeft />
      </span>
    </div>
  )
}

export default PrevArrow