module.exports = {
  apps: [
    {
      name: "invitation",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: 1,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3008,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3008,
      },
      env_development: {
        NODE_ENV: "development",
        PORT: 3008,
      },
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      time: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
      max_memory_restart: "1G",
      watch: false,
    },
  ],
};
