(() => {


"use strict";

// got help with code structure from ralph in my breakout room.
const lastGitCommit = (username) => {
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {Authorization: promisesAccessToken}})
        .then(response => response.json())
        .then(events => events.filter(event => event.type === "PushEvent"))
        .then(pushEvents => console.log(pushEvents[0].created_at));
};
console.log(lastGitCommit('paul-wagner1120'));

})();

