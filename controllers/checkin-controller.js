const { Check } = require('../models')
const checkinController = {
  getCheckin: (req, res) => {
    return Check.findAll({ where: { userId: req.user.id }, raw: true })
      .then(checks => {
        checks = checks.map(check => ({
          ...check,
          deadline: new Date(check.firstCheck.setHours(check.firstCheck.getHours() + 5)).toLocaleDateString('zh-Hans-CN'),
          firstCheck: check.firstCheck.toLocaleString('zh-Hans-CN'),
          lastCheck: check.lastCheck ? new Date(check.lastCheck.setHours(check.lastCheck.getHours() + 5)).toLocaleString('zh-Hans-CN') : '',
          progress: (check.hour / 8) * 100 > 100 ? 100 : (check.hour / 8) * 100
        }))
        res.render('checkin', { checks })
      })
  },
  checkin: (req, res, next) => {
    const now = new Date()
    now.setHours(now.getHours() - 5)
    const deadline = now.toLocaleDateString('zh-Hans-CN')
    if (now.getDay() === 0 || now.getDay() === 6) throw new Error('非工作日不能打卡!')
    return Check.findOrCreate({
      where: { deadline, userId: req.user.id },
      defaults: {
        deadline,
        userId: req.user.id,
        firstCheck: now
      }
    })
      .then((check) => {
        if (check[1]) {
          return check[0]
        } else {
          const hour = Math.floor((now - check[0].dataValues.firstCheck) / (1000 * 60 * 60))
          if (hour < 8) {
            return check[0].update({ lastCheck: now, hour, status: '缺勤' })
          }
          return check[0].update({ lastCheck: now, hour, status: '全勤' })
        }
      })
      .then(() => {
        req.flash('success_messages', '打卡成功!')
        res.redirect('back')
      })
      .catch(err => next(err))
  }
}

module.exports = checkinController
