/**
 * EMRL News Blog - Interactive Functionality
 * Handles filtering, load more, newsletter subscription, and UI interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initCategoryFilters();
    initLoadMore();
    initNewsletterForm();
    initSmoothScroll();
    initCardAnimations();
});

/**
 * Category Filter Functionality
 * Allows users to filter news articles by category
 */
function initCategoryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const newsCards = document.querySelectorAll('.news-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get filter value
            const filter = this.dataset.filter;

            // Filter cards with animation
            filterCards(filter, newsCards);
        });
    });
}

function filterCards(filter, cards) {
    cards.forEach((card, index) => {
        const cardCategory = card.querySelector('.category-tag').classList.contains(filter) ||
                           (filter === 'all' ||
                            (filter === 'industry' && card.querySelector('.category-tag.industry')) ||
                            (filter === 'sustainability' && card.querySelector('.category-tag.sustainability')) ||
                            (filter === 'investor' && card.querySelector('.category-tag.investor')) ||
                            (filter === 'technology' && card.querySelector('.category-tag.technology')));

        if (filter === 'all' ||
            card.querySelector(`.category-tag.${filter}`) ||
            (filter === 'industry' && card.querySelector('.category-tag.industry')) ||
            (filter === 'sustainability' && card.querySelector('.category-tag.sustainability')) ||
            (filter === 'investor' && card.querySelector('.category-tag.investor')) ||
            (filter === 'technology' && card.querySelector('.category-tag.technology'))) {
            card.style.display = '';
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';

            setTimeout(() => {
                card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(-20px)';

            setTimeout(() => {
                card.style.display = 'none';
            }, 400);
        }
    });
}

/**
 * Load More Functionality
 * Simulates loading more articles
 */
function initLoadMore() {
    const loadMoreBtn = document.querySelector('.load-more-btn');

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Add loading state
            this.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
                    <circle cx="12" cy="12" r="10" stroke-dasharray="60" stroke-dashoffset="20"/>
                </svg>
                Loading...
            `;
            this.style.pointerEvents = 'none';

            // Simulate API call delay
            setTimeout(() => {
                // Remove loading state
                this.innerHTML = `
                    Load More Articles
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 5v14M19 12l-7 7-7-7"/>
                    </svg>
                `;
                this.style.pointerEvents = '';

                // Show notification (in real implementation, would load more cards)
                showNotification('More articles coming soon!', 'success');
            }, 1500);
        });
    }
}

/**
 * Newsletter Form Handler
 */
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            const submitBtn = this.querySelector('button');
            const email = emailInput.value.trim();

            if (validateEmail(email)) {
                // Simulate subscription
                submitBtn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
                        <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    Subscribing...
                `;
                submitBtn.style.pointerEvents = 'none';

                setTimeout(() => {
                    submitBtn.innerHTML = 'Subscribed!';
                    submitBtn.style.background = '#27ae60';
                    emailInput.value = '';

                    showNotification('Successfully subscribed to our newsletter!', 'success');

                    setTimeout(() => {
                        submitBtn.innerHTML = `
                            Subscribe
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        `;
                        submitBtn.style.background = '';
                        submitBtn.style.pointerEvents = '';
                    }, 3000);
                }, 1500);
            } else {
                showNotification('Please enter a valid email address.', 'error');
                emailInput.focus();
            }
        });
    }
}

/**
 * Email Validation
 */
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Notification System
 */
function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;

    // Add styles dynamically
    notification.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 16px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-size: 14px;
        font-weight: 500;
    `;

    // Add close button styles
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.2s;
    `;
    closeBtn.addEventListener('mouseenter', () => closeBtn.style.opacity = '1');
    closeBtn.addEventListener('mouseleave', () => closeBtn.style.opacity = '0.8');

    // Close notification handler
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);

    document.body.appendChild(notification);

    // Add animation keyframes
    addAnimationStyles();
}

/**
 * Add Animation CSS Styles
 */
function addAnimationStyles() {
    if (!document.querySelector('#animation-styles')) {
        const style = document.createElement('style');
        style.id = 'animation-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateX(100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            @keyframes slideOut {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100px);
                }
            }
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * Card Hover Animations
 */
function initCardAnimations() {
    const cards = document.querySelectorAll('.news-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });

    // Intersection Observer for scroll animations
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.news-card').forEach(card => {
            observer.observe(card);
        });
    }
}

/**
 * Search Functionality (placeholder)
 */
function initSearch() {
    const searchInput = document.querySelector('.nav-search');
    // Implementation would go here for full search functionality
}

/**
 * Dynamic Article Loading (placeholder for future implementation)
 */
function loadMoreArticles(offset, limit) {
    // This would typically fetch from an API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([]);
        }, 1000);
    });
}

/**
 * Share Functionality
 */
function shareArticle(title, url) {
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        }).catch(console.error);
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(url).then(() => {
            showNotification('Link copied to clipboard!', 'success');
        }).catch(console.error);
    }
}

/**
 * Reading Time Calculator
 */
function calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

/**
 * Format Date Utility
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

/**
 * Export functionality for module
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initCategoryFilters,
        initLoadMore,
        initNewsletterForm,
        showNotification
    };
}
