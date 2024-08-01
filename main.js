document.addEventListener('DOMContentLoaded', function () {
    const avatarElement = this.querySelector('#avatar');
    const nameElement = this.querySelector('#name');
    const userElement = this.querySelector('#username');
    const reposElement = this.querySelector('#repos');
    const followersElement = this.querySelector('#followers');
    const followingElement = this.querySelector('#following');
    const linkElement = this.querySelector('#link')


    fetch('https://api.github.com/users/ErickWerkhausen')
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            avatarElement.src = json.avatar_url;
            nameElement.innerText = json.name;
            userElement.innerText = json.login;
            reposElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.href = json.html_url;
        })
})