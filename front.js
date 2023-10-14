function downloadFile(linkId, linkHref) {
    const downloadButton = document.getElementById(linkId);

    downloadButton.addEventListener('click', function () {
        const a = document.createElement('a');
        a.href = linkHref;
        a.download = linkHref.split('/').pop(); // Set the filename for download
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}

// Call the function for each download link
downloadFile('download-button-1', './global.css');


  // Function to handle smooth scrolling
  function scrollToSection(target) {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  // Add click event listeners to your links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      scrollToSection(targetId);
    });
  });

