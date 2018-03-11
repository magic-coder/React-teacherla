const utils = require('utility')

const md5Pwd = function (pwd) {
  const salt = 'XIT_Tla_teacher_pwd_$xitjisuanji#'
  return utils.md5(utils.md5(pwd+salt))
};

module.exports = md5Pwd;
