export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e13c3c845f0cc9b07cfc074',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5641veud',
                  apiId: 'c7f2aacb-858f-41ba-8775-ac5938f21063'
                },
                {
                  buildHookId: '5e13c3c8d200ccd594966a50',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hx1ijctk',
                  apiId: 'a7a4abdb-f02e-4209-a7e9-77dc888f809b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/celestialmedia/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hx1ijctk.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
