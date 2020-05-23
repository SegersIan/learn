module.exports = {
    base: '/',
    title: 'Learn',
    description: '',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/logo.jpg',
        displayAllHeaders: false,
        lastUpdated: 'Last Updated',
        repo: 'segersian/learn',
        repoLabel: 'GitHub',
        smoothScroll: true,
        //sidebarDepth: 1,
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
                title: 'Introduction',
                path: '/introduction/',
                collapsable: false,
                sidebarDepth: 0,
                children: []
            },
            /*
            {
                title: 'General Development',
                path: '/general-dev/',
                collapsable: false,
                sidebarDepth: 1,
                children: []
            },
            {
                title: 'Web Development',
                path: '/web-dev/',
                collapsable: false,
                sidebarDepth: 1,
                children: []
            },*/
            {
                title: 'Cloud Development',
                path: '/cloud-dev/',
                collapsable: false,
                sidebarDepth: 1,
                children: []
            }
        ]
    }
};