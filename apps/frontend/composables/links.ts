export const navigateToOutside = (url: string) => navigateTo(url, { external: true, open: { target: '_blank' } })

export const navigateToGithub = () => navigateToOutside('https://github.com/topnames/is-the.top')
