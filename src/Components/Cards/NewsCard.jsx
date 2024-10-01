
import PropTypes from 'prop-types';

// Utility function to format the date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const NewsCard = ({ author, title, description, url, urlToImage, publishedAt, source }) => {
    
  return (
    <div className="max-w-lg mx-auto my-6 bg-white rounded-lg shadow-lg overflow-hidden">
      {
        <img src={urlToImage} alt="News" className="w-full h-48 object-cover" />
      }
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-sm text-gray-500"><strong>Author:</strong> {author || 'Unknown'}</p>
        <p className="text-sm text-gray-500"><strong>Published:</strong> {formatDate(publishedAt)}</p>
        <p className="text-sm text-gray-500"><strong>Source:</strong> {source?.name || 'Unknown'}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

// Prop validation using PropTypes
NewsCard.propTypes = {
  author: PropTypes.string,                     // author is optional and should be a string
  title: PropTypes.string.isRequired,           // title is required and should be a string
  description: PropTypes.string,     // description is required and should be a string
  url: PropTypes.string.isRequired,             // url is required and should be a string
  urlToImage: PropTypes.string,                   // urlToImg is optional and should be a string
  publishedAt: PropTypes.string.isRequired,     // publishedAt is required and should be a string (formatted date)
  source: PropTypes.shape({                     // source is an object with a name property
    name: PropTypes.string.isRequired,          // source.name is required and should be a string
  }).isRequired,
};

export default NewsCard;
