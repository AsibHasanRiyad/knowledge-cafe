import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className=' bg-white mb-3 p-2 rounded-md'>
            <h1 className=' text-xl font-light'>{title}</h1>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;