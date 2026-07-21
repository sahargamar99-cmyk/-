// ============================================================
// نظام تبديل اللغة (عربي / English) — أكاديمية سحر قمر
// ============================================================
const translations = {
    ar: {
        site_name: "سحر قمر", site_name_sub: "أكاديمية",
        top_email: "✉️ info@sahar-qamar-academy.com",
        top_phone: "📞 966500000000+",
        nav_home: "الرئيسية", nav_courses: "الدورات", nav_about: "من نحن",
        nav_contact: "تواصل", nav_login: "تسجيل الدخول", nav_register: "إنشاء حساب",

        hero_eyebrow: "🔥 أكثر من 12,000 متعلم انضموا إلينا",
        hero_title_1: "نُضيء لك", hero_title_2: "طريق التعلّم",
        hero_desc: "منصة سحر قمر تجمع لك أفضل الدورات في البرمجة والتصميم واللغات وتطوير الذات، بإشراف مدربين محترفين، لتتعلم بخطى واثقة وتصل لهدفك بأقل وقت وجهد.",
        hero_btn_courses: "استكشف الدورات", hero_btn_register: "ابدأ مجاناً",
        hero_stat1_num: "+120", hero_stat1_label: "دورة تدريبية",
        hero_stat2_num: "+12,000", hero_stat2_label: "متعلم نشط",
        hero_stat3_num: "4.9/5", hero_stat3_label: "تقييم المتدربين",

        trust_1: "🏆 دورات معتمدة", trust_2: "🕒 تعلم حسب وقتك", trust_3: "🔒 دفع آمن", trust_4: "🎓 شهادات إتمام",

        feat_eyebrow: "لماذا سحر قمر", feat_title_1: "لماذا تختار", feat_title_2: "منصتنا؟",
        feat_subtitle: "كل ما تحتاجه لتتعلم بفعالية، في مكان واحد.",
        feat1_title: "محتوى غني وموثوق", feat1_desc: "دورات شاملة ومحدّثة في مختلف المجالات يعدّها خبراء متخصصون.",
        feat2_title: "تعلم تفاعلي عملي", feat2_desc: "تمارين ومشاريع حقيقية تطبّق فيها ما تتعلمه فوراً.",
        feat3_title: "مجتمع داعم", feat3_desc: "تفاعل مع مدربين وزملاء دراسة عبر التعليقات والنقاشات.",
        feat4_title: "تطوير مستمر", feat4_desc: "نحدّث المحتوى باستمرار لمواكبة أحدث تطورات سوق العمل.",

        path_eyebrow: "ابدأ الآن", path_title_1: "طريقك نحو", path_title_2: "التميز",
        path_subtitle: "أربع خطوات بسيطة تفصلك عن مهارة جديدة.",
        path1_title: "أنشئ حسابك", path1_desc: "سجّل مجاناً خلال دقيقة واحدة.",
        path2_title: "اختر دورتك", path2_desc: "تصفّح المكتبة واختر ما يناسب هدفك.",
        path3_title: "تعلّم بخطاك", path3_desc: "شاهد، تدرّب، وناقش مع المجتمع.",
        path4_title: "احصل على شهادتك", path4_desc: "أنجز الدورة واحصل على شهادة معتمدة.",

        cta_title: "جاهز تضيء طريقك المهني؟", cta_desc: "انضم اليوم إلى آلاف المتعلمين وابدأ رحلتك مع سحر قمر.",
        cta_btn: "أنشئ حسابك الآن",

        testi_eyebrow: "قالوا عنا", testi_title: "آراء طلابنا",
        testi_subtitle: "تجارب حقيقية من متعلمين انضموا إلى رحلة سحر قمر.",
        testi1_text: '"محتوى واضح ومباشر، وتفاعل المدربين مع أسئلتي كان سريعاً جداً. غيّرت مساري المهني فعلاً."',
        testi1_name: "— ريم العبدالله",
        testi2_text: '"أفضل منصة جربتها لتعلم البرمجة بالعربي. التمارين العملية فرقت معي كتير."',
        testi2_name: "— عمر التجاني",
        testi3_text: '"حصلت على شهادة إتمام واستخدمتها فعلياً في سيرتي الذاتية. تجربة احترافية من أولها لآخرها."',
        testi3_name: "— هبة كمال",

        footer_about: "منصة تعليمية سودانية تهدف لنشر المعرفة وتمكين المتعلمين من اكتساب مهارات المستقبل.",
        footer_links: "روابط سريعة", footer_contact: "تواصل معنا",
        footer_rights: "© 2026 أكاديمية سحر قمر. جميع الحقوق محفوظة.",

        ph_title: "جميع الدورات", ph_desc: "اختر الدورة التي تناسبك وابدأ التعلم الآن.",
        filter_all: "الكل", filter_prog: "برمجة", filter_design: "تصميم", filter_lang: "لغات", filter_self: "تطوير ذاتي",
        btn_view_details: "عرض التفاصيل",

        dh_title: "تفاصيل الدورة", dh_desc: "تعرف على محتوى الدورة وشارك رأيك.",
        comments_title: "💬 آراء المتعلمين", add_comment_title: "أضف تعليقك",
        label_name: "اسمك", ph_name: "أدخل اسمك",
        label_comment: "التعليق", ph_comment: "اكتب تعليقك...",
        btn_add_comment: "إضافة تعليق",
        instructor_label: "المدرب", duration_label: "المدة", lectures_label: "عدد المحاضرات", price_label: "السعر",

        ah_title: "من نحن", ah_desc: "تعرف على رؤيتنا ورسالتنا وفريقنا.",
        vision_title: "رؤيتنا",
        vision_desc: "نسعى لتمكين المتعلمين حول العالم بالمعرفة والمهارات اللازمة لتحقيق طموحاتهم، من خلال منصة تعليمية ذكية وسهلة الاستخدام.",
        mission_title: "رسالتنا",
        mission_desc: "تقديم محتوى تعليمي عالي الجودة، مدعوم بأحدث تقنيات التعلم التفاعلي، مع توفير بيئة داعمة للمتعلمين من جميع المستويات.",
        goals_title: "أهدافنا",
        goal1: "توفير دورات متنوعة تغطي احتياجات سوق العمل.",
        goal2: "تعزيز التعلم الذاتي والاستمرارية في التطوير.",
        goal3: "بناء مجتمع تعليمي تفاعلي يتبادل الخبرات.",
        stat_courses: "دورة", stat_students: "متعلم", stat_instructors: "مدرب", stat_rating: "تقييم عام",
        story_title: "قصتنا",
        story_desc: "انطلقت أكاديمية سحر قمر من فكرة بسيطة: التعلّم لا يجب أن يكون معقداً أو باهظاً ليكون فعّالاً. بدأنا بمجموعة صغيرة من الدورات التي أعدّها مدربون شغوفون، والآن نفخر بمجتمع من آلاف المتعلمين الذين طوّروا مسيرتهم المهنية معنا.",
        why_diff_title: "🌟 لماذا نحن مختلفون؟",
        why1_title: "فيديوهات عالية الجودة", why1_desc: "محتوى مصوّر باحترافية وبجودة واضحة تناسب كل الأجهزة.",
        why2_title: "تعلّم من أي جهاز", why2_desc: "منصة متجاوبة بالكامل تعمل بسلاسة على الجوال والتابلت والحاسوب.",
        why3_title: "أسعار مناسبة للجميع", why3_desc: "دورات مجانية ومدفوعة بأسعار تنافسية تناسب مختلف الميزانيات.",
        why4_title: "خصوصية وأمان", why4_desc: "بياناتك محمية بأعلى معايير الأمان وتشفير كلمات المرور.",
        team_title: "👥 فريق العمل",

        ch_title: "تواصل معنا", ch_desc: "نحن هنا للإجابة عن استفساراتك واقتراحاتك.",
        contact_info_title: "📬 معلومات الاتصال",
        contact_email_label: "البريد الإلكتروني", contact_phone_label: "الهاتف", contact_address_label: "العنوان",
        contact_address_val: "مدني، القسم الأول، بجوار فندق كونتيننتال",
        contact_note: "نرحب بأسئلتكم واقتراحاتكم، ونسعى للرد خلال 24 ساعة.",
        contact_form_title: "✉️ أرسل رسالتك",
        label_fullname: "الاسم الكامل", ph_fullname: "أدخل اسمك",
        faq_eyebrow: "قبل ما تتواصل معنا", faq_title: "أسئلة شائعة",
        faq1_q: "كم يستغرق الرد على رسالتي؟", faq1_a: "فريقنا يرد خلال 24 ساعة عمل كحد أقصى على جميع الرسائل.",
        faq2_q: "كيف يتم الدفع للدورات المدفوعة؟", faq2_a: "عبر بوابات دفع آمنة تدعم البطاقات البنكية والمحافظ الإلكترونية.",
        faq3_q: "هل أحصل على شهادة بعد إتمام الدورة؟", faq3_a: "نعم، تحصل على شهادة إتمام إلكترونية يمكنك مشاركتها في سيرتك الذاتية.",
        label_email: "البريد الإلكتروني", label_phone: "رقم الجوال", ph_phone: "05xxxxxxxx",
        label_message: "الرسالة", ph_message: "اكتب رسالتك هنا...",
        btn_send_message: "إرسال الرسالة",

        login_title: "تسجيل الدخول", login_subtitle: "مرحباً بعودتك! سجل دخولك للوصول إلى دوراتك",
        label_email_login: "البريد الإلكتروني", label_password: "كلمة المرور", ph_password: "أدخل كلمة المرور",
        remember_me: "تذكرني", forgot_password: "نسيت كلمة المرور؟",
        btn_login: "🚀 تسجيل الدخول", no_account: "ليس لديك حساب؟", create_account: "إنشاء حساب جديد",
        or_login_via: "أو سجل دخول عبر",

        register_title: "إنشاء حساب", register_subtitle: "انضم إلى سحر قمر وابدأ التعلم اليوم",
        label_confirm_password: "تأكيد كلمة المرور", ph_confirm_password: "أعد إدخال كلمة المرور",
        btn_register: "🚀 إنشاء الحساب", have_account: "لديك حساب بالفعل؟",
    },
    en: {
        site_name: "Sahar Qamar", site_name_sub: "Academy",
        top_email: "✉️ info@sahar-qamar-academy.com",
        top_phone: "📞 +966500000000",
        nav_home: "Home", nav_courses: "Courses", nav_about: "About",
        nav_contact: "Contact", nav_login: "Login", nav_register: "Sign Up",

        hero_eyebrow: "🔥 Over 12,000 learners already joined",
        hero_title_1: "We light your", hero_title_2: "path to learning",
        hero_desc: "Sahar Qamar brings together the best courses in programming, design, languages and self-development, guided by expert instructors — so you can learn with confidence and reach your goal faster.",
        hero_btn_courses: "Explore Courses", hero_btn_register: "Start for Free",
        hero_stat1_num: "120+", hero_stat1_label: "Courses",
        hero_stat2_num: "12,000+", hero_stat2_label: "Active learners",
        hero_stat3_num: "4.9/5", hero_stat3_label: "Learner rating",

        trust_1: "🏆 Certified courses", trust_2: "🕒 Learn at your pace", trust_3: "🔒 Secure payment", trust_4: "🎓 Completion certificates",

        feat_eyebrow: "Why Sahar Qamar", feat_title_1: "Why choose", feat_title_2: "our platform?",
        feat_subtitle: "Everything you need to learn effectively, in one place.",
        feat1_title: "Rich, trusted content", feat1_desc: "Comprehensive, up-to-date courses across fields, built by specialists.",
        feat2_title: "Hands-on learning", feat2_desc: "Real exercises and projects to apply what you learn instantly.",
        feat3_title: "Supportive community", feat3_desc: "Interact with instructors and peers through comments and discussion.",
        feat4_title: "Always evolving", feat4_desc: "We continuously update content to match the latest market needs.",

        path_eyebrow: "Get Started", path_title_1: "Your path to", path_title_2: "mastery",
        path_subtitle: "Four simple steps stand between you and a new skill.",
        path1_title: "Create an account", path1_desc: "Sign up for free in under a minute.",
        path2_title: "Pick your course", path2_desc: "Browse the library and choose what fits your goal.",
        path3_title: "Learn your way", path3_desc: "Watch, practice, and discuss with the community.",
        path4_title: "Get certified", path4_desc: "Finish the course and earn a certificate.",

        cta_title: "Ready to light your career path?", cta_desc: "Join thousands of learners today and start your journey with Sahar Qamar.",
        cta_btn: "Create your account",

        testi_eyebrow: "Testimonials", testi_title: "What our students say",
        testi_subtitle: "Real experiences from learners who joined the Sahar Qamar journey.",
        testi1_text: '"Clear, focused content — and instructors responded to my questions incredibly fast. It genuinely changed my career path."',
        testi1_name: "— Reem Al-Abdullah",
        testi2_text: "\"Best platform I've tried for learning programming in Arabic. The hands-on exercises made a real difference.\"",
        testi2_name: "— Omar Al-Tijani",
        testi3_text: '"I earned a completion certificate and actually used it on my resume. A professional experience from start to finish."',
        testi3_name: "— Heba Kamal",

        footer_about: "A Sudanese e-learning platform on a mission to spread knowledge and equip learners with future-ready skills.",
        footer_links: "Quick Links", footer_contact: "Contact Us",
        footer_rights: "© 2026 Sahar Qamar Academy. All rights reserved.",

        ph_title: "All Courses", ph_desc: "Pick the course that fits you and start learning now.",
        filter_all: "All", filter_prog: "Programming", filter_design: "Design", filter_lang: "Languages", filter_self: "Self-development",
        btn_view_details: "View Details",

        dh_title: "Course Details", dh_desc: "Explore the course content and share your feedback.",
        comments_title: "💬 Learner reviews", add_comment_title: "Add your comment",
        label_name: "Your name", ph_name: "Enter your name",
        label_comment: "Comment", ph_comment: "Write your comment...",
        btn_add_comment: "Add Comment",
        instructor_label: "Instructor", duration_label: "Duration", lectures_label: "Lectures", price_label: "Price",

        ah_title: "About Us", ah_desc: "Learn about our vision, mission and team.",
        vision_title: "Our Vision",
        vision_desc: "We aim to empower learners worldwide with the knowledge and skills to achieve their ambitions, through a smart, easy-to-use learning platform.",
        mission_title: "Our Mission",
        mission_desc: "Delivering high-quality educational content, powered by the latest interactive learning technology, in a supportive environment for learners of all levels.",
        goals_title: "Our Goals",
        goal1: "Offer diverse courses that match job-market needs.",
        goal2: "Encourage self-learning and continuous development.",
        goal3: "Build an interactive learning community that shares experience.",
        stat_courses: "Courses", stat_students: "Learners", stat_instructors: "Instructors", stat_rating: "Overall rating",
        story_title: "Our Story",
        story_desc: "Sahar Qamar Academy started from a simple idea: learning shouldn't have to be complicated or expensive to be effective. We began with a small set of courses built by passionate instructors, and today we're proud of a community of thousands of learners who grew their careers with us.",
        why_diff_title: "🌟 What makes us different?",
        why1_title: "High-quality videos", why1_desc: "Professionally produced content with clear quality on every device.",
        why2_title: "Learn from any device", why2_desc: "A fully responsive platform that works smoothly on mobile, tablet and desktop.",
        why3_title: "Affordable for everyone", why3_desc: "Free and paid courses at competitive prices to fit any budget.",
        why4_title: "Privacy & security", why4_desc: "Your data is protected with strong security standards and password encryption.",
        team_title: "👥 Our Team",

        ch_title: "Contact Us", ch_desc: "We're here to answer your questions and suggestions.",
        contact_info_title: "📬 Contact Information",
        contact_email_label: "Email", contact_phone_label: "Phone", contact_address_label: "Address",
        contact_address_val: "Madani, District 1, next to Continental Hotel",
        contact_note: "We welcome your questions and suggestions, and reply within 24 hours.",
        contact_form_title: "✉️ Send a message",
        faq_eyebrow: "Before you reach out", faq_title: "Frequently Asked Questions",
        faq1_q: "How long until I get a reply?", faq1_a: "Our team replies within 24 business hours at most to every message.",
        faq2_q: "How do I pay for paid courses?", faq2_a: "Through secure payment gateways supporting bank cards and e-wallets.",
        faq3_q: "Do I get a certificate after finishing?", faq3_a: "Yes, you receive a digital completion certificate you can add to your resume.",
        label_fullname: "Full name", ph_fullname: "Enter your name",
        label_email: "Email", label_phone: "Phone number", ph_phone: "05xxxxxxxx",
        label_message: "Message", ph_message: "Write your message...",
        btn_send_message: "Send Message",

        login_title: "Login", login_subtitle: "Welcome back! Sign in to access your courses",
        label_email_login: "Email", label_password: "Password", ph_password: "Enter your password",
        remember_me: "Remember me", forgot_password: "Forgot password?",
        btn_login: "🚀 Login", no_account: "Don't have an account?", create_account: "Create new account",
        or_login_via: "Or login with",

        register_title: "Create Account", register_subtitle: "Join Sahar Qamar and start learning today",
        label_confirm_password: "Confirm password", ph_confirm_password: "Re-enter your password",
        btn_register: "🚀 Create Account", have_account: "Already have an account?",
    }
};

function applyTranslations(lang){
    const dict = translations[lang] || translations.ar;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) el.placeholder = dict[key];
    });
    document.querySelectorAll('.lang-switch button').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
    });

    document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
}

function setLanguage(lang){
    localStorage.setItem('sq_lang', lang);
    applyTranslations(lang);
}

document.addEventListener('DOMContentLoaded', function(){
    const saved = localStorage.getItem('sq_lang') || 'ar';
    applyTranslations(saved);

    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
});

window.translations = translations;
window.getCurrentLang = function(){ return localStorage.getItem('sq_lang') || 'ar'; };
