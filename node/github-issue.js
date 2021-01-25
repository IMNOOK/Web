const { Octokit } = require('@octokit/core');

const octokit = new Octokit({
    auth: '09919f3b963c50402537669e6636a535f310a456'
});

let createIssue = async(title, body, labels) => {
    await octokit.request('POST /repos/IMNOOK/Web/issues' ,{
        owner: 'IMNOOK',
        repo: 'Web',
        title: title,
        body: body,
        labels: labels
    });
};

createIssue('Test issue', 'This is issue test', ['bug']);