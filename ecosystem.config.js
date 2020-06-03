module.exports = {
  apps: [
    {
      name: 'strapi-dev',
      cwd: '/srv/strapi/mystrapiapp',
      script: 'npm',
      args: 'run develop',
      env: {
        NODE_ENV: 'development',
        JWT_SECRET: '54265f24-b1e3-472a-a005-f681a905488f',
      },
    },
  ],
};
