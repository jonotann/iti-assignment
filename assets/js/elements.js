const RenderFeaturedUsers = (targetEl, users) => {
    const el = document.getElementById(targetEl);

    for (let i = 0; i < 3; i++) {
        const user = document.createElement('div');
        user.classList.add('FeaturedRep');
        user.innerHTML = `
            <div class="ProfileImage">
                <img src="${users[i].image}">
            </div>

            <div class="ProfileContent">
                <h3 id="name">${users[i].name}</h3>
                <h1 id="counter">${users[i].deals}</h1>
                <p>closed deals</p>
            </div>
            
            
            <div class="RepActions">
                <a href="#${users[i].id}">Details</a>
                <a href="#message${users[i].id}">Message</a>
            </div>
        `;
        el.appendChild(user);
    }
};

const RenderFeed = (targetEl, notifications) => {
    const el = document.getElementById(targetEl);

    for (let i = 0; i < notifications.length; i++) {
        const notification = document.createElement('div');
        notification.classList.add('Notification');
        notification.innerHTML = `
            <div class="ProfileImage">
                <img src="${notifications[i].image}">
            </div>
            <div class="NotificationContent">
                <h3>${notifications[i].name}</h3>
                <p>${notifications[i].content}</p>
            </div>
        `;
        el.appendChild(notification);
    }
};

const RenderTeam = (targetEl, team) => {
    const el = document.getElementById(targetEl);

    for (let i = 0; i < team.length; i++) {
        const teamMember = document.createElement('div');
        teamMember.classList.add('TeamMember');
        teamMember.innerHTML = `
            <div class="TableCol" id="InnerProfileImage">
                <img src="${team[i].image}">
            </div>
            <div class="TableCol" id="InnerProfileContent">
                <h3>${team[i].name}</h3>
                <p>${team[i].id}</p>
            </div>
            <div class="TableCol" id="InnerDeals">
                <h2>${team[i].deals}</h2>
            </div>
            <div class="TableCol" id="InnerActions">
                <a href="#">
                    Details
                </a>
                <a href="#">
                    Message
                </a>
            </div>
        `;
        el.appendChild(teamMember);
    }
};

const RenderBar = (targetEl, value) => {

};

const RenderPieGraph = (targetEl, value) => {

};