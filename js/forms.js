/**
 * Icon English School - Form Validation & Inquiry Submission Engine
 * Supports Admission Inquiries & Contact Messages with WhatsApp routing & Reference IDs
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initAdmissionForm();
});

/**
 * Validates Email Address Format
 */
function isValidEmail(email) {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(String(email).toLowerCase());
}

/**
 * Validates 10-digit Indian Mobile Number
 */
function isValidIndianMobile(phone) {
  const cleaned = phone.replace(/[\s\-\+\(\)]/g, '');
  return /^[6-9]\d{9}$/.test(cleaned);
}

/**
 * Marks field as invalid with descriptive message
 */
function setFieldError(field, errorMsg) {
  field.classList.add('is-invalid');
  field.setAttribute('aria-invalid', 'true');
  const errorSpan = field.parentNode.querySelector('.form-error-msg');
  if (errorSpan) {
    errorSpan.textContent = errorMsg;
    errorSpan.style.display = 'block';
  }
}

/**
 * Clears error state on field
 */
function clearFieldError(field) {
  field.classList.remove('is-invalid');
  field.removeAttribute('aria-invalid');
  const errorSpan = field.parentNode.querySelector('.form-error-msg');
  if (errorSpan) {
    errorSpan.textContent = '';
    errorSpan.style.display = 'none';
  }
}

/**
 * Generate a unique tracking reference code
 */
function generateReferenceId(prefix) {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-2026-${randomNum}`;
}

/**
 * Displays an interactive submission confirmation modal
 */
function showConfirmationModal({ title, referenceId, name, messageText, actionUrl, actionLabel }) {
  // Remove existing modal if any
  const existing = document.getElementById('inquiry-confirmation-modal');
  if (existing) existing.remove();

  const modalHtml = `
    <div id="inquiry-confirmation-modal" class="lightbox-dialog is-open" role="dialog" aria-modal="true" aria-labelledby="modal-confirm-title">
      <div class="content-card animate-drop-in" style="max-width: 520px; width: 92%; padding: var(--space-8); text-align: center; margin: auto;">
        <div style="width: 64px; height: 64px; border-radius: var(--radius-pill); background: var(--status-success-bg); color: var(--status-success); display: flex; align-items: center; justify-content: center; margin: 0 auto var(--space-4) auto;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 id="modal-confirm-title" style="font-size: var(--text-2xl); font-weight: 800; margin-bottom: 8px;">${title}</h3>
        <p style="color: var(--text-secondary); margin-bottom: var(--space-4);">Thank you, <strong>${name}</strong>. Your inquiry has been logged successfully.</p>
        
        <div style="background-color: var(--bg-surface-alt); padding: 12px 16px; border-radius: var(--radius-md); border: 1px dashed var(--border-strong); margin-bottom: var(--space-6);">
          <span style="font-size: var(--text-xs); text-transform: uppercase; color: var(--text-muted); font-weight: 700; letter-spacing: 0.05em;">Inquiry Reference ID</span>
          <div style="font-family: var(--font-family-display); font-size: 1.35rem; font-weight: 800; color: var(--brand-primary); margin-top: 2px;">${referenceId}</div>
        </div>

        <p style="font-size: var(--text-sm); color: var(--text-secondary); line-height: 1.5; margin-bottom: var(--space-6);">
          ${messageText}
        </p>

        <div class="btn-group justify-center" style="flex-direction: column; width: 100%;">
          ${actionUrl ? `<a href="${actionUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-block" style="gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 2C6.495 2 2 6.495 2 12.031a9.98 9.98 0 0 0 1.609 5.46L2.3 22l4.662-1.312a9.97 9.97 0 0 0 5.069 1.343h.005c5.535 0 10.031-4.496 10.031-10.031A10.036 10.036 0 0 0 12.031 2zm0 18.36a8.31 8.31 0 0 1-4.24-1.154l-.304-.18-3.15.886.84-3.07-.197-.315a8.28 8.28 0 0 1-1.272-4.496c0-4.588 3.733-8.32 8.324-8.32a8.27 8.27 0 0 1 5.886 2.438 8.27 8.27 0 0 1 2.434 5.885c0 4.59-3.732 8.326-8.321 8.326z"/>
            </svg>
            ${actionLabel || 'Send Details via WhatsApp'}
          </a>` : ''}
          <a href="tel:+919527749595" class="btn btn-outline btn-block">
            Call Campus Desk: 9527749595
          </a>
          <button type="button" id="modal-close-confirm" class="btn btn-sm" style="color: var(--text-muted); background: transparent; border: none; margin-top: 8px;">
            Close Window
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  document.body.style.overflow = 'hidden';

  const modalEl = document.getElementById('inquiry-confirmation-modal');
  const closeBtn = document.getElementById('modal-close-confirm');

  function closeModal() {
    modalEl.remove();
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) closeModal();
  });
}

/**
 * Contact Us Page Form Handler
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const phoneInput = document.getElementById('contact-phone');
  const enquiryInput = document.getElementById('contact-enquiry');

  // Clear errors on input
  [nameInput, emailInput, phoneInput, enquiryInput].forEach(input => {
    if (input) {
      input.addEventListener('input', () => clearFieldError(input));
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    let firstErrorField = null;

    // Validate Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      setFieldError(nameInput, 'Please enter your full name (at least 2 characters).');
      isValid = false;
      if (!firstErrorField) firstErrorField = nameInput;
    }

    // Validate Email
    if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
      setFieldError(emailInput, 'Please provide a valid email address.');
      isValid = false;
      if (!firstErrorField) firstErrorField = emailInput;
    }

    // Validate Optional Phone
    if (phoneInput.value.trim() && !isValidIndianMobile(phoneInput.value.trim())) {
      setFieldError(phoneInput, 'Please enter a valid 10-digit mobile number.');
      isValid = false;
      if (!firstErrorField) firstErrorField = phoneInput;
    }

    // Validate Enquiry
    if (!enquiryInput.value.trim() || enquiryInput.value.trim().length < 8) {
      setFieldError(enquiryInput, 'Please describe your query (minimum 8 characters).');
      isValid = false;
      if (!firstErrorField) firstErrorField = enquiryInput;
    }

    if (!isValid) {
      if (firstErrorField) firstErrorField.focus();
      return;
    }

    // Prepare WhatsApp Message Link
    const refId = generateReferenceId('IES-CNT');
    const senderName = nameInput.value.trim();
    const senderPhone = phoneInput.value.trim() || 'Not Provided';
    const senderEmail = emailInput.value.trim();
    const senderEnquiry = enquiryInput.value.trim();

    const waText = encodeURIComponent(
      `*New Contact Inquiry - Icon English School*\n` +
      `*Ref:* ${refId}\n` +
      `*Name:* ${senderName}\n` +
      `*Phone:* ${senderPhone}\n` +
      `*Email:* ${senderEmail}\n` +
      `*Message:* ${senderEnquiry}\n` +
      `_Sent via Website (Jyotinagar Campus)_`
    );

    const waUrl = `https://wa.me/919527749595?text=${waText}`;

    showConfirmationModal({
      title: 'Inquiry Logged!',
      referenceId: refId,
      name: senderName,
      messageText: 'Our administrative coordinator, Mr. Shivkumar Niyogi, has received your message and will get in touch shortly.',
      actionUrl: waUrl,
      actionLabel: 'Chat Directly with Shivkumar Niyogi on WhatsApp'
    });

    form.reset();
  });
}

/**
 * Admission Page Form Handler
 */
function initAdmissionForm() {
  const form = document.getElementById('admission-form');
  if (!form) return;

  const studentNameInput = document.getElementById('adm-student-name');
  const gradeInput = document.getElementById('adm-grade');
  const parentNameInput = document.getElementById('adm-parent-name');
  const mobileInput = document.getElementById('adm-mobile');
  const emailInput = document.getElementById('adm-email');
  const queryInput = document.getElementById('adm-query');

  [studentNameInput, gradeInput, parentNameInput, mobileInput, emailInput, queryInput].forEach(input => {
    if (input) {
      input.addEventListener('input', () => clearFieldError(input));
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    let firstErrorField = null;

    if (!studentNameInput.value.trim() || studentNameInput.value.trim().length < 2) {
      setFieldError(studentNameInput, "Please enter student's full name.");
      isValid = false;
      if (!firstErrorField) firstErrorField = studentNameInput;
    }

    if (!gradeInput.value) {
      setFieldError(gradeInput, 'Please select the grade/standard applying for.');
      isValid = false;
      if (!firstErrorField) firstErrorField = gradeInput;
    }

    if (!parentNameInput.value.trim() || parentNameInput.value.trim().length < 2) {
      setFieldError(parentNameInput, "Please enter parent or guardian's full name.");
      isValid = false;
      if (!firstErrorField) firstErrorField = parentNameInput;
    }

    if (!mobileInput.value.trim() || !isValidIndianMobile(mobileInput.value.trim())) {
      setFieldError(mobileInput, 'Please provide a valid 10-digit mobile number.');
      isValid = false;
      if (!firstErrorField) firstErrorField = mobileInput;
    }

    if (emailInput.value.trim() && !isValidEmail(emailInput.value.trim())) {
      setFieldError(emailInput, 'Please provide a valid email address.');
      isValid = false;
      if (!firstErrorField) firstErrorField = emailInput;
    }

    if (!isValid) {
      if (firstErrorField) firstErrorField.focus();
      return;
    }

    const refId = generateReferenceId('IES-ADM');
    const sName = studentNameInput.value.trim();
    const grade = gradeInput.value;
    const pName = parentNameInput.value.trim();
    const mobile = mobileInput.value.trim();
    const email = emailInput.value.trim() || 'Not Provided';
    const notes = queryInput.value.trim() || 'Admission Inquiry';

    const waText = encodeURIComponent(
      `*Admission Application Inquiry - Icon English School*\n` +
      `*Inquiry Ref:* ${refId}\n` +
      `*Student Name:* ${sName}\n` +
      `*Class Applying For:* ${grade}\n` +
      `*Parent/Guardian:* ${pName}\n` +
      `*Contact Mobile:* ${mobile}\n` +
      `*Email:* ${email}\n` +
      `*Notes:* ${notes}\n` +
      `_Submitted via Icon English School Online Admission Portal_`
    );

    const waUrl = `https://wa.me/919527749595?text=${waText}`;

    showConfirmationModal({
      title: 'Admission Application Received!',
      referenceId: refId,
      name: pName,
      messageText: `Your admission inquiry for <strong>${sName}</strong> (Grade: ${grade}) has been successfully submitted to the admissions office. Please visit our Jyotinagar campus or click below to connect with Mr. Shivkumar Niyogi immediately on WhatsApp.`,
      actionUrl: waUrl,
      actionLabel: 'Complete Inquiry via WhatsApp'
    });

    form.reset();
  });
}

