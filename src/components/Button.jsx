import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button-styles.css';


function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest // accept other props
}) {

    const btnClass = classNames(
        rest.className, // accept other class
        {
            'rounded-full': rounded,
            'bg-white': outline,

            'primary-outline-btn': primary && outline,
            'secondary-outline-btn': secondary && outline,
            'success-outline-btn': success && outline,
            'warning-outline-btn': warning && outline,
            'danger-outline-btn': danger && outline,

            'primary-btn': primary,
            'secondary-btn': secondary,
            'success-btn': success,
            'warning-btn': warning,
            'danger-btn': danger,
        }
    );

    return (
        <button {...rest} className={`button ${btnClass}`}>
            {children}
        </button>
    )
}

// check if props repeat/isRequire
Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger, outline, rounded, }) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger);
        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger can be true.');
        }
    },
};


export default Button;
