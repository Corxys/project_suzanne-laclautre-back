module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9152f083845bdd14a8ab82a8a3b2236f'),
  },
});
