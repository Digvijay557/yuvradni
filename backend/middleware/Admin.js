import User from '../models/User.js';

export const admin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user.isAdmin) {
      return res.status(403).json({
        message: 'Admin only'
      });
    }

    next();

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};