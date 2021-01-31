[![Netlify Status](https://api.netlify.com/api/v1/badges/ab9ff748-0d4f-468f-a2ad-bbe1d87e8fd1/deploy-status)](https://app.netlify.com/sites/priceless-nightingale-d4a3e/deploys)

[![Website](https://img.shields.io/website?label=anahveronica.com&style=for-the-badge&url=http%3A%2F%2Fanahveronica.com)](http://anahveronica.com)


## setup

    * npm install 
    * gatsby develop

## Usage


* Add your blog md  file to posts directory and include this in the begining. 
    ``` 
    ---
        title: ' '
        tags: [""]
        published: true
        date: '2020-01-06'
    --- 
    ``` 


Link to the [Gatsby starter pack](https://github.com/willjw3/gatsby-starter-developer-diary)  



## Directory Tree


    ├── LICENSE
    ├── README.md
    ├── config.js
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── package-lock.json
    ├── package.json
    ├── posts
    │   ├── Ensemble_methods.md
    │   └── Types\ of\ Distance\ Metrics\ and\ Using\ User\ Defined\ Distance\ metrics\ in\ Scikit�\200\231s\ KNN\ Algorithm.md
    ├── src
    │   ├── components
    │   │   ├── CustomShareBlock.js
    │   │   ├── header
    │   │   │   ├── MobileBio.js
    │   │   │   ├── MobilePageLinks.js
    │   │   │   ├── MobileSocialLinks.js
    │   │   │   ├── SocialLinks.js
    │   │   │   ├── header.css
    │   │   │   └── header.js
    │   │   ├── image.js
    │   │   ├── layout.css
    │   │   ├── layout.js
    │   │   ├── seo.js
    │   │   ├── sidebar
    │   │   │   ├── Bio.js
    │   │   │   ├── Sidebar.js
    │   │   │   ├── SocialLinks.js
    │   │   │   ├── TechTags.js
    │   │   │   └── sidebar.css
    │   │   └── tags
    │   │       ├── TechTag.js
    │   │       └── tags.css
    │   ├── images
    │   │   ├── gatsby-icon.png
    │   │   └── willjw3.jpeg
    │   ├── pages
    │   │   ├── 404.js
    │   │   ├── about.js
    │   │   ├── archive.js
    │   │   ├── gatsby.code-workspace
    │   │   ├── index.css
    │   │   └── index.js
    │   └── templates
    │       ├── blog-post.css
    │       ├── blog-post.js
    │       ├── codeblock.css
    │       ├── post-list.js
    │       └── tag.js
    └── static
        └── admin
            └── config.yml