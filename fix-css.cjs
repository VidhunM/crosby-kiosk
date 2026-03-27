const fs = require('fs');
const path = 'd:/GitHub/crosby-kiosk/src/index.css';
let content = fs.readFileSync(path, 'utf8');

const newStyles = `
@media (max-width: 600px) {
  .hero-headline {
    font-size: 2.2rem;
  }

  .hero-cta-group {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  .hero-cta-group .btn {
    width: 100%;
  }

  .problem-grid {
    grid-template-columns: 1fr;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .segments-grid {
    grid-template-columns: 1fr;
  }

  .how-timeline {
    grid-template-columns: 1fr;
  }

  .expertise-grid {
    grid-template-columns: 1fr;
  }

  .cta-form-container {
    padding: 1.5rem;
  }

  .legal-seal {
    width: 240px;
    height: 240px;
    padding: 1.5rem;
  }

  .seal-logo {
    width: 70px;
  }

  .seal-text {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }

  .hero-headline {
    font-size: 2rem;
  }

  .hero-subheadline {
    font-size: 1.1rem;
  }

  .hero-image-wrapper {
    max-width: 100%;
  }

  .badge {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }

  .btn {
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
  }

  .solution-visual {
    padding: 2rem 1rem;
  }

  .kiosk-box {
    width: 180px;
    height: 260px;
    padding: 1.2rem 1rem;
  }

  .el-1, .el-2, .el-3 {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
  }
}`;

// Look for the first occurrence of the 600px media query and replace everything from there to the end
const regex = /@media \(max-width: 600px\) \{[\s\S]*/;
if (regex.test(content)) {
    content = content.replace(regex, newStyles.trim());
    fs.writeFileSync(path, content);
    console.log('Successfully updated index.css');
} else {
    console.error('Could not find the 600px media query block');
    process.exit(1);
}
