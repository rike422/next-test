module.exports = {
  webpack: (cfg, { dev }) => {
    cfg.target = "web"
    return cfg
  }
}