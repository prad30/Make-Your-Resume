function downloadResume() {
    const resume = document.getElementById('resume-container');
    const options = {
      margin: 0.5,
      filename: 'Resume.pdf',
      image: { type: 'pdf', quality: 2 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().set(options).from(resume).save();
  }