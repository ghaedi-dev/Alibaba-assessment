import PropTypes from 'prop-types';

function Button({ children, className, type, ...rest }) {
    return (
        <button {...rest} type={type} className={`font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:text-white ${className ?? ""}`}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
    type: "button"
}

export default Button;