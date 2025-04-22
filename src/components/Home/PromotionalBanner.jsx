import { Link } from "react-router-dom"

const PromotionalBanner = () => {
  return (
    <div className="w-full max-w-12xl mx-auto my-10 bg-[#e8f5f0] rounded-md overflow-hidden">

    <div className="w-[90%] max-w-7xl mx-auto my-8">
      <Link to="/offers">
        <img
          src="/banner.png"
          alt="Discount up to 20% for Asian foods"
          className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        />
      </Link>
    </div>
    </div>
  )
}

export default PromotionalBanner
