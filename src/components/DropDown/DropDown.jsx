import PropTypes from 'prop-types';

function Dropdown({ children, onChange, ...rest }) {
    return (
        <div className="relative">
            <select {...rest} onChange={(e) => onChange && onChange(e.target.value, e)} className="block outline-offset-0 p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {children}
            </select>
        </div>
    );
}

Dropdown.propTypes = {
    children: PropTypes.node,
    onChange: PropTypes.func
};

export default Dropdown;