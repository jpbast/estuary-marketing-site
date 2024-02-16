module.exports = {
    ci: {
        collect: {
            staticDistDir: "public"
        },
        upload: {
            target: "lhci",
            serverBaseUrl: "https://lighthouse-ci-server-4hggwv2wra-uc.a.run.app",
            token: process.env.LHCI_TOKEN,
            githubAppToken: process.env.LHCI_GITHUB_APP_TOKEN,
            basicAuth: {
                username: process.env.LHCI_BASIC_AUTH_USERNAME,
                password: process.env.LHCI_BASIC_AUTH_PASSWORD
            }
        }
    }
}