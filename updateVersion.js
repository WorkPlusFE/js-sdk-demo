const replace = require('replace-x').default;
const latestVersion = require('latest-version');
const currentVersion = require('./version.json');

(async () => {
    const sdkLastestVersion = await latestVersion('@w6s/sdk');
    console.log('current version: ', currentVersion.version);
    console.log('lastest version: ', sdkLastestVersion);
	replace({
        regex: currentVersion.version,
        replacement: sdkLastestVersion,
        paths: ['.'],
        recursive: true,
        exclude: 'node_modules',
        silent: false,
    });
})();

