// Resume Data

// Bio Data
var bio = {
  "name": "Felice Forby",
  "role": "Code Chef",
  "contacts": {
    "mobile": "070-1316-3513",
    "email": "felice@cookmap.com",
    "github": "morinoko",
    "twitter": "aka_charinko",
    "location": "Kamakura, Japan"
  },
  "welcomeMessage": "Welcome! I'm a junior web developer and translator based in Kamakura, Japan. At work I help create websites and online tools for cooking and recipe sharing. Besides coding, I dabble in photography, graphic design, and natural farming. I hope you enjoy exploring my resume - make yourself at home :)",
  "skills": ["Ruby on Rails", "CSS | HTML", "JavaScript", "Sketch", "PhotoShop", "Photography", "Japanese"],
  "bioPic": "images/profile.jpg",
  "display": function() {
    // format and append all sections of bio to header
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);

    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    // add skills section if there are skills
    if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
    };

    // formatt and add each skill
    for (skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
}

// Education Data
var education = {
  "schools": [
    {
      "name": "Ohio State University",
      "location": "Columbus, OH, USA",
      "degree": "BA",
      "majors": ["East Asian Studies", "Japanese"],
      "dates": 2007,
      "url": "https://deall.osu.edu/"
    },
    {
      "name": "Ohio State University",
      "location": "Columbus, OH, USA",
      "degree": "MA",
      "majors": ["Environmental and Natural Resources", "Rural Sociology"],
      "dates": "2013",
      "url": "http://senr.osu.edu/"
    },
    {
      "name": "Stanford Inter-University Center for Japanese Language Studies",
      "location": "Yokohama, Japan",
      "degree": "Certificate",
      "majors": ["Advanced Japanese Language"],
      "dates": 2011,
      "url": "https://web.stanford.edu/dept/IUC/cgi-bin/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/nd001"
    }
  ],
  "display": function() {
    for (school in education.schools) {
      // create new education-entry div for each school
      $('#education').append(HTMLschoolStart);

      // format and add each school with URL to education-entry
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedSchoolNameURL = formattedSchoolName.replace("#", education.schools[school].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedSchoolHeading = formattedSchoolNameURL + formattedSchoolDegree;
      $('.education-entry:last').append(formattedSchoolHeading);

      // format and add grad dates to education-entry
      var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $('.education-entry:last').append(formattedSchoolDate);

      // format and add school locations to education-entry
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $('.education-entry:last').append(formattedSchoolLocation);

      // format and add majors to education-entry
      for (major in education.schools[school].majors) {
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
        $('.education-entry:last').append(formattedSchoolMajor);
      }
    }

    // Online Classes
    if (education.onlineCourses.length > 0) {
      $('#education').append(HTMLonlineClasses);

      for (course in education.onlineCourses) {
        $('#education').append(HTMLschoolStart);

        // Format Online Course titles and Headings
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineTitleURL = formattedOnlineTitle.replace("#", education.onlineCourses[course].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedOnlineHeading = formattedOnlineTitleURL + formattedOnlineSchool;
        $('.education-entry:last').append(formattedOnlineHeading); //append to education entry

        // format course dates and append to education entry
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $('.education-entry:last').append(formattedOnlineDates);

        // format and append course URL
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $('.education-entry:last').append(formattedOnlineURL);
      }
    }
  }
}

// Work Data
var work = {
  "jobs": [
    {
      "employer": "Cookpad",
      "title": "Junior Web Developer and User Outreach",
      "location": "Kamakura, Japan",
      "dates": "2011-present",
      "description": "I work on user aquistion, outreach and support, as well as web development and design for Cooksnaps.com and Cookmap.com.",
      "url": "https://info.cookpad.com/"
    },
    {
      "employer": "Koganecho Area Management Center",
      "title": "Translator/Interpreter",
      "location": "Yokohama, Japan",
      "dates": "2010-2013",
      "description": "I interpreted for events, and did translations for projects and materials for the Koganecho Art Bazaar and Community Development Initiative.",
      "url": "http://www.koganecho.net/"
    },
    {
      "employer": "Ohio State University",
      "title": "NSF Research Fellow",
      "location": "Wooster, OH, USA",
      "dates": "2009-2010",
      "description": "Research associate and student teacher for Sugar Creek Project in northeast Ohio. I created interactive, long-term natural science projects for 6th grade students, while working on my own research project.",
      "url": "http://www.oardc.ohio-state.edu/gk12/t08_pageview2/About_.htm"
    },
    {
      "employer": "Funny Square English School",
      "title": "English Teacher",
      "location": "Kawachinagano, Japan",
      "dates": "2007-2008",
      "description": "I was a private and group English instructor for both children and adults in Kawachinagano, in Osaka. Unfortunately there isn't a website, but the link above will take you to wikipedia for the city.",
      "url": "http://en.wikipedia.org/wiki/Kawachinagano,_Osaka"
    }
  ],
  "display": function() {
    for (job in work.jobs) {
      // create new .work-entry div for each job
      $("#workExperience").append(HTMLworkStart);

      // format employers and titles
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedEmployerURL = formattedEmployer.replace("#", work.jobs[job].url);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployerURL + formattedTitle; //concat employer & titles
      $(".work-entry:last").append(formattedEmployerTitle); //append to work-entry div

      // format dates and add to work entry div
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

      // format locations and add to work entry div
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);

      // format descriptions and add to work entry div
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
}

// Project Data
var projects = {
  "projects": [
    {
      "title": "Mock Up Website",
      "dates": "Dec. 2014",
      "description": "A project for the Front-End Web Developer Nanodegree at Udacity. I created a live web page based on a design mock up using Bootstrap.",
      "images": ["images/mockup_project.png"],
      "url": "https://github.com/morinoko/frontend-nanodegree-project1"
    },
    {
      "title": "Interactive Resume",
      "dates": "Dec. 2014",
      "description": "Another project for Udacity's Front-End Web Dev Nanodegree and what you're looking at right now! I created an interactive resume built with JavaScript, jQuery and JSON data. It includes an interactive Google Map as well.",
      "images": ["images/resume_project.png"],
      "url": "https://github.com/morinoko/frontend-nanodegree-resume"
    },
    {
      "title": "Izakaya Sachiko",
      "dates": "2014",
      "description": "A personal recipe website I built for sharing personal recipes in Japanese. Responsive for web and mobile.",
      "images": ["images/izakaya_project.png"],
      "url": "http://izakayasachiko.com"
    }
  ],
  "display": function() {
    for (project in projects.projects) {
      // create new .project-entry div for each project
      $("#projects").append(HTMLprojectStart);

      // format project title and add to project entry div
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      var formattedTitleURL = formattedTitle.replace("#", projects.projects[project].url);
      $(".project-entry:last").append(formattedTitleURL);

      // format project dates and add to project entry div
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      // format project description and add to project entry div
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      // format project images if present and add to project entry div
      if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
}

// display resume
bio.display();
work.display();
projects.display();
education.display();

// display map
$("#mapDiv").append(googleMap);

// add internationalize button
function inName(name) {
  var name = $('#name').text();
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  internationalName = name.join(" ");

  return internationalName;
};

$("#main").append(internationalizeButton);