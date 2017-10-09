const express = require('express')

const blogController = {};

blogController.index = (req, res) => {
  res.render('blog/index')
}

blogController.show = (req, res) => {
  res.render('blog/show')
}

module.exports = blogController
