// Honey Bears Bakery — Part 3 JavaScript
// Features: Search Filter, Lightbox Gallery, Form Validation

// ==========================================
// 1. PRODUCT SEARCH / FILTER
// ==========================================
const searchInput = document.getElementById('search-input');
const productItems = document.querySelectorAll('.product-item');

if (searchInput && productItems.length > 0) {
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase().trim();
        
        productItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            // Show if matches search or search is empty, otherwise hide
            if (searchTerm === '' || itemText.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// ==========================================
// 2. LIGHTBOX GALLERY
// ==========================================
const galleryThumbs = document.querySelectorAll('.gallery-thumb');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

if (galleryThumbs.length > 0 && lightbox) {
    // Open lightbox on thumbnail click
    galleryThumbs.forEach(thumb => {
        thumb.addEventListener('click', function () {
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close when clicking X
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    // Close when clicking outside image
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        lightboxImg.src = '';
    }
}

// ==========================================
// 3. ENQUIRY FORM VALIDATION
// ==========================================
const enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const successMsg = document.getElementById('enquiry-success');
        const errorMsg = document.getElementById('enquiry-error');
        
        // Reset messages
        successMsg.style.display = 'none';
        errorMsg.style.display = 'none';
        
        // Basic validation
        if (fullname === '') {
            errorMsg.textContent = '⚠️ Please enter your full name.';
            errorMsg.style.display = 'block';
            return;
        }
        
        // Email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMsg.textContent = '⚠️ Please enter a valid email address.';
            errorMsg.style.display = 'block';
            return;
        }
        
        if (phone === '') {
            errorMsg.textContent = '⚠️ Please enter your phone number.';
            errorMsg.style.display = 'block';
            return;
        }
        
        // SUCCESS: Show message & reset form
        successMsg.style.display = 'block';
        enquiryForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
    });
}

// ==========================================
// 4. CONTACT FORM VALIDATION
// ==========================================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        const successMsg = document.getElementById('contact-success');
        const errorMsg = document.getElementById('contact-error');
        
        // Reset messages
        successMsg.style.display = 'none';
        errorMsg.style.display = 'none';
        
        // Validation
        if (name === '') {
            errorMsg.textContent = '⚠️ Please enter your name.';
            errorMsg.style.display = 'block';
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorMsg.textContent = '⚠️ Please enter a valid email address.';
            errorMsg.style.display = 'block';
            return;
        }
        
        if (subject === '') {
            errorMsg.textContent = '⚠️ Please select a subject.';
            errorMsg.style.display = 'block';
            return;
        }
        
        if (message === '') {
            errorMsg.textContent = '⚠️ Please write your message.';
            errorMsg.style.display = 'block';
            return;
        }
        
        // SUCCESS
        successMsg.style.display = 'block';
        contactForm.reset();
        
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
    });
}

