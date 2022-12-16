"use strict";


(() => {

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


const threeOrMoreLanguages = users.filter((user) => {
    return user.languages.length >= 3
});
    console.log(threeOrMoreLanguages);

const emailAddresses = users.map((user) => {
    return user.email
});
    console.log(emailAddresses);

const yearsOfExp = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
    console.log(yearsOfExp);

let avg = yearsOfExp / users.length
    console.log(avg);


    const longestEmail = users.reduce((total, user) => {

        if(user.email.length > total.length){
            return user.email
        }
        return total
    }, "");
    console.log(longestEmail);


const userNameString = users.reduce((total, user, index) => {
    if (index === users.length -1) {
        return total + `and ${user.name}.`;
    } else {
        return total + `${user.name}, `;
    }
}, "User's names are: ");

    console.log(userNameString);

})();


