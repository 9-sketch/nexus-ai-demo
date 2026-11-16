document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // Trigger hero animations immediately
    setTimeout(() => {
        document.querySelectorAll('.hero .fade-up').forEach(el => el.classList.add('visible'));
    }, 100);

    // 2. Monthly / Annual Pricing Switch
    const billingSwitch = document.getElementById('billingSwitch');
    const monthlyLabel = document.getElementById('monthlyLabel');
    const annualLabel = document.getElementById('annualLabel');
    const priceAmounts = document.querySelectorAll('.amount');
    let isAnnual = false;

    if (billingSwitch) {
        billingSwitch.addEventListener('click', () => {
            isAnnual = !isAnnual;
            billingSwitch.classList.toggle('annual', isAnnual);
            monthlyLabel.classList.toggle('active', !isAnnual);
            annualLabel.classList.toggle('active', isAnnual);

            priceAmounts.forEach(amount => {
                const targetPrice = isAnnual ? amount.dataset.annual : amount.dataset.monthly;
                amount.style.opacity = '0';
                setTimeout(() => {
                    amount.textContent = targetPrice;
                    amount.style.opacity = '1';
                }, 150);
            });
        });
    }

    // 3. FAQ Accordion
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            accordionItems.forEach(i => i.classList.remove('open'));
            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });

    // 4. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            const isFlex = navLinks.style.display === 'flex';
            navLinks.style.display = isFlex ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '72px';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = '#0d0e17';
            navLinks.style.padding = '20px 24px';
            navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
        });
    }
});
