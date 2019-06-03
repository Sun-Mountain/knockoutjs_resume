console.log('logged on');

// Experience
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

const projects = [
    {
        title: 'Periodic Table Flashcards',
        languages: 'ReactJS, NodeJS',
        description: 'More words.'
    },
    {
        title: 'Resume in KnockoutJS',
        languages: 'JavaScript, HTML, CSS',
        description: 'Resume using the KnockoutJS library.'
    }
]

// Showing resume descriptions
var showJobs = [];

var getSelectedJobs = function() {
    var selectResume = document.getElementById('resume-experience');
    var selectedJobs = [];

    showJobs.length = 0;

    for (var i = 0; i < selectResume.length; i++) {
        if (selectResume.options[i].selected) {
            selectedJobs.push(selectResume.options[i].value);
        }
    }

    resume.forEach((e1) => selectedJobs.forEach((e2) => {
        if(e1.job === e2) {
            showJobs.push(e1.description)
        }
    }))

    var str = '<ul>';

    showJobs.forEach(function(job) {
        str += '<li>' + job + '</li>';
    });

    str += '</ul>';

    document.getElementById('job-container').innerHTML = str;
}

// Showing projects
var showProjects = [];

var getSelectedProjects = function() {
    var selectProjects = document.getElementById('personal-projects');
    var selectedPros = [];

    showProjects.length = 0;

    for (var i = 0; i < selectProjects.length; i++) {
        if (selectProjects.options[i].selected) {
            selectedPros.push(selectProjects.options[i].value);
        }
    }

    projects.forEach((e1) => selectedPros.forEach((e2) => {
        if(e1.title === e2) {
            showProjects.push(e1);
        }
    }))
    
    var str = '<ul>';

    showProjects.forEach(function(project) {
        str += '<li> <ul> <li>' + project.title + '</li> <li>' + project.languages + '</li> <li>' + project.description + '</li> </ul> </li>'
    });

    str += '</ul>';

    document.getElementById('project-container').innerHTML = str;
}

function AppViewModel() {
    console.log('view installed');

    // Plucking
    this.experience = _.pluck(resume, 'job');

    this.myProjects = _.pluck(projects, 'title')
}

ko.applyBindings(new AppViewModel());