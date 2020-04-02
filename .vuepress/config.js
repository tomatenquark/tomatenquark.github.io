// Theme API.
const glob = require('glob')
// const getSidebar = require('./sidebar')

const title = 'Tomatenquark'
const description = 'A community homage to Cube2: Sauerbraten'
const ogprefix = 'og: http://ogp.me/ns#'

const getChildren = (parentPath) => {
    return glob
      .sync(parentPath + '/*.md')
      .map(path => {
        // remove "parentPath" and ".md"
        // remove README
        if (path.endsWith('README')) {
          path = path.slice(0, -6)
        }
        return `/${path}`.replace('.md', '').replace('index', '')
      })
      .sort()
}

const config = {
    title,
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
        ['meta', { prefix: ogprefix, property: 'og:type', content: 'article' }],
        ['meta', { prefix: ogprefix, property: 'og:url', content: 'https://tomatenquark.org' }],
        ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
        [
            'meta',
            {
                prefix: ogprefix,
                property: 'og:image',
                content: 'https://tomatenquark.org/images/tomatenquark.png',
            },
        ],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ],
    themeConfig: {
        sidebarDepth: 4,
        nav: [
            {
                text: 'Wiki',
                link: '/PROJECT'
            },
        ],
        sidebar: [
            {
                title: 'Project',
                path: '/PROJECT',
            },
            {
                title: 'Servers',
                path: '/SERVERS'
            },
            {
                title: 'Contributing',
                path: '/CONTRIBUTING'
            },
            {
                collapsable: false,
                title: '🎮 Game',
                children: getChildren('game'),
            },
            {
                collapsable: false,
                title: '📦 Media',
                children: getChildren('media'),
            },
            {
                collapsable: false,
                title: '🛢Development',
                children: getChildren('development')
            }
        ]
    }
}

console.log(JSON.stringify(config.themeConfig.sidebar, null, 4))
module.exports = config
