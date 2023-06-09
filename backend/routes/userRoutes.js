const userRouter = require('express').Router();
const {
  login,
  getOneUser,
  createUser,
  getAllUsers,
  logout,
  updateUser,
  deleteUser
} = require('../controllers/userControllers');
const checkToken = require('../middlewares/checkToken');

userRouter.route('/login').post(login);
userRouter.route('/logout').post(logout);
userRouter.route('/signup').post(createUser);
userRouter.route('/me').get(checkToken, getOneUser);
userRouter.route('/all').get(getAllUsers);
userRouter.route('/update/:id').put(updateUser);
userRouter.route('/delete/:id').delete(deleteUser);

module.exports = userRouter;
