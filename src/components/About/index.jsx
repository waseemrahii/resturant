import { FaCheckCircle } from "react-icons/fa"

const About = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A Better Way to Order Food
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            6amMart is a revolutionary food delivery platform connecting you with your favorite restaurants and food
            items.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <FaCheckCircle className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Fast Delivery</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We ensure your food arrives hot and fresh with our lightning-fast delivery network.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <FaCheckCircle className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Quality Restaurants</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                We partner with only the best restaurants to ensure quality food every time.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <FaCheckCircle className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Easy Ordering</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our intuitive platform makes ordering food as simple as a few taps.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <FaCheckCircle className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">24/7 Support</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our customer support team is available around the clock to assist you.
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-20">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Story</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How We Started
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>
              Founded in 2020, 6amMart began with a simple mission: to make food delivery more accessible, affordable,
              and enjoyable for everyone. What started as a small operation in one city has now grown into a nationwide
              service connecting thousands of restaurants with hungry customers.
            </p>
            <p>
              Our team of dedicated professionals works tirelessly to improve our platform, add new features, and expand
              our restaurant network. We believe in the power of good food to bring people together, and we're committed
              to making that experience as seamless as possible.
            </p>
            <p>
              Today, 6amMart is more than just a food delivery  a community of food lovers, chefs, delivery
              partners, and restaurant owners all united by a passion for great food and exceptional service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
