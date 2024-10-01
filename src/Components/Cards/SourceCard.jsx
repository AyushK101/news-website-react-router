import PropTypes from "prop-types";

// component design from https://chatgpt.com/c/66fbe105-adc0-8007-b04c-66f90d01f8c2

function SourceCard({ name, description, url, category, language, country }) {
  return (
    <>
      
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 m-4">
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{name}</h2>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {category}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {language.toUpperCase()}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {country.toUpperCase()}
          </span>
        </div>
        <div className="px-6 py-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
}

SourceCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default SourceCard;
