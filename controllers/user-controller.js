const bcrypt = require('bcryptjs')
const { User } = require('../models')
const userController = {
  signInPage: (req, res) => {
    res.render('signin')
  },
  settingPage: (req, res) => {
    res.render('setting')
  },
  setting: (req, res) => {
    const password = req.body.password
    return bcrypt.genSalt(10).then(salt => {
      return Promise.all([bcrypt.hash(password, salt), User.findByPk(req.user.id)])
    }).then(([hash, user]) => {
      return user.update({ password: hash })
    }).then(() => {
      req.flash('success_messages', '修改密碼成功')
      res.redirect('back')
    })
  },
  signIn: (req, res) => {
    req.flash('success_messages', '成功登入!')
    res.redirect('/checkin')
  },
  logout: (req, res) => {
    req.flash('success_messages', '登出成功!')
    req.logout()
    res.redirect('/signin')
  }
}

module.exports = userController
