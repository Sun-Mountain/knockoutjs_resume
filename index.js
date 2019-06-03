console.log('logged on');

// Resume
const resume = [
    {
        job: 'Potomac Wave Consulting - JavaScript Developer',
        description: 'ptw description'
    },
    {
        job: 'General Assembly - Software Engineer',
        description: 'ga description'
    },
    {
        job: 'Freelance Front-End Developer',
        description: 'ffe - description'
    },
    {
        job: 'Mobtown Ballroom - Event Coordinator, Teacher, DJ Coordinator',
        description: 'mb - description'
    },
    {
        job: 'Johns Hopkins University',
        description: 'jhu - description'
    }
]

// Showing resume descriptions
var showJobs = [];

var getSelected = function() {
    var select1 = document.getElementById('mySelect');
    var selected1 = [];

    showJobs.length = 0;

    for (var i = 0; i < select1.length; i++) {
        if (select1.options[i].selected) {
            selected1.push(select1.options[i].value);
        }
    }

    resume.forEach((e1) => selected1.forEach((e2) => {
        if(e1.job === e2) {
            showJobs.push(e1.description)
        }
    }))

    var str = '<ul>'

    showJobs.forEach(function(job) {
        str += '<li>' + job + '</li>';
    });

    str += '</ul>';

    document.getElementById('job-container').innerHTML = str;
}

function AppViewModel() {
    console.log('view installed');

    // Resume parsing
    this.experience = _.pluck(resume, 'job');
}

ko.applyBindings(new AppViewModel());