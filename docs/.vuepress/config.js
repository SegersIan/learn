module.exports = {
    base: '/',
    title: 'Learn.SegersIan.com',
    description: '',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/assets/img/logo.png',
        displayAllHeaders: true,
        lastUpdated: 'Last Updated',
        repo: 'segersian/learn',
        repoLabel: 'GitHub',
        smoothScroll: true,
        sidebarDepth: 2,
        nav: [
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        sidebar: [
            {
                title: 'Cloud',   // required
                path: '/cloud/',      // optional, link of the title, which should be an absolute path and must exist
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1,    // optional, defaults to 1
                children: []
            }
        ]
    }
};