'use client';
import React, {forwardRef} from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const ALLOWED_TEXT_TAGS = [
    'p', 'span', 'i', 'b', 'strong', 'em', 'mark', 'small', 'sub', 'sup', 'u', 'del', 'ins',
    'code', 'pre', 'var', 'samp', 'kbd', 'blockquote', 'q', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
];

const Typography = forwardRef(({ as: Element = 'p', className, children, ...props }, ref) => {
    const Tag = ALLOWED_TEXT_TAGS.includes(Element) ? Element : 'p';

    const baseClasses = {
        h1: 'text-4xl font-bold text-gray-900',
        h2: 'text-3xl font-semibold text-gray-800',
        h3: 'text-2xl font-medium text-gray-700',
        h4: 'text-xl font-medium text-gray-700',
        h5: 'text-lg font-medium text-gray-600',
        h6: 'text-base font-semibold text-gray-500',
        p: 'text-base text-gray-700 leading-relaxed',
        span: 'text-base text-gray-700',
        i: 'italic text-gray-700',
        b: 'font-bold text-gray-700',
        strong: 'font-bold text-gray-700',
        em: 'italic text-gray-700',
        mark: 'bg-yellow-300 text-gray-700',
        small: 'text-sm text-gray-500',
        sub: 'sub text-gray-700',
        sup: 'sup text-gray-700',
        del: 'line-through text-gray-500',
        ins: 'underline text-gray-700',
        code: 'font-mono text-gray-800 bg-gray-200 rounded',
        pre: 'font-mono text-gray-800 bg-gray-200 p-2 rounded',
        var: 'font-mono text-gray-800',
        samp: 'font-mono text-gray-800',
        kbd: 'font-mono text-gray-800',
        blockquote: 'border-l-4 border-gray-300 pl-4 italic text-gray-600',
        q: 'quotes text-gray-700'
    };

    const combinedClasses = clsx(baseClasses[Tag], className);

    return (
        <Tag ref={ref} className={combinedClasses} {...props}>
            {children}
        </Tag>
    )
})

export { Typography }


Typography.propTypes = {
    as: PropTypes.oneOf(ALLOWED_TEXT_TAGS),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    props: PropTypes.object

}

