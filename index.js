#!/usr/bin/env node

const https = require("https");

//Requirements

// Provide the GitHub username as an argument when running the CLI.
const username = process.argv[2];
const activityFlag = process.argv[3];



if (!username) {
  console.error("Enter a GitHub username as an argument.");
  process.exit(1);
}

// fetch the recent activity of a GitHub user's using the GitHub API and
function fetchActivity(username) {
    const url = `https://api.github.com/users/${username}/events/public`;
    https.get(url, { headers: { 'User-Agent': 'node.js' } }, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            const events = JSON.parse(data);
            console.table(events.map(event => ({
                type: event.type,
                repo: event.repo.name,
                created_at: event.created_at
            })));
        });
    }
)   
}



// Fetch and display user repos
function fetchRepos(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    https.get(url, { headers: { 'User-Agent': 'node.js' } }, (res) => {
        let data = '';  
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            const repos = JSON.parse(data);
            repos.forEach(repo => {
                console.log(`Repo: ${repo.name} - Language: ${repo.language}`);
            });
        }); 
    });
}


if (activityFlag === '--activity') {
    fetchActivity(username);
}

if (!activityFlag) {
    fetchRepos(username);
}