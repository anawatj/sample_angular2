var sequelize = new Sequelize('sample_angular2', 'root', '1234', {
  // mysql is the default dialect, but you know...
  // for demo purporses we are defining it nevertheless :)
  // so: we want mysql!
  dialect: 'mysql'
})