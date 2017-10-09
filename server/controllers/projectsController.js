const express = require('express')

const projectsController = {};

projectsController.index = (req, res) => {
  const projects = [{
    title: 'Dashboard',
    slug: 'dashboard',
    tags: ['html', 'css', 'javascript', 'php'],
    date: '12/3/2017',
    img: 'https://cdn.dribbble.com/users/757683/screenshots/3824588/bnp2.jpg'
  },
  {
    title: 'Blog',
    slug: 'blog',
    tags: ['html', 'css', 'javascript', 'node'],
    date: '12/3/2017',
    img: 'https://cdn.dribbble.com/users/115310/screenshots/3829456/barrel-minimal_1x.jpg'
  },
  {
    title: 'Mobile App',
    slug: 'mobile-app',
    tags: ['IOS', 'Swift'],
    date: '12/3/2017',
    img: 'https://cdn.dribbble.com/users/257709/screenshots/3826004/800_600.png'
  },
  {
    title: 'Blue Landing Page',
    slug: 'blue-landing-page',
    tags: ['html', 'css', 'javascript', 'Ruby On Rails'],
    date: '12/3/2017',
    img: 'https://cdn.dribbble.com/users/757683/screenshots/3820272/dribb_chatlio3.jpg'
  },
  {
    title: 'Restaurant',
    slug: 'restaurant',
    tags: ['html', 'css', 'javascript', 'php'],
    date: '12/3/2017',
    img: 'https://cdn.dribbble.com/users/115310/screenshots/3809191/restaurant-barrel.jpg'
  },
  {
    title: 'SaaS',
    slug: 'saas',
    tags: ['html', 'css', 'javascript', 'php'],
    date: '12/3/2017',
    img: 'https://cdn.dribbble.com/users/207046/screenshots/3796280/d_1.jpg'
  }
]
  var testingVar = process.env.DB_USERNAME

  res.render('projects/index', {
    projects: projects,
    testingVar: testingVar
  })
}

projectsController.create = (req, res) => {
  res.render('projects/create')
}

projectsController.store = (req, res) => {
  res.send({
    saved: true
  })
}

projectsController.show = (req, res) => {
  res.render('projects/show')
}

projectsController.edit = (req, res) => {
  res.render('projects/edit')
}

projectsController.update = (req, res) => {
  res.send({
    updated: true
  })
}

projectsController.destroy = (req, res) => {
  res.send({
    deleted: true
  })
}

module.exports = projectsController
