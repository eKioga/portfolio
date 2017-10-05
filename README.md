# Eric Post's Portfolio
My professional portfolio. It uses AWS and ReactJS.

This will serve as a replacement to my previous Ruby on Rails blog/portfolio that I was self hosting. After learning more about about AWS server-less pricing and functionality, I knew that I'd end up doing this sooner than later.

## Architecture 

### Front End 

- When people visit my site, they go to my domain managed by route 53. 
- Route 53 routes the request to CloudFront which distributes my portfolio site across the world. 
- CloudFront gets my portfolio from a bucket in S3. 
- The portfolio site that the visitor gets is made up of HTML, CSS, JavaScript and some images. 
- The front end uses react to provide interactivity and babel ensures that it runs on any browser. 

### Back End 

- Source code lives in Github 
- As soon as my code gets pushed to GitHub, AWS Code Build takes over and runs unit tests with Jests, packages my code with NPM, WebPack and babel then stores the results in S3. 
- CodePipeline then runs a python lambda function that deploys the code to my portfolios S3 bucket. It also triggers SNS to send an email notification letting me know that the portfolio has been successfully deployed.

## AWS Stuff I learned!

- Security and Access Control with IAM
- DNS Management: Route 53
- AWS Certificate Manager to enable https
- Object Storage with S3
- Content and SSL Cert Distribution with CloudFront
- CodeBuild to monitor the Git source and then zip the contents before uploading it to dev S3 bucket
- Lambda python function for transfering the S3 content into production and firing off an email alert through SNS.
- CodePipeline to have the source monitoring trigger the codebuild function before in turn triggering the lambda function.

## Front end stuff I leaned!

- How to create a front-end app with React.
- Page Structure with HTML
- Look and feel with CSS
- Interactivity: JavaScript (React)
- Cross-Browser Compatability with Babel
- Bundling & Asset Management with WebPack
- Package Management with NPM
- Testing with Jest (Chai & Mocha)
