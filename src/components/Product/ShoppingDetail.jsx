import { FaShieldAlt, FaUndo, FaLock } from "react-icons/fa"
import { motion } from "framer-motion"
import PropTypes from "prop-types"

const ShoppingDetail = ({ product }) => {
  const items = [
    { text: "Safe Payment", icon: <FaLock />, color: "green" },
    { text: "7 Days Return Policy", icon: <FaUndo />, color: "blue" },
    { text: "100% Authentic Foods", icon: <FaShieldAlt />, color: "red" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="p-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-center mb-4 py-2 border-b border-gray-100 last:border-0">
            <span className="mr-3 text-xl" style={{ color: item.color }}>
              {item.icon}
            </span>
            <span className="text-gray-700 font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

ShoppingDetail.propTypes = {
  product: PropTypes.object,
}

export default ShoppingDetail
