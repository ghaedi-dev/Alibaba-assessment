import PropTypes from 'prop-types';
import { SearchIcon } from '../../assets';

function SearchBox({ search, onChange, placeholder }) {
    return (
        <div className="inline-flex w-full">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input type="search" value={search} onChange={({ target }) => onChange && onChange(target.value)} id="default-search" className="block outline-offset-0 p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
            </div>
        </div>
    )
}

SearchBox.propTypes = {
    search: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
};

export default SearchBox;