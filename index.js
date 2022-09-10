var users = {
user1 : {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
},
user2 : {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
    }
};

console.log(users.user1);

function getParamater() {
    let params = new URLSearchParams(window.location.search);
    return params.get('user');
}



var parameterResults = getParamater();

console.log(parameterResults);

var selectedUser = users.parameterResults;

function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
     }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
};


var selectedUser = users[parameterResults];

var bioCont = document.getElementById('bio-section');
var tweetSectionCont = document.getElementById('tweet-section');


    var header = document.createElement('div');

    let counter = Object.keys(selectedUser.tweets).length; 

    header.innerHTML = `
    <h3 class='display-name'>${selectedUser.displayName}</h3>
    <h5 class='tweet-count'>${counter} Tweets</h5>
    `;

    bioCont.appendChild(header);
 
    var coverContainer = document.createElement('div');

    coverContainer.innerHTML = `
    <img id="cover-container" src=${selectedUser.coverPhotoURL}>
    `;

    bioCont.appendChild(coverContainer);
    
    var profileDetails = document.createElement('div');

    profileDetails.classList.add("profile-details");

    profileDetails.innerHTML = `
    <img id="user-avatar" src=${selectedUser.avatarURL}>
    <h3 class='display-name'>${selectedUser.displayName}</h3>
    <h5 class='user-name'>${selectedUser.userName}</h5>
    <h5 class='joined-date'>🗓️ Joined ${selectedUser.joinedDate}</h5>
    <h5 class='following-count'>${numFormatter(selectedUser.followingCount)}</h5><span class='following'> Following</span>
    <h5 class='follower-count'>${numFormatter(selectedUser.followerCount)}</h5><span class='followers'> Followers</span>
    `;
    
    bioCont.appendChild(profileDetails);

    
    var tweetObj = selectedUser.tweets;
  
    for (var i = 0; i < tweetObj.length; i++) { 

        var tweetText = tweetObj[i].text;
        
        var finalString = JSON.stringify(tweetText).split('"').join('')

        var flexContainer = document.createElement('div');
        var avatarContainer = document.createElement('div');
        var tweetContainer = document.createElement('div');
        flexContainer.setAttribute('id', 'flex-container');
        avatarContainer.setAttribute('id', 'avatar-container');
        tweetContainer.setAttribute('id', 'tweet-container');

        tweetSectionCont.appendChild(flexContainer);

        avatarContainer.innerHTML = `
        <img class="tweet-avatar-container" src=${selectedUser.avatarURL}>
        `;
        flexContainer.appendChild(avatarContainer);     
        
        tweetContainer.innerHTML = `
        <h6 class='tweet-display-name'>${selectedUser.displayName}</h6> <span class='user-name'>${selectedUser.userName}</span>
        <h6 class='tweetText'>${finalString}</h6>
        `
        flexContainer.appendChild(tweetContainer);
    
    }  
;





