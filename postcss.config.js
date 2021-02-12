module.exports = {
  plugins: [
    require('postcss-preset-env')({
      browsers: 'last 2 versions',
    }),
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
  ],
};
