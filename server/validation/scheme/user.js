module.exports = {
  name: {
    notEmpty: false,
    isLength: {
      options: [1, 20],
      errorMessage: 'Max length is 20 symbols'
    }
  },
  email: {
    notEmpty: true,
    isEmail: {
      errorMessage: 'Invalid email'
    }
  },
  username: {
    notEmpty: true,
    isLength: {
      options: [1, 20],
      errorMessage: 'Max length is 20 symbols'
    }
  },
  password: {
    notEmpty: true
  }
};
