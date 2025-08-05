# Development Documentation for PRRC Website
 
# Introduction

When embarking on this project, I faced a challenge before proceeding: a lack of formal structure or established framework for our web application. Initially, the website was a basic HTML, CSS, and JavaScript-run website with no organizational structure to the repository. 

My first idea was to create a github organization to house our repository and make it easier to share between developers who may be working on this project. After uploading the repository to github and installing git, I realized we also needed to apply structure to the repository. https://docs.github.com/en/get-started

As I considered the best foundation for our project, I turned to the current standards for full-stack applications, React, as it is now utilized by major companies and has become widespread in the industry. It also allows for the use modules and built-in mobile responsiveness making development easier. https://www.techmagic.co/blog/why-we-use-react-js-in-the-development/

After thorough research and evaluation, I decided instead to adopt Next.js as our front-end framework. This decision was based on several key factors that aligned with the project goals and would facilitate the creation of an application capable of handling a backend efficiently. This framework is also much more opinionated in its structure, which would make it easier for any dev to work in it as they would be able to refer to the Next.js documentation, keeping development more universal. https://nextjs.org/

To ensure ease of deployment and security, I chose to implement docker. Docker provides the ability to package and run an application in a loosely isolated environment called a container. This approach offers numerous advantages for developement by ensuring consistency across different environments, facilitating simplified deployment and scaling, enhancing security through isolation, and enabling version control and rollback capabilities. Overall, Docker's containerization  addresses many challenges associated with traditional software deployment methods, offering a more efficient and manageable approach to application development and delivery. https://www.docker.com/
### Why Next.js?

Next.js offers several advantages that made it the ideal choice for this application:

1. **Performance Optimization**: Next.js provides automatic code splitting, static generation, and server-side rendering automatically, resulting in faster load times and improved overall performance for users of the site. https://nextjs.org/docs

2. **Full-Stack Capabilities**: As a React framework, Next.js allows us to utilize React's component-based architecture while utilizing global features, making it easier for full-stack development.  https://nextjs.org/docs/app/api-reference/file-conventions 

3. **Developer Experience**: With its high opinionation, Next.js uses automatic code optimization, image optimization, and built-in support for internationalization, to reduce many of the struggles that I find to bog-up productivity when developing.

4. **SEO**: Next.js generates pre-rendered static HTML pages, which increases SEO scores by reducing initial load times.  https://nextjs.org/docs/app/building-your-application/optimizing 

5. **Modern Architecture Support**: Next.js supports modern web development patterns like Server Components, enabling us to take advantage of the latest advancements in React. It also provides security features to support safe production.  https://nextjs.org/docs/app/api-reference/components 

7. **Learning Curve**: Like many other developers I use React as a standard of current web development. Because Next.js utilizes React as a foundation, adopting this framework proved to be relatively straightforward, which can minimize the learning curve for future developers to adapt to the structure.  https://nextjs.org/docs/app/building-your-application

Next.js is also widely supported, making maintenance much easier as dependencies will not depreciate as quickly. However, I will note that the web development landscape is constantly evolving. In the future, there may be another prolific standard for development of full-stack applications. I chose this structure because it is currently the most widely adopted standard. https://keyholesoftware.com/introduction-to-web-apps-with-next-js/


# Getting Started

Before beginning development, ensure you have Git installed on your machine. Git is crucial for collaborative development and version control. You can find installation instructions at: [https://docs.github.com/en/get-started/using-git/about-git](https://docs.github.com/en/get-started/using-git/about-git)

Next, join the organization "PRRC-Website" to access the repository. Clone the repository using this URL: [https://github.com/orgs/PRRC-Website/repositories](https://github.com/orgs/PRRC-Website/repositories)

Once cloned, navigate to the development branch using the command:

`git checkout development`


**Note that the Main branch is reserved for production use. All development should be done in separate branches and pushed to the development branch. After completing updates, you can push changes from the development branch to Main to deploy to the live site.**

Since Next.js is already installed in this project, the first steps are to install Node dependencies and start the local development server:

1. Install Node dependencies:

`npm install`

2. Start the local development server:

`npm run dev`

These commands will set up your development environment and allow you to start working on the project immediately. Remember to follow Git best practices throughout your development process, such as committing frequently and pushing your changes to the remote repository regularly.

### Next.js Project Structure

You'll want to familiarize yourself with the file structure. This is important as it will create a faster work flow and keep everything organized. Next.js is an opinionated framework, it provides a very structured approach to development. It enforces certain conventions and patterns, guiding developers towards best practices. You can refer to the Next.js documentation for their project structure here https://nextjs.org/docs/getting-started/project-structure

### Main Directories

1. **prrc-next-app**
    - Contains the actual content you're looking for
    - Includes both `components` and `pages` directories

2. **prrc-app**
    - Can be ignored
    - Contains the prototype

### Key Directories and Their Contents

#### components

The first directory you will find is **components**. This is where you will find the global React components that can be called into the layouts and global router. 

- **adminCards**: Stores and calls admin profiles into the Administration.jsx layout
- **dashboard**: Mobile-responsive large photo banner appearing on the homepage
- **headers**: Editable headers for the jumbotron at the top of each page
- **layouts**: Components and page content for various pages
- **staffCards**: Similar to adminCards, stores staff profiles called into the Staff.jsx layout
- **svgContent**: Jumbotron animation function for each page

#### Node Modules

The second directory you will see is **node_modules**. These are the modules that help Next.js functionality. They are installed when you NPM install. Do not worry about these, unless for some reason they get pushed to git. **They are currently gitignored and ALWAYS should be.** You can find all ignored files in .gitignore in the bottom of the repository. https://www.freecodecamp.org/news/what-are-node-modules/

#### Public

Next, you will find the **public** directory. This is where you will find all static assets such as photos, logos, and resumes. 

The convention of naming the static asset directory "public" in Next.js serves several purposes:
1. Consistency: It follows a widely adopted convention in web development, making it familiar to developers coming from other frameworks or having experience with static file serving.
2. Clarity: The name "public" clearly indicates that these files are meant to be publicly accessible, distinguishing them from other directories that might contain internal assets or code.
3. Default Behavior: Next.js is configured to serve files from the "public" directory by default, making it the expected location for static assets.
4. Separation of Concerns: It separates static assets from the rest of the application code, promoting cleaner project organization.
5. Predictability: Developers can predict where to find static files without needing to consult documentation every time.
6. Avoiding Naming Conflicts: Using "public" avoids potential conflicts with other directories like "pages" or "src", which are used for different purposes in Next.js.

#### src

This is the directory that organizes the source code. The source code typically refers to the application-specific code that makes up the core functionality of your project
Within **src**, you will find **pages** and **styles.**
#### pages
Used for the Pages Router. Each page has its own JSX layout, routed into app.js through pageProps.
#### styles
Contains global style sheets. Note that Bootstrap is used for inline styling to maintain the prototype's styling.

###  Configuration and Functionality Files

Finally, you will find the functionality and configuration files. 
- **.gitignore**: Tracks files to prevent pushing to GitHub
- **.prettierrc**: Linter for code organization and readability
- **docker-compose.yml**: Docker configuration
- **dockerfile**: Script defining the building of a Docker image
- **jsconfig.json**: Improves development experience in JavaScript projects
- **next.config.mjs**: Customizes Next.js behavior
- **postcss.config.mjs**: Sets up PostCSS for CSS transformation with JavaScript

For the most part, unless there are major functionality problems or depreciated dependencies, you can ignore these files.

## What are Components in Next.js?

Components are the building blocks of React applications, and Next.js leverages this concept to create modular and efficient applications. Components in Next.js are:

1. Reusable pieces of code that represent UI elements
2. Contain both HTML/JSX (for structure) and JavaScript logic (for behavior)
3. Help manage and reuse code across different parts of an application

### Key Aspects of Next.js Components

1. **Naming Convention**: Components are typically named with PascalCase, e.g., `<MyComponent />`.

2. **Function Components**: Most modern React components are function components, which are simpler and more concise than class components.

3. **Props**: Components can receive data through props, allowing them to be flexible and reusable. We use these for our pages.

4. **State Management**: Components can manage their own state using React hooks like `useState`. This is mostly used for responsiveness and animation in the site.

### What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. This language is used in all the components and is pivotal to building a React application. The most complicated front-end file containing jsx is SvgWaves.jsx. You can refer to it as an example of how to use javascript if else functions and useState to return HTML. 

https://www.telerik.com/blogs/how-jsx-react-works-under-hood

# Production
### Docker

Docker is a platform-as-a-service (PaaS) product that provides lightweight, portable, and efficient software containers. It allows developers to package applications and their dependencies into standardized units called containers.

https://docs.docker.com/get-started/

#### Key features of Docker include:

- Isolation: Containers run in isolated environments with their own filesystems, networks, and processes.
- Portability: Containers can run consistently across different environments, from development to production.
- Efficiency: Containers start quickly and use fewer resources than virtual machines.

#### Docker and security

Docker improves cybersecurity in several ways:
1. Isolation: Docker containers provide strong isolation between applications and their dependencies, limiting the blast radius of potential security incidents.
2. Reduced attack surface: By packaging applications and their dependencies into containers, Docker reduces the overall attack surface compared to traditional VMs.
3. Controlled access: Docker allows fine-grained control over container permissions and access to system resources, enhancing security
https://www.docker.com/blog/container-security-and-why-it-matters/

## Hosting

Inetpub or IIS is our current server host for our website. Unfortunately, it has become depreciated. Inetpub is primarily designed for static HTML content, not dynamic server-side rendering. Server-side rendering is an application's ability to convert HTML files on the server into a fully rendered HTML page for the client. Server-side rendering has taken over as the industry standard in recent years. The advantages of server-side rendering are Faster initial page loads which improves user experience, better search engine indexability and SEO, and reduction in performance issues within the browser. We currently rely on client-side rendering with Inetpub, which is what causes slow page loads and reduced searchability. In researching my options, I think that Vercel could be a good solution. A shift towards a more modern, cloud-based hosting solution offers several advantages for deployment. It is also the standard for Next.js applications and supports SSR and SEO functions. 
### Vercel 
