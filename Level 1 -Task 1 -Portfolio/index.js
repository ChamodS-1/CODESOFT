let sections = document.querySelectorAll(".iconsHolder img");
window.onscroll = function fadeIn() {
    sections.forEach(section => {
        let sectionSize = section.getBoundingClientRect();
        let bottomPart = sectionSize.bottom;
        if (window.scrollY >= bottomPart) {
            section.style.opacity = "1";
            section.style.transform = "translateX(0)";
            section.style.transition = "1s ease-in-out";
        } else {
            section.style.opacity = "0";
            section.style.transform = "translateX(-20px)";
            section.style.transition = "1s ease-in-out";
        }
    });
}

let sections2 = document.querySelectorAll(".aboutDetails");
window.onscroll = function fadeIn() {
    sections.forEach(section => {
        let sectionSize = section.getBoundingClientRect();
        let bottomPart = sectionSize.bottom;
        if (window.scrollY >= bottomPart) {
            section.style.opacity = "1";
            section.style.transform = "translateX(0)";
            section.style.transition = "1s ease-in-out";
        } else {
            section.style.opacity = "0";
            section.style.transform = "translateX(-20px)";
            section.style.transition = "1s ease-in-out";
        }
    });
}


document.getElementById('downloadCV').addEventListener('click', function() {
    // Replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
    const pdfPath = 'Chamod Basnayake.pdf';
    
    // Create an anchor element
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'MyCV.pdf'; // The name you want for the downloaded file
    
    // Append the anchor to the body and trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  