export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dad956bb9a2fbb0c4a94051',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ne29keec',
                  apiId: 'b9f0b846-f13e-4c3e-8057-0a38e6dedbc8'
                },
                {
                  buildHookId: '5dad956c389e5c62faaa3a52',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-p6di42qr',
                  apiId: '2b44eb1f-4839-4cf3-9f1a-6e8f23f61782'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MertcanAkardere/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-p6di42qr.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
