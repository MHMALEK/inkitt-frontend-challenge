const path = require('path');

const projectRoot = path.resolve(__dirname, '../..');

/**
 * Paths to directories and files of the project.
 */
module.exports = {
  projectRoot,

  // Files
  entryPointSrc: path.resolve(
    projectRoot,
    'src/app/index.tsx',
  ),
  typescriptConfigSrc: path.resolve(
    projectRoot,
    'tsconfig.json',
  ),
  htmlTemplateSrc: path.resolve(
    projectRoot,
    'public/html/index.html',
  ),
  favIconSrc: path.resolve(
    projectRoot,
    'public/images/icons/fav_inkitt.jpg',
  ),
  reportSrc: path.resolve(
    projectRoot,
    'bundle-report/index.html',
  ),

  // Directories
  srcDir: path.resolve(projectRoot, 'src'),
  buildDir: path.resolve(projectRoot, 'build'),
  UtilsDir: path.resolve(projectRoot, 'src/utils'),
  ComponentsDir: path.resolve(
    projectRoot,
    'src/components/',
  ),
  ProvidersDir: path.resolve(projectRoot, 'src/providers/'),
  StoreDir: path.resolve(projectRoot, 'src/store/'),
};
