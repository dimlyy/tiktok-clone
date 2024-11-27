import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ to, href, disabled,rounded,className, leftIcon, rightIcon, children,text,primary,outline,small, large, onClick, ...passProps}) {
    let Component = 'button';
    const props = {
        onClick,
        ...passProps,
    }

    if(disabled){
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    if (to) {
        props.to = to
        Component = Link;
    }
    else if (href) {
        props.href = href
        Component = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]: className,
    })

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;