import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "My Ruby on Rails Blog/Portfolio app",
        'href': "https://github.com/eKioga/blog",
        'desc': "I consider Ruby as my first real foray into programming. I picked up Rails soon after to as a way of practicing both DevOps tech like Ansible and code deployment tools like Capistrano. Lots of fun! This was my main blog/portfolio site up until I learned about serverless tech with AWS. I became so engrossed with that tech that I've since replaced it with the serverless portfolio site your looking at now. It's currently being self hosted on http://eric-post.ddns.net/ but it may of been decommissioned by the time you read this.",
        'image': {
            'desc': "Ruby on Rails Blog/Portfolio",
            'src': "images/rails_blog.png",
            'comment': ""
        }
    },
    {
        'title': "This Portfolio Site",
        'href': "https://github.com/eKioga/portfolio",
        'desc': "The very same portfolio site your looking at now! It's a serverless site hosted on AWS, uses ReactJS as it's front end and relies heavily on CodePipeline for deployment.",
        'image': {
            'desc': "example screenshot of a project involving chemistry",
            'src': "images/portfolio_site.png",
            'comment': `{/* “example comment in case i want to copy it later.*/}`
        }
    },
    {
        'title': "The Ansible Playbook for my Rails Blog",
        'href': "https://github.com/eKioga/blog_playbook",
        'desc': "This is the playbook I set up for use with my old Ruby on Rails blog.",
        'image': {
            'desc': "example screenshot of a project involving cats",
            'src': "images/ansible_blog.png",
            'comment': ""
        }
    }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));