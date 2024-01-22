import bannerImg from "@/assets/banner1.webp"
import Image from "next/image"

const HomeBanner = () => {
  return (
    <div>
      <Image
        src={bannerImg}
        alt="special offer"
        className="w-full h-96 object-cover"
      />
    </div>
  )
}

export default HomeBanner