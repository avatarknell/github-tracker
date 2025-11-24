# GitHub Repos CLI

A simple Node.js command-line interface (CLI) tool that fetches and displays the public repositories of a GitHub user.  
This project demonstrates how to work with the GitHub REST API, handle JSON data, and build a CLI without external libraries.

---

## ✨ Features
- Fetch all public repositories for any GitHub user.
- Display only the repository names in the terminal.
- Handle errors gracefully (invalid usernames, API failures).
- Built with **Node.js** using the built-in `https` module (no external dependencies).

---

## 📦 Installation
Clone the repository and navigate into the project folder:

```bash
git clone https://github.com/your-username/github-repos-cli.git
cd github-repos-cli

Initialize Node.js (if not already done):
npm init -y

Run the CLI with a GitHub username:
node index.js <username>

Example
node index.js kamranahmedse


Output:
- developer-roadmap
- roadmap.sh
- design-patterns-for-humans
- projects
...




