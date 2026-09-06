document.addEventListener('DOMContentLoaded', () => {
  const scrollToFormBtn = document.getElementById('scrollToFormBtn');
  const formSection = document.getElementById('formSection');
  const problemForm = document.getElementById('problemForm');
  const problemTextarea = document.getElementById('problemText');
  const charCounter = document.getElementById('charCounter');
  const successMessage = document.getElementById('successMessage');

  // Smooth Scroll from Top CTA to Form Card
  scrollToFormBtn.addEventListener('click', () => {
    formSection.scrollIntoView({ behavior: 'smooth' });
    problemTextarea.focus();
  });

  // Dynamic Character Counter for Textarea
  problemTextarea.addEventListener('input', () => {
    const currentLength = problemTextarea.value.length;
    charCounter.textContent = `${currentLength}/500`;
  });

  // Form Submission Handling
  problemForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const problemText = problemTextarea.value.trim();
    const category = document.getElementById('categorySelect').value;
    const frequency = document.getElementById('frequencySelect').value;
    const irritation = document.getElementById('irritationSelect').value;

    // Basic Validation Check
    if (!problemText || !category || !frequency || !irritation) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    // Console Log Simulated Data Submission
    console.log('Submitted Problem:', {
      problemText,
      category,
      frequency,
      irritationLevel: irritation,
      timestamp: new Date().toISOString()
    });

    // Reset Form & Show Success Banner
    problemForm.reset();
    charCounter.textContent = '0/500';
    successMessage.style.display = 'flex';

    // Auto Hide Success Banner after 5 Seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 5000);
  });
});
