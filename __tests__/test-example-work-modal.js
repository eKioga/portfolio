import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';

const myExample = {
    'title': "My Ruby on Rails Blog/Portfolio",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula ex, blandit iaculis elit eget, aliquet tempor est. In hac habitasse platea dictumst. Etiam turpis libero, cursus id aliquam eu, pharetra efficitur ipsum. In pretium congue ipsum aliquam ullamcorper. Quisque quis luctus felis. Praesent tempus quam porttitor risus dapibus gravida et non tortor. Ut aliquam eu elit eget dictum.",
    'image': {
        'desc': "Ruby on Rails Blog/Portfolio",
        'src': "images/rails_blog.png",
        'comment': ""
    }
}

describe("ExampleWorkModal component", () => {
    let component = shallow(<ExampleWorkModal example={myExample}
        open={false}/>);
    let openComponent = shallow(<ExampleWorkModal example={myExample}
        open={true}/>);

    let anchors = component.find("a");

    it("Should contain a single 'a' element", () => {
        expect(anchors.length).toEqual(1);
    });

    it("Should link to our project", () => {
        expect(anchors.node.props.href).toEqual(myExample.href);
    });

    it("Should have the modal class set correctly", () => {
        expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
        expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
    })
});