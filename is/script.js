// ============================================================
// أكاديمية سحر قمر — script.js
// يعمل بوضعين: يحاول القراءة من الباك اند (PHP+MySQL) عبر fetch،
// وإن تعذّر ذلك (تشغيل الملفات مباشرة بدون سيرفر) يستخدم بيانات محلية تجريبية.
// ============================================================

const API_BASE = 'backend/api/';

// ----- بيانات تجريبية احتياطية (تُستخدم إن لم يتوفر سيرفر PHP) -----
const coursesData = [
    { id:1, title:'أساسيات JavaScript', description:'تعلم أساسيات لغة JavaScript من الصفر مع تمارين عملية.', category:'برمجة', price:'مجاني', duration:'ساعتان', instructor:'أحمد السيد', lectures:12,
      fullDescription:'هذه الدورة تغطي جميع أساسيات JavaScript بدءاً من المتغيرات وصولاً إلى الدوال والكائنات. ستقوم ببناء مشاريع صغيرة تطبق فيها ما تعلمته.' },
    { id:2, title:'تصميم واجهات UX/UI', description:'تعلم مبادئ تصميم تجربة المستخدم وواجهات المستخدم.', category:'تصميم', price:'199 ريال', duration:'3 ساعات', instructor:'سارة الناصر', lectures:8,
      fullDescription:'دورة شاملة في تصميم UX/UI تشمل الأبحاث، تصميم الشخصيات، النماذج الأولية، واختبارات المستخدم. ستتعلم أدوات مثل Figma.' },
    { id:3, title:'محادثة اللغة الإنجليزية', description:'دورة تفاعلية لتحسين مهارات المحادثة اليومية.', category:'لغات', price:'149 ريال', duration:'4 ساعات', instructor:'نورة الحارثي', lectures:10,
      fullDescription:'تركز الدورة على المحادثات اليومية، المصطلحات الشائعة، والنطق الصحيح. تتضمن جلسات محاكاة للحوارات الواقعية.' },
    { id:4, title:'تطوير الذات وإدارة الوقت', description:'تعلم كيفية تنظيم وقتك وزيادة إنتاجيتك.', category:'تطوير ذاتي', price:'89 ريال', duration:'ساعة ونصف', instructor:'خالد الغامدي', lectures:6,
      fullDescription:'دورة عملية تقدم استراتيجيات فعالة لإدارة الوقت، تحديد الأهداف، والتغلب على التسويف. تتضمن تمارين تطبيقية.' },
    { id:5, title:'مقدمة في Python', description:'تعلم أساسيات لغة Python للمبتدئين.', category:'برمجة', price:'مجاني', duration:'3 ساعات', instructor:'أحمد السيد', lectures:10,
      fullDescription:'تغطي الدورة أساسيات Python مثل المتغيرات، الشروط، الحلقات، والدوال. ستقوم بإنشاء برامج بسيطة.' },
    { id:6, title:'تصميم الجرافيك باستخدام Canva', description:'تعلم تصميم تصاميم احترافية باستخدام Canva.', category:'تصميم', price:'99 ريال', duration:'ساعتان', instructor:'سارة الناصر', lectures:7,
      fullDescription:'ستتعلم في هذه الدورة استخدام Canva لإنشاء تصاميم للتواصل الاجتماعي، العروض التقديمية، والمواد التسويقية بسهولة.' },
    { id:7, title:'تطوير الويب باستخدام React', description:'ابنِ واجهات تفاعلية حديثة باستخدام مكتبة React.', category:'برمجة', price:'249 ريال', duration:'6 ساعات', instructor:'محمد إدريس', lectures:18,
      fullDescription:'دورة متقدمة تغطي المكونات، الحالة (State)، الخطافات (Hooks)، والتوجيه بين الصفحات. ستبني مشروعاً كاملاً من الصفر حتى النشر.' },
    { id:8, title:'أساسيات قواعد البيانات SQL', description:'تعلم كتابة استعلامات SQL وتصميم قواعد بيانات فعّالة.', category:'برمجة', price:'مجاني', duration:'3 ساعات', instructor:'أحمد السيد', lectures:9,
      fullDescription:'تغطي الدورة أساسيات SELECT وJOIN والفهرسة، وتصميم جداول قواعد البيانات العلائقية بشكل صحيح وآمن.' },
    { id:9, title:'تصميم الهوية البصرية', description:'تعلم بناء هوية بصرية متكاملة للعلامات التجارية.', category:'تصميم', price:'179 ريال', duration:'4 ساعات', instructor:'سارة الناصر', lectures:11,
      fullDescription:'من اختيار الألوان والخطوط إلى تصميم الشعار ودليل الهوية البصرية الكامل، دورة عملية لبناء علامة تجارية مميزة.' },
    { id:10, title:'اللغة الإنجليزية للأعمال', description:'طوّر مهاراتك في التواصل المهني والمراسلات بالإنجليزية.', category:'لغات', price:'199 ريال', duration:'5 ساعات', instructor:'نورة الحارثي', lectures:14,
      fullDescription:'دورة موجهة لبيئة العمل: كتابة الإيميلات، إدارة الاجتماعات، والعروض التقديمية باللغة الإنجليزية بثقة.' },
    { id:11, title:'أساسيات اللغة الفرنسية', description:'ابدأ رحلتك في تعلم اللغة الفرنسية من الصفر.', category:'لغات', price:'129 ريال', duration:'4 ساعات', instructor:'ليلى منصور', lectures:12,
      fullDescription:'تغطي الدورة الأبجدية، التحيات، الجمل الأساسية، وقواعد النطق الصحيحة للمبتدئين تماماً.' },
    { id:12, title:'فن القيادة وبناء الفريق', description:'اكتسب مهارات القيادة الفعالة وإدارة الفرق بنجاح.', category:'تطوير ذاتي', price:'149 ريال', duration:'ساعتان ونصف', instructor:'خالد الغامدي', lectures:8,
      fullDescription:'دورة عملية حول أنماط القيادة، التحفيز، حل النزاعات، وبناء ثقافة فريق عمل متماسكة وفعالة.' }
];

let commentsData = [
    { id:101, name:'فهد الزهراني', comment:'دورة ممتازة، استفدت منها كثيراً.', date:'2026-06-24' },
    { id:102, name:'منى الدوسري', comment:'أتمنى أن تكون هناك دورة متقدمة للمستوى التالي.', date:'2026-06-23' }
];

const categoryIcons = { 'برمجة':'💻', 'تصميم':'🎨', 'لغات':'🗣️', 'تطوير ذاتي':'🌱' };
const categoryImages = {
    'برمجة':        'images/course-programming.svg',
    'تصميم':        'images/course-design.svg',
    'لغات':         'images/course-languages.svg',
    'تطوير ذاتي':   'images/course-self-dev.svg'
};
const defaultCourseImage = 'images/course-programming.svg';

// ----- محاولة الجلب من الباك اند مع رجوع تلقائي للبيانات المحلية -----
async function fetchJSON(url, fallback){
    try{
        const res = await fetch(url, { headers:{ 'Accept':'application/json' } });
        if(!res.ok) throw new Error('bad status');
        const data = await res.json();
        if(data && data.success) return data.data;
        throw new Error('bad payload');
    }catch(err){
        return fallback;
    }
}

// ============================================================
// عرض بطاقات الدورات
// ============================================================
function renderCourseCard(course){
    const icon = categoryIcons[course.category] || '📘';
    const image = categoryImages[course.category] || defaultCourseImage;
    const t = (window.getCurrentLang && getCurrentLang() === 'en') ? { details:'View Details' } : { details:'عرض التفاصيل' };
    return `
        <div class="course-card" data-category="${course.category}">
            <div class="course-cover">
                <img src="${image}" alt="${course.title}" loading="lazy" width="600" height="360" />
                <span class="course-cover-icon">${icon}</span>
            </div>
            <div class="course-body">
                <span class="course-tag">${course.category}</span>
                <h4>${course.title}</h4>
                <p class="desc">${course.description}</p>
                <div class="course-meta"><span>⏱ ${course.duration}</span><span>👨‍🏫 ${course.instructor}</span></div>
                <p class="price">${course.price}</p>
                <button class="btn-sm" onclick="viewCourseDetail(${course.id})">${t.details}</button>
            </div>
        </div>
    `;
}

function renderCourses(courses, containerId){
    const container = document.getElementById(containerId);
    if(!container) return;
    if(!courses || courses.length === 0){
        const msg = (window.getCurrentLang && getCurrentLang() === 'en') ? 'No courses match this filter.' : 'لا توجد دورات تطابق الفلترة.';
        container.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--text-soft);">${msg}</p>`;
        return;
    }
    container.innerHTML = courses.map(c => renderCourseCard(c)).join('');
}

function viewCourseDetail(id){ window.location.href = `details.html?id=${id}`; }
window.viewCourseDetail = viewCourseDetail;

// ============================================================
// تهيئة الصفحات
// ============================================================
document.addEventListener('DOMContentLoaded', async function(){
    const path = window.location.pathname.split('/').pop() || 'index.html';

    // ----- صفحة الدورات -----
    if(path === 'courses.html'){
        const courses = await fetchJSON(API_BASE + 'get_courses.php', coursesData);
        window.__allCourses = courses;
        renderCourses(courses, 'coursesGrid');

        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function(){
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const category = this.dataset.category;
                const filtered = (category === 'all') ? courses : courses.filter(c => c.category === category);
                renderCourses(filtered, 'coursesGrid');
            });
        });

        document.addEventListener('langChanged', () => {
            const activeBtn = document.querySelector('.filter-btn.active');
            const category = activeBtn ? activeBtn.dataset.category : 'all';
            const filtered = (category === 'all') ? courses : courses.filter(c => c.category === category);
            renderCourses(filtered, 'coursesGrid');
        });
    }

    // ----- صفحة تفاصيل الدورة -----
    if(path === 'details.html'){
        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get('id'));
        const courses = await fetchJSON(API_BASE + 'get_courses.php', coursesData);
        let course = courses.find(c => c.id === id) || courses[0];

        function renderDetail(){
            const detailCard = document.getElementById('detailCard');
            const icon = categoryIcons[course.category] || '📘';
            const image = categoryImages[course.category] || defaultCourseImage;
            const en = window.getCurrentLang && getCurrentLang() === 'en';
            const L = en ? { instr:'Instructor', dur:'Duration', lec:'Lectures', price:'Price' }
                         : { instr:'المدرب', dur:'المدة', lec:'عدد المحاضرات', price:'السعر' };
            if(detailCard){
                detailCard.innerHTML = `
                    <div class="detail-cover-wrap">
                        <img src="${image}" alt="${course.title}" loading="lazy" width="600" height="360" />
                    </div>
                    <div class="detail-hero">
                        <span class="detail-cover">${icon}</span>
                        <h2>${course.title}</h2>
                    </div>
                    <div class="detail-body">
                        <p class="meta"><strong>${L.instr}:</strong> ${course.instructor} &nbsp;|&nbsp; <strong>${L.dur}:</strong> ${course.duration} &nbsp;|&nbsp; <strong>${L.lec}:</strong> ${course.lectures}</p>
                        <p class="meta"><strong>${L.price}:</strong> ${course.price}</p>
                        <div class="full-desc">${course.fullDescription}</div>
                    </div>
                `;
            }
        }
        renderDetail();
        document.addEventListener('langChanged', renderDetail);

        async function loadComments(){
            const data = await fetchJSON(API_BASE + `get_comments.php?course_id=${course.id}`, commentsData);
            return data;
        }
        let currentComments = await loadComments();

        function renderComments(){
            const container = document.getElementById('commentsContainer');
            if(!container) return;
            if(currentComments.length === 0){
                container.innerHTML = '<p style="color:var(--text-soft);">لا توجد تعليقات حالياً. كن أول من يعلق!</p>';
                return;
            }
            container.innerHTML = currentComments.map(c => `
                <div class="comment-item">
                    <strong>${c.name}</strong>
                    <span class="comment-date">${c.date || ''}</span>
                    <p>${c.comment}</p>
                </div>
            `).join('');
        }
        renderComments();

        const commentForm = document.getElementById('commentForm');
        const msgDiv = document.getElementById('commentMessage');
        if(commentForm){
            commentForm.addEventListener('submit', async function(e){
                e.preventDefault();
                const name = document.getElementById('commentName').value.trim();
                const comment = document.getElementById('commentText').value.trim();
                if(!name || !comment){
                    msgDiv.style.color = '#c0392b';
                    msgDiv.textContent = '⚠️ الرجاء ملء جميع الحقول.';
                    return;
                }
                try{
                    const res = await fetch(API_BASE + 'add_comment.php', {
                        method:'POST', headers:{'Content-Type':'application/json'},
                        body: JSON.stringify({ course_id: course.id, name, comment })
                    });
                    const data = await res.json();
                    if(!data.success) throw new Error();
                }catch(err){
                    currentComments.push({ id:Date.now(), name, comment, date:new Date().toISOString().slice(0,10) });
                }
                renderComments();
                msgDiv.style.color = '#0E7A66';
                msgDiv.textContent = '✅ تم إضافة تعليقك بنجاح!';
                commentForm.reset();
            });
        }
    }

    // ----- صفحة التواصل -----
    if(path === 'contact.html'){
        const form = document.getElementById('contactForm');
        const successDiv = document.getElementById('contactSuccess');
        if(form){
            form.addEventListener('submit', async function(e){
                e.preventDefault();
                const name = document.getElementById('contactName').value.trim();
                const email = document.getElementById('contactEmail').value.trim();
                const phone = document.getElementById('contactPhone').value.trim();
                const message = document.getElementById('contactMessage').value.trim();

                if(!name || !email || !phone || !message){
                    successDiv.style.color = '#c0392b';
                    successDiv.textContent = '⚠️ الرجاء ملء جميع الحقول.';
                    return;
                }
                try{
                    await fetch(API_BASE + 'contact.php', {
                        method:'POST', headers:{'Content-Type':'application/json'},
                        body: JSON.stringify({ name, email, phone, message })
                    });
                }catch(err){ /* تجاهل، تعمل الواجهة بدون سيرفر */ }

                successDiv.style.color = '#0E7A66';
                successDiv.textContent = '📨 تم إرسال رسالتك، سنتواصل معك قريباً.';
                form.reset();
            });
        }
    }

    // ----- قائمة التنقل (همبرجر تعمل في كل الشاشات) -----
    const toggleBtn = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if(toggleBtn && navMenu){
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('open');
            toggleBtn.classList.toggle('active');
        });
        document.addEventListener('click', (e) => {
            if(!navMenu.contains(e.target) && !toggleBtn.contains(e.target)){
                navMenu.classList.remove('open');
                toggleBtn.classList.remove('active');
            }
        });
    }

    // ----- حركات ظهور تدريجي عند التمرير -----
    const revealTargets = document.querySelectorAll(
        '.feature-card, .course-card, .about-card, .stat-box, .team-member, .path-step, .detail-card, .contact-info, .contact-form-card, .cta-band, .login-card'
    );
    revealTargets.forEach(el => el.classList.add('reveal'));
    if('IntersectionObserver' in window){
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('in-view');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealTargets.forEach(el => io.observe(el));
    }else{
        revealTargets.forEach(el => el.classList.add('in-view'));
    }

    // ----- الأرقام المتحركة (عد تصاعدي عند الظهور) -----
    const counters = document.querySelectorAll('.counter');
    function animateCounter(el){
        const target = parseFloat(el.dataset.target || '0');
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const duration = 1600;
        const startTime = performance.now();
        function tick(now){
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const value = target * eased;
            const shown = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString('en-US');
            el.textContent = prefix + shown + suffix;
            if(progress < 1) requestAnimationFrame(tick);
            else el.textContent = prefix + (decimals > 0 ? target.toFixed(decimals) : target.toLocaleString('en-US')) + suffix;
        }
        requestAnimationFrame(tick);
    }
    if(counters.length){
        if('IntersectionObserver' in window){
            const cIo = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting){ animateCounter(entry.target); cIo.unobserve(entry.target); }
                });
            }, { threshold: 0.4 });
            counters.forEach(el => cIo.observe(el));
        }else{
            counters.forEach(el => animateCounter(el));
        }
    }
});

// ============================================================
// حالة تسجيل الدخول في القائمة العلوية (دخول ↔ خروج)
// ============================================================
function updateAuthUI(){
    const link = document.getElementById('navAuthLink');
    if(!link) return;
    const lang = (window.getCurrentLang && getCurrentLang()) || 'ar';
    const raw = localStorage.getItem('loggedInUser');
    let user = null;
    try{ user = raw ? JSON.parse(raw) : null; }catch(e){ user = null; }

    if(user){
        link.removeAttribute('data-i18n');
        link.href = '#';
        const label = (lang === 'en') ? '🚪 Logout' : '🚪 تسجيل خروج';
        link.textContent = user.name ? `${label} — ${user.name}` : label;
        link.onclick = function(e){
            e.preventDefault();
            localStorage.removeItem('loggedInUser');
            window.location.href = 'index.html';
        };
    }else{
        link.setAttribute('data-i18n', 'nav_login');
        link.href = 'login.html';
        const dict = (window.translations && window.translations[lang]) || {};
        link.textContent = dict.nav_login || (lang === 'en' ? 'Login' : 'تسجيل الدخول');
        link.onclick = null;
    }
}
document.addEventListener('DOMContentLoaded', updateAuthUI);
document.addEventListener('langChanged', updateAuthUI);

// ============================================================
// انتقال سلس بين الصفحات (تلاشي بسيط بدل التبديل الفجائي)
// ============================================================
document.documentElement.classList.add('page-transition');
window.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => document.documentElement.classList.add('page-loaded'));
});
document.addEventListener('click', function(e){
    const link = e.target.closest('a[href]');
    if(!link) return;
    const href = link.getAttribute('href');
    if(!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    if(link.target === '_blank' || link.hasAttribute('download') || link.id === 'navAuthLink') return;
    if(!href.endsWith('.html')) return; // اسمح لروابط لوحة التحكم PHP بالتنقل العادي
    e.preventDefault();
    document.documentElement.classList.remove('page-loaded');
    document.documentElement.classList.add('page-leaving');
    setTimeout(() => { window.location.href = href; }, 180);
});

// ============================================================
// تسجيل الدخول / إنشاء حساب
// ============================================================
function showLoginMessage(text, type){
    const messageDiv = document.getElementById('loginMessage');
    if(messageDiv){ messageDiv.textContent = text; messageDiv.className = 'login-message ' + type; }
}

async function initLoginPage(){
    const loginForm = document.getElementById('loginForm');
    if(!loginForm) return;

    const savedUser = localStorage.getItem('loggedInUser');
    if(savedUser){
        try{
            const user = JSON.parse(savedUser);
            showLoginMessage(`👋 مرحباً ${user.name}! أنت مسجل الدخول بالفعل.`, 'success');
            setTimeout(() => window.location.href = 'index.html', 1500);
        }catch(e){ localStorage.removeItem('loggedInUser'); }
    }

    loginForm.addEventListener('submit', async function(e){
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
        const rememberMe = document.getElementById('rememberMe').checked;

        if(!email || !password){
            showLoginMessage('⚠️ الرجاء إدخال البريد الإلكتروني وكلمة المرور.', 'error');
            return;
        }

        // 1) محاولة تسجيل الدخول عبر السيرفر (PHP + MySQL)
        try{
            const res = await fetch('backend/api/login.php', {
                method:'POST', headers:{'Content-Type':'application/json'},
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if(data.success){
                showLoginMessage(`✅ مرحباً ${data.user.name}! تم تسجيل الدخول بنجاح.`, 'success');
                localStorage.setItem('loggedInUser', JSON.stringify({ email: data.user.email, name: data.user.name, remember: rememberMe }));
                setTimeout(() => window.location.href = 'index.html', 1200);
                return;
            }else{
                showLoginMessage('❌ البريد الإلكتروني أو كلمة المرور غير صحيحة.', 'error');
                return;
            }
        }catch(err){
            // 2) لا يوجد سيرفر PHP — استخدام حسابات تجريبية محلياً
            const demoUsers = [
                { email:'admin@saharqamar.com', password:'123456', name:'مدير المنصة' },
                { email:'user@saharqamar.com', password:'123456', name:'مستخدم تجريبي' }
            ];
            const user = demoUsers.find(u => u.email === email && u.password === password);
            if(user){
                showLoginMessage(`✅ مرحباً ${user.name}! (وضع تجريبي بدون سيرفر)`, 'success');
                localStorage.setItem('loggedInUser', JSON.stringify({ email:user.email, name:user.name, remember:rememberMe }));
                setTimeout(() => window.location.href = 'index.html', 1200);
            }else{
                showLoginMessage('❌ بيانات غير صحيحة. جرّب: admin@saharqamar.com / 123456', 'error');
            }
        }
    });
}

async function initRegisterPage(){
    const form = document.getElementById('registerForm');
    if(!form) return;
    form.addEventListener('submit', async function(e){
        e.preventDefault();
        const name = document.getElementById('registerName').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value.trim();
        const confirm = document.getElementById('registerConfirm').value.trim();

        if(!name || !email || !password || !confirm){
            showLoginMessage('⚠️ الرجاء ملء جميع الحقول.', 'error');
            return;
        }
        if(password !== confirm){
            showLoginMessage('⚠️ كلمتا المرور غير متطابقتين.', 'error');
            return;
        }
        try{
            const res = await fetch('backend/api/register.php', {
                method:'POST', headers:{'Content-Type':'application/json'},
                body: JSON.stringify({ name, email, password })
            });
            const data = await res.json();
            if(data.success){
                showLoginMessage('✅ تم إنشاء حسابك بنجاح! يمكنك تسجيل الدخول الآن.', 'success');
                setTimeout(() => window.location.href = 'login.html', 1500);
            }else{
                showLoginMessage('❌ ' + (data.message || 'تعذر إنشاء الحساب.'), 'error');
            }
        }catch(err){
            showLoginMessage('✅ تم إنشاء الحساب محلياً (بدون سيرفر). يمكنك تجربة تسجيل الدخول بحساب: admin@saharqamar.com', 'success');
            setTimeout(() => window.location.href = 'login.html', 1800);
        }
    });
}

function socialLogin(provider){
    alert(`🌐 جاري تسجيل الدخول عبر ${provider}...\n(هذه ميزة تجريبية)`);
}

window.socialLogin = socialLogin;
window.initLoginPage = initLoginPage;
window.initRegisterPage = initRegisterPage;
