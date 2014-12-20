
// [string].replace([old], [new])


var bio = {
  "name": "Felice Forby",
  "role": "Kitchen and Code Chef",
  "contacts": {
    "mobile": "070-1316-3513",
    "email": "felice@cookmap.com",
    "github": "morinoko",
    "twitter": "aka_charinko",
    "location": "Kamakura, Japan"
  },
  "welcomeMessage": "Welcome to my interactive resume! I hope you enjoy exploring :)",
  "skills": ["Ruby on Rails", "CSS | HTML", "JavaScript", "Sketch", "PhotoShop", "Photography", "Fluent in Japanese", "Natural farming", "Recipe development"],
  "bioPic": "images/profile.jpg",
  //"display": function
}

var education = {
  "schools": [
    {
      "name": "Ohio State University",
      "location": "Columbus, OH, USA",
      "degree": "BA",
      "majors": ["East Asian Studies", "Japanaese"],
      "dates": 2007,
      "url": "https://deall.osu.edu/"
    },
    {
      "name": "Ohio State University",
      "location": "Columbus, OH, USA",
      "degree": "MA",
      "majors": ["Environmental and Natural Resources", "Rural Sociology"],
      "dates": "N/A",
      "url": "http://senr.osu.edu/"
    },
    {
      "name": "Stanford Inter-University Center for Japanese Language Studies",
      "city": "Yokohama, Japan",
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
  // "display": function
}

var work = {
  "jobs": [
    {
      "employer": "Cookpad",
      "title": "Junior Web Developer and Customer Development Specialist",
      "location": "Kamakura, Japan",
      "dates": "2011-present",
      "description": "User aquistion and support, web dev for Cooksnaps.com and Cookmap.com."
    },
    {
      "employer": "Koganecho Area Management Center",
      "title": "Translator/Interpreter",
      "location": "Yokohama, Japan",
      "dates": "2010-2013",
      "description": "Translation and interpretation for events, projects and materials for the Koganecho Art Bazaar and Community Development Project."
    },
    {
      "employer": "Ohio State University",
      "title": "NSF Research Fellow",
      "location": "Wooster, OH, USA",
      "dates": "2009-2010",
      "description": "Research associate and student teacher for Sugar Creek Project in northeast Ohio."
    },
    {
      "employer": "Funny Square English School",
      "title": "English Teacher",
      "location": "Kawachinagano, Japan",
      "dates": "2007-2008",
      "description": "Private and group English instruction for children and adults."
    }
  ],
  "display": function() {
    for (job in work.jobs) {
      //create new .work-entry div for each job
      $("#workExperience").append(HTMLworkStart);
      //format employers and titles
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle; //concat employer & titles
      $(".work-entry:last").append(formattedEmployerTitle); //append to work-entry div

      //format dates and add to work entry div
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

      //format locations and add to work entry div
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);

      //format descriptions and add to work entry div
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
}

var projects = {
  "projects": [
    {
      "title": "Mock Up Website",
      "dates": "Dec. 2014",
      "description": "Created a live web page based on mock up image and strict design directives",
      "images": ["images/mockup.jpg", "images/bootstrap.jpg"]
    },
    {
      "title": "Interactive Resume",
      "dates": "Dec. 2014",
      "description": "Interactive resume built with JavaScript",
      "images": ["images/resume.jpg"]
    }
  ],
  "display": function() {
    for (project in projects.projects) {
      //create new .project-entry div for each project
      $("#projects").append(HTMLprojectStart);

      //format project title
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      //format project dates
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      //format project description
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      //format project images if present
      if (projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
}



var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedBioPic);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#main").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
};

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[8]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[9]);
$("#skills").append(formattedSkill);

// display resume
work.display();
projects.display();

//display map
$("#mapDiv").append(googleMap);

//log click locations
/*
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});
*/

//add internationalize button

function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  internationalName = name.join(" ");

  return internationalName;
};

$("#main").append(internationalizeButton);












