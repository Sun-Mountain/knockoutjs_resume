console.log('logged on');

function getJobList(sel) {
    var opts = [];

    var len = sel.options.length;

    for (var i = 0; i < len; i++) {
        var opt = sel.options[i];

        var optHtml = opt.value;

        if (opt.selected) {
            opts.push(optHtml);
        }
    }

    var printJobList = document.querySelector('#jobList');

    printJobList.innerHTML = '<ul>' + opts.map(function(job) {
        return '<li>' + job + '</li>';
    }).join('') + '</ul>';
}

function AppViewModel() {
    console.log('view installed');
    
    // Arrays
    this.experience = ko.observableArray([
        "PotomacWave Consulting - JavaScript Developer",
        "General Assembly - Software Engineer",
        "Freelance Front-End Developer",
        "Mobtown Ballroom - Event Coordinator, Teacher, DJ Coordinator",
        "Johns Hopkins University"
    ]);

    this.projects = ko.observableArray([
        "Periodic Table Flashcards",
        "KnockoutJS Resume"
    ]);

    // Actions
    this.listJobs = function() {
        console.log('list');
        if (document.getElementById('myExperience')) {
            console.log('yes')
        } else {
            console.log('nah')
        }
    };
}

ko.applyBindings(new AppViewModel());