console.log("###############!!!!##");
import { ESLint } from 'eslint';
// const { ESLint } = require('eslint');
import filterAsync from "node-filter-async"
// const filterAsync = require('node-filter-async').default;



const rootEslintCli = new ESLint();
const removeIgnoredFiles = async (files, eslintCli) => {
    const filteredFiles = await filterAsync(files, async (file) => {
      const isIgnored = await eslintCli.isPathIgnored(file)
      return !isIgnored
    })
    return filteredFiles.join(' ')
}

export default {
    'src/**/*.{ts,vue,js,jsx}': async (files) => {
        const filesToLint = await removeIgnoredFiles(files, rootEslintCli);
        console.log("###### ", filesToLint);
        return [`eslint --fix --cache ${filesToLint}`]
    },
    //  "src/**/*.(vue|scss|css)": "stylelint --fix"
}
