console.log('logged on');

// Experience
const resume = [
    {
        job: 'Potomac Wave Consulting',
        date: 'May 2019 - Present',
        description: 'Creates and maintains platforms for internal organization and communication with a focus on JavaScript, jQuery, and Sharepoint.'
    },
    {
        job: 'General Assembly',
        date: 'December 2018 - March 2019',
        description: 'Built applications using various languages including HTML, CSS, JavaScript, Express, React.js, MongoDB, Python.'
    },
    {
        job: 'Freelance Frontend Developer',
        date: 'March 2018 - November 2018',
        description: 'Consulted on and designed layouts for mobile responsive emailed content. Provided HTML & CSS services for mobile responsive layouts.'
    },
    {
        job: 'Mobtown Ballroom',
        date: 'June 2014 - May 2019',
        description: 'Organized regional and national events, managing the advertising and logistics, organizing volunteers, MCing, and being the on-site manager. \nFacilitated bi-weekly dances. \nTaught American vernacular dance to teenage and adult students.'
    },
    {
        job: 'Johns Hopkins University',
        date: 'November 2014 - Feb 2018',
        description: 'Curated lab’s social media accounts, website, and blog.\nCollected and assembled articles for quarterly newsletter.\nProvided graphic design for lab including branding, web design, and general media graphics.'
    }
]

const projects = [
    {
        title: 'Resume in KnockoutJS',
        languages: 'JavaScript, HTML, CSS',
        liveLink: '',
        githubLink: 'https://github.com/Sun-Mountain/knockoutjs_resume',
        description: 'Resume using the KnockoutJS library.'
    },
    {
        title: 'Periodic Table Flashcards',
        languages: 'ReactJS, NodeJS',
        liveLink: 'http://ptflash.surge.sh/',
        githubLink: 'https://github.com/Sun-Mountain/periodic_table_flashcards',
        description: 'Users can quiz themselves on the names and/or symbols of the elements of the periodic tables. Right answers will not be repeated. There are counters to keep track of correct, wrong, and skipped questions. The flashcards are generated by use of a foreign API.'
    },
    {
        title: 'Circuit App',
        languages: 'ReactJS, Python, Django, NodeJS',
        liveLink: '',
        githubLink: 'https://github.com/Sun-Mountain/knockoutjs_resume',
        description: 'A full-stack application where users can create a circuit, organize their workouts, and run a count down timer that will prompt the users when to switch their exercises.'
    },
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
            showJobs.push(e1)
        }
    }))

    var str = '<ul>';

    showJobs.forEach(function(job) {
        str += '<li class="single"><ul><li class="title">' + job.job + '</li><li class="detail">' + job.date + '</li><li>' + job.description + '</li></ul></li>';
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
        str += '<li class="single"> <ul> <li class="title"><a href="' + project.githubLink + '" target="_blank">' + project.title + '</a></li> <li class="detail">' + project.languages + '</li> <li>' + project.description + '</li> </ul> </li>'
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