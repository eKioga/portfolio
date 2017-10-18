import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "IT Helpdesk: Automation and streamlining",
        'href': "eric-post-resume.pdf",
        'desc': "I reduced technical debt along with break/fix tickets by automating all critical Help Desk functions. This includes: user creation, asset management and PC imaging along with all software reporting, deployment and patching. Built alert and reporting systems for the monitoring of both network and node health. Problems would trigger alerts, which in turn, trigger solutions. A few example implimentations would be; A network monitoring system (Nagios - Check_MK) to help alert us so we can quickly identify and preemptively troubleshoot remote circuits. A zero-touch and light-touch imaging solution (MDT w/ PXE boot) for automated laptop/desktop deployment via a network connection. A fully automated application deployment system (PDQ Deploy & Inventory) that includes applications updates, Windows patching, inventory and asset reporting.",
        'image': {
            'desc': "shutterstock image of helpdesk related stuff",
            'src': "images/helpdesk_auto.jpg",
            'comment': ""
        }
    },
    {
        'title': "Office365 Administration Experience",
        'href': "eric-post-resume.pdf",
        'desc': "I was lead Office 365 administrator. Responsible for the following: Onboarding - User creation through AD, DirSync verification along with license and DL/group management. Termination - Quickly disabling accounts, shared inbox conversion and coordination with management in determining responsibility for that inbox. Solving Office 365 related tickets. Running mail traces to troubleshoot issues like spoofing. Managing domain white listing and black listing. Managing DKIM, SPF and MX configuration through cPanel. Managing application integration for apps like MailChimp and Zendesk. Creating how-to documentation for both internal IT and end users. The health of how Office 365 integrates into the local Active Directory. Performing and coordinating eDiscovery efforts when necessary.",
        'image': {
            'desc': "shutterstock image of office365 logo.",
            'src': "images/office365.jpg",
            'comment': ""
        }
    },
    {
        'title': "Google Apps to Office365 Migration",
        'href': "eric-post-resume.pdf",
        'desc': "I was lead engineer for the Google Apps to Office 365 migration project that included constant communication with company VPs, outside vendors, and Microsoft consultants. I tested feasibility relative to the current environment, researched and implement solutions to achieve the project goals. The project itself was successfully completed despite being short-staffed due to my solutions engineering, rigorous testing, skills with automation, user communication along with continuous collaboration with my team and outside resources.",
        'image': {
            'desc': "shutterstock image of computers xfering files.",
            'src': "images/googleapps-office365.jpg",
            'comment': ""
        }
    },
    {
        'title': "My Ruby on Rails Blog/Portfolio app",
        'href': "https://github.com/eKioga/blog",
        'desc': "I consider Ruby as my first real foray into programming. I picked up Rails soon after as a way of practicing both DevOps tech like Ansible and code deployment tools like Capistrano. Lots of fun! This was my main blog/portfolio site until I learned about serverless tech with AWS. I became so engrossed with that tech that I've since replaced it with the serverless portfolio site you're looking at now. It is currently being self-hosted on http://eric-post.ddns.net/ but it may have been decommissioned by the time you read this.",
        'image': {
            'desc': "Ruby on Rails Blog/Portfolio screenshot",
            'src': "images/rails_blog.png",
            'comment': ""
        }
    },
    {
        'title': "This Portfolio Site hosted on AWS",
        'href': "https://github.com/eKioga/portfolio",
        'desc': "The very same portfolio site you're looking at now! It's a serverless website hosted on Amazon Web Services with Route 53 and CloudFront. It uses ReactJS as its front end (along with Jest, NPM, WebPack and Babel) and relies heavily on (Python) Lambda, S3, and CodePipeline AWS services for deployment.",
        'image': {
            'desc': "Example screenshot of this portfolio site.",
            'src': "images/portfolio_site.png",
            'comment': `{/* “example comment in case i want to copy it later.*/}`
        }
    },
    {
        'title': "The Ansible Playbook for my Rails Blog",
        'href': "https://github.com/eKioga/blog_playbook",
        'desc': "This is the playbook I set up for use with my old Rails blog.",
        'image': {
            'desc': "Screenshot of Ansible YAML code",
            'src': "images/ansible_blog.png",
            'comment': ""
        }
    },
    {
        'title': "Symantec to Trend Micro firewall migration",
        'href': "eric-post-resume.pdf",
        'desc': "Lead engineer on the Symantec to Trend Micro Worry-Free Business firewall migration along with its deployment to servers and 300+ end user machines. I was also the main administrator and collaborated with the IT Director in order to create the necessary configurations to manage the firewall's behavior, URL filtering and policy management.",
        'image': {
            'desc': "shutterstock image of firewall software.",
            'src': "images/firewall-migration.jpg",
            'comment': ""
        }
    },
    {
        'title': "Corporate WiFi Project",
        'href': "eric-post-resume.pdf",
        'desc': "I was the project lead to outfit all our satellite offices nationwide with WiFi options including an internal corporate connection, a guest connection and an employee outside connection. I collaborated with vendors in the planning and configuration of the back-end stack (Panorama, Aruba, Clearpass). I handled the user facing side of the project entirely myself. This included rigorous testing, all the user communications (announcements, how-to guides, gathering feedback), creating the GPOs, packaging and automating the deployment of the supplemental software.",
        'image': {
            'desc': "shutterstock image of buisness wifi.",
            'src': "images/corp-wifi.jpg",
            'comment': ""
        }
    }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));