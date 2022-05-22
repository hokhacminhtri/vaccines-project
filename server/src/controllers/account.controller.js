const bcrypt = require('bcrypt');
const AdminAccount = require('../models/mysql/admin-accounts.model');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXP } = require('../constants');

exports.postLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const account = await AdminAccount.findOne({
      raw: true,
      where: { username },
    });
    if (account) {
      const { password: hashPwd } = account;

      const isMatch = await bcrypt.compare(password, hashPwd);
      if (isMatch) {
        const token = jwt.sign(
          {
            username,
            role: account.role,
            accountId: account.adminId,
            exp: Math.floor(Date.now() / 1000) + JWT_EXP,
          },
          JWT_SECRET,
        );
        return res.status(200).json({ jwt: token });
      }

      return res.status(400).json({ message: 'Mật khẩu không chính xác' });
    }

    return res.status(404).json({ message: 'Tài khoản không tồn tại' });
  } catch (error) {
    console.error('Function postLogin Error: ', error);
    return res.status(500).json();
  }
};

exports.getCheckToken = async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) return res.status(400);
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded) {
      return res.status(200).json({ username: decoded.username });
    }
  } catch (error) {
    console.error('Function checkToken Error: ', error);
    return res.status(400).json();
  }
};
