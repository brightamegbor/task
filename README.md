# Solution for below task (React App)

Overview
Using React JS, create a simple Form Template Search Interface, with the form templates provided from a public Rest API. The basic requirements of this task must be fulfilled to be considered as passed. Further creative approaches are of course welcome and will count as a bonus but it’s not required. 

Please read through this document extensively.
Website layout
We created a Figma design to assist with this here. You are to replicate this design as closely as possible.
API Endpoint
URI: https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates
METHOD: GET
Response:
   [
      Template {
                 name: string <Template name>,
                 created: string <Template creation date in iso format>,
                 category: array[string] <Categories assigned to the template>
                 description: string <Template description>
                 link: string <Template link>
              }
 ]

Sample request:
   curl \ "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates" \
 -X GET 














Sample response:
   [
  {
    "name": "Blood donation form template",
    "created": "2020-11-04T16:26:44.666569",
    "category": [‘Health’],
    "description": "Testing template",
    "link": "",
   },
  {
    "name": "Scholarship form template",
    "created": "2020-12-04T16:26:44.666569",
    "category": [‘Education’],
    "description": "Sample scholarship template",
    "link": "https://formpl.us",
   }
 ]

Basic requirements
Please try to make the final product look good and work as expected.
Please do not use any CSS framework like Bootstrap, Semantic UI, Material UI, etc. for this task. Write your styles CSS from scratch, but you can use CSS-in-JS, CSS modules, Tailwind, or SCSS for pre-processing.
This web application should be responsive; it should look great on mobile and tablet screens.
Use a component-based approach and try to ensure your code is written in reusable blocks.
Optimize for a good user experience and add some level of performance improvements.
ReduxToolkit is preferred for state management, but this is optional and up to your discretion.
You can also set up some form of linting or formatting for development if you want to.
Write at least one test with any library of your choice
Functional Requirements
There are 3 template categories; Only one category can be active at any time.
The active category is displayed as the Header of the Template Cards. E.g If the active category is Agriculture, the header should be “Agriculture Templates”
“All templates” is active by default. Changing the category section resets all other filters and the Search bar value.
Template category can either be "All", "Education", "E-commerce" or "Health".
Users should also be able to search through each template category individually using only their template names.
There are two additional filters for the templates - Alphabetical order (based on template names) and Date Created. Users should be able to filter each template category based on either not both (reset the other filter when one is active).
The Alphabetical Order filter can either be "Default", "Ascending" or "Descending" order
The Date created filter can either be "Default", "Ascending" or "Descending" order
The template links don’t need to be active

