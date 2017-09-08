import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "My Ruby on Rails Blog/Portfolio",
        'href': "https://example.com",
        'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula ex, blandit iaculis elit eget, aliquet tempor est. In hac habitasse platea dictumst. Etiam turpis libero, cursus id aliquam eu, pharetra efficitur ipsum. In pretium congue ipsum aliquam ullamcorper. Quisque quis luctus felis. Praesent tempus quam porttitor risus dapibus gravida et non tortor. Ut aliquam eu elit eget dictum.",
        'image': {
            'desc': "Ruby on Rails Blog/Portfolio",
            'src': "images/rails_blog.png",
            'comment': ""
        }
    },
    {
        'title': "Work Example",
        'href': "https://example.com",
        'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula ex, blandit iaculis elit eget, aliquet tempor est. In hac habitasse platea dictumst. Etiam turpis libero, cursus id aliquam eu, pharetra efficitur ipsum. In pretium congue ipsum aliquam ullamcorper. Quisque quis luctus felis. Praesent tempus quam porttitor risus dapibus gravida et non tortor. Ut aliquam eu elit eget dictum.",
        'image': {
            'desc': "example screenshot of a project involving chemistry",
            'src': "images/example2.png",
            'comment': `{/* “Chemistry” by Surian Soosay is licensed under CC BY 2.0
            https://www.flickr.com/photos/ssoosay/4097410999 */}`
        }
    },
    {
        'title': "Work Example",
        'href': "https://example.com",
        'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula ex, blandit iaculis elit eget, aliquet tempor est. In hac habitasse platea dictumst. Etiam turpis libero, cursus id aliquam eu, pharetra efficitur ipsum. In pretium congue ipsum aliquam ullamcorper. Quisque quis luctus felis. Praesent tempus quam porttitor risus dapibus gravida et non tortor. Ut aliquam eu elit eget dictum.",
        'image': {
            'desc': "example screenshot of a project involving cats",
            'src': "images/example3.png",
            'comment': ""
        }
    }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));