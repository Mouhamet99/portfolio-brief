module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            'title': ['"Roboto Mono"','ui-monospace'],
            'paragraph': ['Poppins', 'sans-serif'],
        }
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
            fontSize: ['active', 'hover'],
            width: ['active', 'hover'],
        },
    },
    plugins: [],
}