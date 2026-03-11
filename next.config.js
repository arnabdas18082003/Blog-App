const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'arnabdascse2023_db_user',
        mongodb_password: 'Nm5yY82Rr8MXeliQ',
        mongodb_clustername: 'contact',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'arnabdascse2023_db_user',
      mongodb_password: 'Nm5yY82Rr8MXeliQ',
      mongodb_clustername: 'contact',
      mongodb_database: 'contact',
    },
  };
};

//'mongodb+srv://arnabdascse2023_db_user:Nm5yY82Rr8MXeliQ@contact.6ovdebj.mongodb.net/?appName=contact'