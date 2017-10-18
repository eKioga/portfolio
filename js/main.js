import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "IT Helpdesk: Automation and streamlining" ,
        'href': "",
        'desc': "During my last position, I Reduced technical debt along with break/fix tickets by automating all critical Help Desk functions. This includes: user creation, asset management and PC imaging along with all software reporting, deployment and patching. Built alert and reporting systems for the monitoring of both network and node health. Problems would trigger alerts, which in turn, trigger solutions. ",
        'image': {
            'desc': "Screenshot something i have yet to add",
            'src': "images/helpdesk_auto.jpg",
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
        'title': "This Portfolio Site",
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
    }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));