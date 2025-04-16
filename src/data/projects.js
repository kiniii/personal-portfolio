import landingPageMockupSimptel from '../assets/projectSimptel/landingpagemockup.png';
import prototypePreviewSimptel from '../assets/projectSimptel/prototypepreview.gif';
import sketchSimptel from '../assets/projectSimptel/SimptelSketch.png';
import figmaFileSimptel from '../assets/projectSimptel/figmafileoverview.png';

import figmaFileDigilution from '../assets/projectDigilution/FigmaOverviewDigilution.png';
import gitRepoDigilution from '../assets/projectDigilution/GitRepoDigilution.png';
import prototypeDemoDigilution from '../assets/projectDigilution/PrototypeDemoDigilution.mp4';
import prototypePreviewDigilution from '../assets/projectDigilution/PrototypePreviewDigilution.png';

const projects = [
 {
   id: "1",
   title: "Simptel",
   description: "The designing of a landing page for an Identity and Access Management product.",
   preview: landingPageMockupSimptel,
   image: prototypePreviewSimptel,
   category: "Web Design",
   tags: ["UX Research", "Web Design", "User Testing"],
   longDescription: "Simptel is a startup software development company. As they were in the phase of looking to enhance online presence and bringing out their then-new product, 'the Identity Platform', I designed a landing page to tackle both of these matters as part of my graduation internship.",
   gallery: [
     sketchSimptel,
     figmaFileSimptel,
     landingPageMockupSimptel
   ]
 },
 {
   id: "2",
   title: "Digilution",
   description: "Designing and developing a project management system.",
   preview: prototypePreviewDigilution,
   image: prototypeDemoDigilution,
   category: "mobile",
   tags: ["Application Development"],
   longDescription: "Digilution specialises in creating software solutions. Looking to have a centralised platform to manage their business, a former classmate and I worked on creating such a system for our first internship.",
   gallery: [
     figmaFileDigilution,
     gitRepoDigilution,
     prototypePreviewDigilution
   ]
 }
];

export default projects;