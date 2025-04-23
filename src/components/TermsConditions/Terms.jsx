import PropTypes from "prop-types"

const Terms = ({ terms }) => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Terms & Conditions</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Agreement With You
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Last updated: April 23, 2023</p>
        </div>

        <div className="prose prose-lg max-w-none">
          {terms.map((section, index) => (
            <div key={index} className="mb-8">
              {section.title && <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>}

              {section.paragraphs &&
                section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 mb-4">
                    {paragraph}
                  </p>
                ))}

              {section.items && (
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700">
                      <span className="font-medium">{item.number}</span> {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

Terms.propTypes = {
  terms: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      paragraphs: PropTypes.arrayOf(PropTypes.string),
      items: PropTypes.arrayOf(
        PropTypes.shape({
          number: PropTypes.string,
          text: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
}

export default Terms
