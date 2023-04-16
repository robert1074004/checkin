const userController = {
  signInPage: (req, res) => {
    res.render('signin')
  },
  settingPage: (req, res) => {
    res.render('setting')
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
