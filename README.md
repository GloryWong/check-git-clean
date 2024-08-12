![GitHub License](https://img.shields.io/github/license/GloryWong/check-git-clean)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/GloryWong/check-git-clean)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/GloryWong/check-git-clean/release.yml)
![GitHub Release](https://img.shields.io/github/v/release/GloryWong/check-git-clean)
![GitHub Release Date](https://img.shields.io/github/release-date/GloryWong/check-git-clean)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/GloryWong/check-git-clean)
![GitHub watchers](https://img.shields.io/github/watchers/GloryWong/check-git-clean)
![GitHub forks](https://img.shields.io/github/forks/GloryWong/check-git-clean)
![GitHub Repo stars](https://img.shields.io/github/stars/GloryWong/check-git-clean)
![NPM Version](https://img.shields.io/npm/v/check-git-clean)
![NPM Type Definitions](https://img.shields.io/npm/types/check-git-clean)
![NPM Downloads](https://img.shields.io/npm/dw/check-git-clean)
![Node Current](https://img.shields.io/node/v/check-git-clean)

# check-git-clean

Check the cleanliness of a Git working directory, identifying untracked, unstaged, and uncommitted changes.

## Install

Using pnpm:

```bash
pnpm add check-git-clean
```

Using yarn:

```bash
yarn add check-git-clean
```

Using npm:

```bash
npm install check-git-clean
```

## Usage

```javascript
import { checkGitClean } from 'check-git-clean'

/**
 * Check if a local git repository is clean.
 * Ignore files defined in [git-ignore-patterns](git-ignore-patterns),
 * which contains commonly git-ignored files for node project.
 * @param dir (optional). Default to `process.cwd()`
 * @return Object { `isClean`, `untracked`, `unstaged`, `uncommitted` }
 */
const { isClean, untracked, unstaged, uncommitted } = await checkGitClean()
```

## Authors

👤 **GloryWong**

* Website: https://glorywong.com
* GitHub: [@GloryWong](https://github.com/GloryWong)

## Show Your Support

Give a ⭐️ if this project helped you!
