module.exports = {
    base: '/',
    title: 'Learn',
    description: '',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/logo.jpg',
        displayAllHeaders: true,
        lastUpdated: 'Last Updated',
        repo: 'segersian/learn',
        repoLabel: 'GitHub',
        smoothScroll: true,
        sidebarDepth: 2,
        nav: [
            {
                text: 'Home',
                ariaLabel: 'Go to home',
                link: 'https://www.segersian.com'
            },
            {
                text: 'Blog',
                ariaLabel: 'Go to blog',
                link: 'https://blog.segersian.com'
            }
        ],
        sidebar: [
            {
                title: 'Web Development',
                path: '/webdev/',
                collapsable: false,
                sidebarDepth: 1,
                children: []
            },
            {
                title: 'Cloud Development',
                path: '/cloud/',
                collapsable: false,
                sidebarDepth: 1,
                children: []
            }
        ]
    }
};