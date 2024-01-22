import Link from "next/link";
import { ProductProps } from "../../type";
import Image from "next/image";
import { urlFor } from "@/lib/sanityClient";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { AiOutlineShopping} from "react-icons/ai";

interface Props {
  product: ProductProps;

}

const Product = ({ product }: Props) => {
  return (
    <>
      <div className="w-full relative group border-[1px] shadow-gray-500 border-black hover:shadow-lg duration-200 overflow-hidden group">
        <div className="w-full h-80 flex items-center justify-center bg-white">
          <div>
            <Link href={`/`}>
              <Image
                src={urlFor(product?.image).url()}
                alt={product?.title}
                width={700}
                height={700}
                className="w-72 h-72 object-contain"
              />
            </Link>
            <div>
              <Link href={'/'}>
                <span><AiOutlineShopping /></span>
                Add to bag
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product