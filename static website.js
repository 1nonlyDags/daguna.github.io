document.getElementById('homeLink').addEventListener('click', function() {
    alert('Home button clicked');
 });
 document.getElementById('aboutMeLink').addEventListener('click', function() {
    alert('About Me button clicked');
 });
 document.getElementById('contactInformationLink').addEventListener('click', function() {
    alert('Contact Information button clicked');
 });
 document.getElementById('biographyLink').addEventListener('click', function() {
    alert('Biography button clicked');
 });
 document.getElementById('resumeCvLink').addEventListener('click', function() {
    alert('Resume/CV button clicked');
 });
 // New event listeners
 document.getElementById('portfolioLink').addEventListener('click', function() {
    alert('Portfolio button clicked');
 });
 document.getElementById('articlesLink').addEventListener('click', function() {
    alert('Articles button clicked');
 });
 document.addEventListener('DOMContentLoaded', function () {
   function refreshPage() {
      location.reload();
  }
  
  document.addEventListener('DOMContentLoaded', function () {
  
   function handleNavClick(e) {
       e.preventDefault();
 
       document.querySelectorAll('.column').forEach(column => {
           column.classList.remove('selected');
       });
 
       const targetSection = document.querySelector(e.currentTarget.getAttribute('href'));
       if (targetSection) {
           targetSection.scrollIntoView({
               behavior: 'smooth'
           });
 
           const correspondingColumn = document.querySelector(`.column[id="${targetSection.id}"]`);
           if (correspondingColumn) {
               correspondingColumn.classList.add('selected');
           }
       }
   }
 
   document.querySelectorAll('.nav-link').forEach(anchor => {
       anchor.addEventListener('click', handleNavClick);
   });
 }); })
