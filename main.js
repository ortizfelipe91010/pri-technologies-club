// High-Quality Custom SVG Logo for PRI Technologies
var LOGO = '<svg viewBox="0 0 680 680" role="img" class="art" xmlns="http://www.w3.org/2000/svg"><title>PRI Technologies logo</title><defs><path id="L" d="M250 230V90H290Q325 90 325 125Q325 160 290 160H285V230ZM285 120H290Q297 120 297 128Q297 136 290 136H285ZM345 230V90H385Q420 90 420 123Q420 148 398 156L422 230H390L372 166V230ZM372 118H382Q390 118 390 126Q390 134 382 134H372ZM440 112H478V230H440Z"/><path id="B" d="M205 300H475A135 100 0 0 1 205 300Z"/><path id="D" d="M185 405Q340 450 495 405V470Q495 500 478 500Q462 500 462 535Q462 575 442 575Q422 575 422 535Q422 505 405 505Q395 505 392 560Q390 610 360 610Q330 610 328 560Q326 515 305 515Q285 515 280 540Q276 560 258 560Q240 560 240 530Q240 500 215 500Q185 500 185 470Z"/><g id="G"><g><rect x="-8" y="-38" width="16" height="16"/><rect x="-8" y="-38" width="16" height="16" transform="rotate(45)"/><rect x="-8" y="-38" width="16" height="16" transform="rotate(90)"/><rect x="-8" y="-38" width="16" height="16" transform="rotate(135)"/><rect x="-8" y="-38" width="16" height="16" transform="rotate(180)"/><rect x="-8" y="-38" width="16" height="16" transform="rotate(225)"/><rect x="-8" y="-38" width="16" height="16" transform="rotate(270)"/><rect x="-8" y="-38" width="16" height="16" transform="rotate(315)"/></g><circle r="30"/></g></defs><rect width="680" height="680" rx="24" fill="#f4f1ea"/><g stroke="#0b2a6f" stroke-width="7" stroke-linecap="round"><line x1="215" y1="95" x2="215" y2="225"/><line x1="465" y1="95" x2="465" y2="225"/></g><use href="#G" transform="translate(200 300)" fill="#0b2a6f" stroke="#0b2a6f" stroke-width="16" stroke-linejoin="round"/><use href="#G" transform="translate(480 300)" fill="#0b2a6f" stroke="#0b2a6f" stroke-width="16" stroke-linejoin="round"/><use href="#G" transform="translate(200 300)" fill="#111" stroke="#111" stroke-width="3"/><use href="#G" transform="translate(480 300)" fill="#111" stroke="#111" stroke-width="3"/><circle cx="200" cy="300" r="9" fill="#f4f1ea"/><circle cx="480" cy="300" r="9" fill="#f4f1ea"/><use href="#D" fill="#0b2a6f" stroke="#0b2a6f" stroke-width="16" stroke-linejoin="round"/><use href="#D" fill="#111" stroke="#111" stroke-width="3"/><use href="#B" fill="#0b2a6f" stroke="#0b2a6f" stroke-width="16" stroke-linejoin="round"/><use href="#B" fill="#111" stroke="#111" stroke-width="3"/><polygon points="352,300 318,345 342,345 316,398 376,332 350,332 378,300" fill="#f4f1ea" stroke="#0b2a6f" stroke-width="5" stroke-linejoin="round"/><use href="#L" fill="#0b2a6f" fill-rule="evenodd" stroke="#0b2a6f" stroke-width="16" stroke-linejoin="round"/><use href="#L" fill="#111" fill-rule="evenodd" stroke="#111" stroke-width="3"/><circle cx="459" cy="78" r="13" fill="#0b2a6f"/><circle cx="459" cy="78" r="9" fill="#111"/></svg>';

function sv(w, h, b, l) {
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" class="art" role="img" aria-label="' + l + '">' + b + '</svg>';
}

// Illustrations for Sections
var FALL = sv(400, 240, '<rect width="400" height="240" fill="#93c5fd"/><polygon points="0,170 80,90 160,150 250,70 340,140 400,100 400,240 0,240" fill="#2d6a4f"/><rect x="110" y="65" width="180" height="145" rx="8" fill="#e2e8f0" stroke="#0b2a6f" stroke-width="3"/><rect x="130" y="80" width="140" height="100" fill="#0b2a6f"/><text x="200" y="135" text-anchor="middle" fill="#ffffff" font-family="Orbitron" font-size="16" font-weight="900" letter-spacing="1">LA CASCADA</text><polygon points="170,180 230,180 230,210 170,210" fill="#38bdf8"/><g fill="#1b4332"><circle cx="45" cy="200" r="28"/><circle cx="95" cy="210" r="22"/><circle cx="355" cy="200" r="28"/><circle cx="310" cy="210" r="20"/></g>', 'Centro Comercial La Cascada Medellín');

var MAP = sv(400, 240, '<rect width="400" height="240" fill="#e2e8f0"/><path d="M-10 190C100 150 200 220 410 160" stroke="#93c5fd" stroke-width="26" fill="none"/><g stroke="#ffffff" stroke-width="12" fill="none"><line x1="0" y1="70" x2="400" y2="90"/><line x1="120" y1="0" x2="160" y2="240"/><line x1="280" y1="0" x2="260" y2="240"/></g><circle cx="200" cy="85" r="34" fill="rgba(11,42,111,0.2)"/><path d="M200 58a22 22 0 0 1 22 22c0 18-22 42-22 42s-22-24-22-42a22 22 0 0 1 22-22z" fill="#0b2a6f"/><circle cx="200" cy="80" r="8" fill="#ffffff"/><rect x="110" y="145" width="180" height="34" rx="6" fill="#0b2a6f"/><text x="200" y="168" text-anchor="middle" font-size="14" font-weight="800" fill="#ffffff" font-family="Orbitron">LA CASCADA MEDELLÍN</text>', 'Map preview showing La Cascada Medellín');

var ART = {
    // Block Coding / Scratch
    P: sv(220, 150, '<rect width="220" height="150" rx="10" fill="#0f172a"/><rect x="15" y="14" width="190" height="22" rx="4" fill="#1e293b"/><circle cx="28" cy="25" r="4.5" fill="#ef4444"/><circle cx="42" cy="25" r="4.5" fill="#f59e0b"/><circle cx="56" cy="25" r="4.5" fill="#10b981"/><path d="M20 46h110v20H95l-8 7H60l-8-7H20z" fill="#f97316"/><text x="28" y="61" fill="#fff" font-family="Rajdhani" font-size="13" font-weight="700">when [start] clicked</text><path d="M20 73h135v20H110l-8 7H75l-8-7H20z" fill="#0284c7"/><text x="28" y="88" fill="#fff" font-family="Rajdhani" font-size="13" font-weight="700">set [motor] speed 100</text><path d="M20 100h155v20H125l-8 7H90l-8-7H20z" fill="#10b981"/><text x="28" y="115" fill="#fff" font-family="Rajdhani" font-size="13" font-weight="700">repeat until &lt;sensor==1&gt;</text>', 'Block Coding Window'),
    // Robot
    R: sv(220, 150, '<rect width="220" height="150" rx="10" fill="#e0f2fe"/><line x1="110" y1="12" x2="110" y2="30" stroke="#0b2a6f" stroke-width="4"/><circle cx="110" cy="12" r="7" fill="#ef4444"/><rect x="68" y="30" width="84" height="60" rx="12" fill="#0b2a6f"/><circle cx="90" cy="55" r="10" fill="#38bdf8"/><circle cx="130" cy="55" r="10" fill="#38bdf8"/><rect x="94" y="74" width="32" height="6" rx="3" fill="#ffffff"/><rect x="76" y="96" width="68" height="38" rx="8" fill="#0284c7"/><rect x="46" y="98" width="22" height="10" rx="5" fill="#0b2a6f"/><rect x="152" y="98" width="22" height="10" rx="5" fill="#0b2a6f"/>', 'Interactive Robot'),
    // Lightbulb / Ideas
    I: sv(220, 150, '<rect width="220" height="150" rx="10" fill="#fef3c7"/><g stroke="#f59e0b" stroke-width="4" stroke-linecap="round"><line x1="110" y1="10" x2="110" y2="24"/><line x1="58" y1="30" x2="70" y2="42"/><line x1="162" y1="30" x2="150" y2="42"/><line x1="38" y1="70" x2="52" y2="70"/><line x1="182" y1="70" x2="168" y2="70"/></g><circle cx="110" cy="70" r="36" fill="#fbbf24" stroke="#d97706" stroke-width="3"/><rect x="92" y="104" width="36" height="12" fill="#475569"/><rect x="98" y="116" width="24" height="10" rx="4" fill="#334155"/><path d="M96 74q14-22 28 0" stroke="#b45309" stroke-width="4" fill="none"/>', 'Glowing Lightbulb Innovation'),
    // Line Follower
    LF: sv(300, 180, '<rect width="300" height="180" rx="10" fill="#f1f5f9"/><path d="M0 140C70 140 80 50 150 50S220 130 300 120" stroke="#0f172a" stroke-width="12" fill="none"/><rect x="115" y="32" width="70" height="42" rx="8" fill="#0b2a6f"/><circle cx="130" cy="74" r="10" fill="#0f172a"/><circle cx="170" cy="74" r="10" fill="#0f172a"/><circle cx="130" cy="74" r="4" fill="#94a3b8"/><circle cx="170" cy="74" r="4" fill="#94a3b8"/><rect x="175" y="42" width="14" height="12" rx="2" fill="#38bdf8"/><circle cx="120" cy="38" r="4" fill="#ef4444"/><circle cx="120" cy="48" r="4" fill="#10b981"/>', 'Line Follower Robot'),
    // Traffic Light
    TL: sv(300, 180, '<rect width="300" height="180" rx="10" fill="#f1f5f9"/><rect x="125" y="16" width="50" height="120" rx="10" fill="#1e293b" stroke="#0f172a" stroke-width="3"/><circle cx="150" cy="40" r="14" fill="#ef4444" stroke="#7f1d1d" stroke-width="2"/><circle cx="150" cy="76" r="14" fill="#facc15" stroke="#713f12" stroke-width="2"/><circle cx="150" cy="112" r="14" fill="#22c55e" stroke="#14532d" stroke-width="2"/><rect x="145" y="136" width="10" height="34" fill="#64748b"/>', 'LED Traffic Light'),
    // Robotic Arm
    AR: sv(300, 180, '<rect width="300" height="180" rx="10" fill="#f1f5f9"/><rect x="70" y="145" width="160" height="20" rx="4" fill="#b45309"/><g stroke="#d97706" stroke-width="14" stroke-linecap="round" fill="none"><line x1="120" y1="145" x2="100" y2="85"/><line x1="100" y1="85" x2="180" y2="40"/></g><circle cx="100" cy="85" r="9" fill="#0b2a6f"/><circle cx="120" cy="145" r="9" fill="#0b2a6f"/><circle cx="180" cy="40" r="8" fill="#0b2a6f"/><path d="M180 40l20-8M180 40l18 16" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>', 'Cardboard Recycled Robotic Arm'),
    // Notebook
    N: sv(90, 90, '<rect x="18" y="10" width="54" height="70" rx="5" fill="#0b2a6f"/><g stroke="#ffffff" stroke-width="3"><line x1="28" y1="28" x2="62" y2="28"/><line x1="28" y1="42" x2="62" y2="42"/><line x1="28" y1="56" x2="52" y2="56"/></g><rect x="12" y="16" width="8" height="58" rx="2" fill="#94a3b8"/>', 'Notebook'),
    // Pencil
    PE: sv(90, 90, '<g transform="rotate(-40 45 45)"><rect x="36" y="8" width="18" height="62" rx="2" fill="#facc15" stroke="#0f172a" stroke-width="2"/><polygon points="36,70 54,70 45,86" fill="#e2e8f0" stroke="#0f172a" stroke-width="2"/><polygon points="41,80 49,80 45,86" fill="#0f172a"/></g>', 'Pencil'),
    // Laptop
    LP: sv(90, 90, '<rect x="18" y="20" width="54" height="38" rx="4" fill="#0f172a"/><rect x="23" y="25" width="44" height="28" rx="2" fill="#38bdf8"/><rect x="10" y="60" width="70" height="7" rx="3" fill="#64748b"/>', 'Laptop or Phone'),
    // Recycled Parts
    PA: sv(90, 90, '<rect x="12" y="45" width="46" height="32" rx="3" fill="#b45309"/><circle cx="62" cy="35" r="16" fill="#94a3b8" stroke="#0f172a" stroke-width="2"/><circle cx="62" cy="35" r="5" fill="#0f172a"/><rect x="56" y="52" width="24" height="8" rx="3" fill="#ef4444"/>', 'Recycled Parts')
};

// Application State
var S = {
    pil: 0,
    why: { 0: true, 1: false, 2: false },
    goalTab: 0, // 0: skills, 1: benefits, 2: goals
    actTab: 0,  // 0: programming, 1: robots, 2: innovation
    projTab: 0, // 0: line follower, 1: traffic light, 2: recycled arm
    mat: { 0: false, 1: false, 2: false, 3: false },
    skillTab: 0,
    showInlineMap: false
};

// Audio Tracks: each key plays one or more files in sequence
var AUDIO = {
    programming: ['YATE PROGRAMMING.mp3'],
    robots: ['FELIPE ROBOTS.mp3'],
    innovation: ['DAVID INNOVATIONS.mp3'],
    why: ['JUSTIFICACION 1 FELIPE.mp3', 'JUSTIFICACION 2 YATE.mp3'],
    skills: ['DAVID SKILLS.mp3'],
    benefits: ['DAVID BENEFITS.mp3'],
    goals: ['DAVID GOALS.mp3'],
    location: ['LOCATION FELIPE.mp3'],
    join: ['HOW TO JOIN DAVID.mp3'],
    materials: ['YATE MATERIALES.mp3'],
    tips: ['SKILLS FELIOE.mp3'],
    lineFollower: ['LINE FOLLOWING.mp3'],
    trafficLight: ['LED TRAFFIC SEMAFORO.mp3'],
    recycledArm: ['BRAZO DE CARTON.mp3']
};
var PROJ_AUDIO = ['lineFollower', 'trafficLight', 'recycledArm'];
var PIL_AUDIO = ['programming', 'robots', 'innovation'];
var GOAL_AUDIO = ['skills', 'benefits', 'goals'];

var player = new Audio();
var playing = { key: null, idx: 0 };

var ICO_PLAY = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polygon points="4,9 8,9 13,5 13,19 8,15 4,15" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19 6a8.5 8.5 0 0 1 0 12"/></svg>';
var ICO_PAUSE = '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>';

// Audio button markup; label is optional (icon-only when omitted)
function audioBtn(key, label) {
    var on = playing.key === key;
    return '<button class="audio-btn' + (on ? ' playing' : '') + (label ? '' : ' icon-only') + '" data-audio="' + key + '" title="Play audio" aria-label="Play audio">' +
        '<span class="audio-ico">' + (on ? ICO_PAUSE : ICO_PLAY) + '</span>' +
        (label ? '<span>' + (on ? 'Pause' : label) + '</span>' : '') +
    '</button>';
}

function playTrack(key, idx) {
    playing.key = key;
    playing.idx = idx;
    var file = AUDIO[key][idx];
    player.src = encodeURI('audio/' + file);
    player.play();
}

function stopAudio() {
    player.pause();
    playing.key = null;
}

function toggleAudio(key) {
    if (playing.key === key) stopAudio();
    else playTrack(key, 0);
    rr();
}

// Advance to the next file of the same key, or finish
player.addEventListener('ended', function () {
    var list = AUDIO[playing.key];
    if (list && playing.idx + 1 < list.length) {
        playTrack(playing.key, playing.idx + 1);
    } else {
        playing.key = null;
        rr();
    }
});

// Home Pillars Data: Letter, Word, Leader, Description & Approach
var PIL_DATA = [
    {
        letter: 'P',
        word: 'Programming',
        leader: 'Juan Manuel Yate',
        desc: 'Code, logic, and computational thinking. We learn how software instructs physical machines to solve problems step by step.',
        approach: 'How we approach it in the club: We start with visual, block-based tools (Scratch, Blockly) to master core concepts without syntax headaches, and then move into real Arduino code and Python for real-world projects.'
    },
    {
        letter: 'R',
        word: 'Robots',
        leader: 'Felipe Ortiz',
        desc: 'Physical engineering, motors, sensors, gears, and structural assembly. Robots bring code to life in the tangible world.',
        approach: 'How we approach it in the club: Hands-on construction from day one! We wire breadboards, test ultrasonic and infrared sensors, solder connections, and construct chassis using both robotics kits and recycled materials.'
    },
    {
        letter: 'I',
        word: 'Innovation',
        leader: 'David Zapata',
        desc: 'Creative design, inventive thinking, and empathy. Technology without purpose is just wires; innovation turns it into real solutions.',
        approach: 'How we approach it in the club: We detect genuine community and environmental problems in Medellín, brainstorm disruptive ideas, build rapid prototypes, and learn how to present them with confidence.'
    }
];

// 9 Sections Configuration
var SL = [
    // 1. HOME
    ['Home', function () {
        var p = PIL_DATA[S.pil];
        return '' +
            '<div class="home-top-bar">' +
                '<div class="home-logo-box" title="PRI Technologies Logo">' + LOGO + '</div>' +
                '<div class="home-header-center">' +
                    '<h1 class="home-title">PRI TECHNOLOGIES</h1>' +
                    '<p class="home-slogan">AN ACTIVE FUTURE</p>' +
                '</div>' +
            '</div>' +
            '<div class="pil-grid">' +
                PIL_DATA.map(function (x, i) {
                    var isOn = (i === S.pil);
                    return '<button class="pil-card' + (isOn ? ' on' : '') + '" data-pil="' + i + '">' +
                        '<span class="big-letter">' + x.letter + '</span>' +
                        '<span class="sub-word">' + x.word + '</span>' +
                    '</button>';
                }).join('') +
            '</div>' +
            '<div class="pil-detail-box">' +
                '<div class="pil-detail-header">' +
                    '<h2 class="pil-detail-title">' + p.word + '</h2>' +
                    '<div class="pil-detail-leader">Leader: <span>' + p.leader + '</span></div>' +
                '</div>' +
                '<div class="pil-detail-content">' +
                    '<div>' + (p.letter === 'P' ? ART.P : (p.letter === 'R' ? ART.R : ART.I)) + '</div>' +
                    '<div>' +
                        '<p><strong>What it is about:</strong> ' + p.desc + '</p>' +
                        '<p style="color:var(--navy);font-weight:700;">' + p.approach + '</p>' +
                    '</div>' +
                '</div>' +
                '<div class="audio-row">' + audioBtn(PIL_AUDIO[S.pil], 'Listen') + '</div>' +
            '</div>';
    }],

    // 2. WHY
    ['Why', function () {
        var items = [
            {
                title: 'FREE SPACE',
                sub: 'Purpose',
                text: 'A 100% free community robotics space where curiosity thrives. No paywalls, no barriers—just pure exploration and learning for all Medellín youth.',
                tags: ['Practical', 'Fun', 'Free', 'Open Space']
            },
            {
                title: 'TEACH FOR ALL',
                sub: 'Reason',
                text: 'Robotics and technology define our active future, but quality STEM education is often unaffordable. We bridge the gap so everyone gets an equal opportunity.',
                tags: ['Future', 'Access', 'Equality', 'Empowerment']
            },
            {
                title: 'LEARN BY DOING',
                sub: 'How',
                text: 'Zero boring lectures. We believe in immediate hands-on projects, testing real components, fixing errors as a team, and building with our own hands.',
                tags: ['Classes', 'Projects', 'Challenges', 'Teamwork']
            }
        ];

        return '' +
            '<h1 class="section-title">WHY PRI?' + audioBtn('why') + '</h1>' +
            '<p class="section-subtitle">Tap each card to explore our core pillars.</p>' +
            '<div class="why-container">' +
                items.map(function (x, i) {
                    var isOpen = S.why[i];
                    return '' +
                        '<div class="why-row' + (isOpen ? ' on' : '') + '" data-why="' + i + '">' +
                            '<div class="why-row-trigger">' +
                                '<h3 class="why-row-title">' + x.title + '</h3>' +
                                '<span class="why-row-subtitle">' + x.sub + '</span>' +
                            '</div>' +
                            '<div class="why-row-drawer">' +
                                '<p style="margin:0 0 10px;font-size:18px;font-weight:600;">' + (isOpen ? x.text : 'Tap to reveal full pillar details →') + '</p>' +
                                '<div>' +
                                    x.tags.map(function(t) { return '<span class="pill-chip" style="margin-right:6px;font-size:13px;padding:3px 10px;">' + t + '</span>'; }).join('') +
                                '</div>' +
                            '</div>' +
                        '</div>';
                }).join('') +
            '</div>';
    }],

    // 3. GOALS
    ['Goals', function () {
        var tabs = ['Skills', 'Benefits', 'Goals'];
        var data = [
            // Skills
            [
                'Logical Thinking',
                'Basic Programming',
                'Teamwork',
                'Creativity',
                'Communication',
                'Problem Solving',
                'Building Robots',
                'Presenting Ideas'
            ],
            // Benefits
            [
                '100% Free',
                'New Friends',
                'Real Practice',
                'Helps School',
                'Future Careers',
                'Mini Demos'
            ],
            // Goals
            [
                'Learn Robotics Step by Step',
                'Build Your Own Robot Projects',
                'Think Innovatively',
                'Solve Real Community Problems'
            ]
        ];

        var currentList = data[S.goalTab];

        return '' +
            '<h1 class="section-title">GOALS AND BENEFITS</h1>' +
            '<p class="section-subtitle">What you get by joining PRI Technologies</p>' +
            '<div class="goals-nav">' +
                tabs.map(function (name, i) {
                    return '<button class="goals-nav-pill' + (i === S.goalTab ? ' on' : '') + '" data-goaltab="' + i + '">' + name + '</button>';
                }).join('') +
            '</div>' +
            '<div class="goals-list-grid">' +
                currentList.map(function (item, idx) {
                    return '' +
                        '<div class="goal-item-card">' +
                            '<div class="goal-badge-num">' + (idx + 1) + '</div>' +
                            '<span>' + item + '</span>' +
                        '</div>';
                }).join('') +
            '</div>' +
            '<div class="audio-row">' + audioBtn(GOAL_AUDIO[S.goalTab], 'Listen') + '</div>';
    }],

    // 4. LOCATION
    ['Location', function () {
        return '' +
            '<h1 class="section-title">WHERE WE MEET</h1>' +
            '<p class="section-subtitle">In Person · City Center</p>' +
            '<div class="location-grid">' +
                // Left Box
                '<div class="loc-box">' +
                    '<div class="loc-media">' + FALL + '</div>' +
                    '<h3 class="loc-sub-title">Centro Comercial La Cascada</h3>' +
                    '<p style="color:var(--mut);margin-bottom:12px;font-size:16px;">Downtown meeting hub for our robotics club.</p>' +
                    '<ul class="loc-ref-list">' +
                        '<li class="loc-ref-item"><span class="bullet">📍</span> <span>Reference 1: Walking distance from <strong>San Antonio Metro Station</strong>.</span></li>' +
                        '<li class="loc-ref-item"><span class="bullet">📍</span> <span>Reference 2: Convenient main entrance along <strong>Calle 48</strong> in downtown Medellín.</span></li>' +
                        '<li class="loc-ref-item"><span class="bullet">📍</span> <span>Reference 3: Inside the commercial mall galleria, safe and easy to locate.</span></li>' +
                    '</ul>' +
                '</div>' +
                // Right Box
                '<div class="loc-box">' +
                    '<div class="loc-media">' + MAP + '</div>' +
                    '<h3 class="loc-sub-title">La Cascada, Medellín</h3>' +
                    '<p class="loc-address">Calle 48 #51-18, La Candelaria, Medellín, Antioquia</p>' +
                    '<div class="loc-btn-group">' +
                        '<button class="btn" data-copy="1">📋 Copy Address</button>' +
                        audioBtn('location') +
                        '<button class="btn btn-ghost" data-togglemap="1">' + (S.showInlineMap ? 'Hide In-Page Map' : '🗺️ Open In-Page Google Maps') + '</button>' +
                        '<span id="cp-feedback" style="color:var(--navy);font-weight:700;font-size:15px;align-self:center;"></span>' +
                    '</div>' +
                    // Interactive in-page Google Maps embedded drawer
                    '<div class="inpage-maps-drawer' + (S.showInlineMap ? ' open' : '') + '">' +
                        '<iframe src="https://maps.google.com/maps?q=Centro+Comercial+La+Cascada+Medellin&t=&z=16&ie=UTF8&iwloc=&output=embed" loading="lazy" title="Google Maps - La Cascada"></iframe>' +
                    '</div>' +
                '</div>' +
            '</div>';
    }],

    // 5. ACTIVITIES
    ['Activities', function () {
        var actTabs = ['Programming', 'Robots', 'Innovation'];
        var actData = [
            {
                title: 'CODE AND LOGIC',
                learn: 'Basics with Block Tools and Simple Code',
                daily: 'Organize Ideas, Solve Problems Step by Step',
                art: ART.P,
                formats: ['In Person', 'Some Virtual']
            },
            {
                title: 'BUILD ROBOTS',
                learn: 'Parts, Motors, Sensors, Boards and Gears',
                daily: 'Patience, Precision, Fixing What Fails',
                art: ART.R,
                formats: ['In Person', 'Kits + Recycled']
            },
            {
                title: 'IDEAS AND SOLUTIONS',
                learn: 'See a Problem, Imagine Options and Design',
                daily: 'Conflict Resolution and Inventive Solutions',
                art: ART.I,
                formats: ['In Person', 'Sometimes Virtual']
            }
        ];

        var curAct = actData[S.actTab];

        return '' +
            '<h1 class="section-title">ACTIVITIES</h1>' +
            '<p class="section-subtitle">Pick a subtopic</p>' +
            '<div class="act-nav">' +
                actTabs.map(function (tab, i) {
                    return '<button class="act-nav-pill' + (i === S.actTab ? ' on' : '') + '" data-acttab="' + i + '">' + tab + '</button>';
                }).join('') +
            '</div>' +
            '<div class="act-detail-panel">' +
                '<div class="act-media-col">' + curAct.art + '</div>' +
                '<div class="act-content-col">' +
                    '<div>' +
                        curAct.formats.map(function (f) { return '<span class="pill-chip" style="margin-right:8px;font-size:14px;">' + f + '</span>'; }).join('') +
                    '</div>' +
                    '<h2 class="act-panel-title">' + curAct.title + '</h2>' +
                    '<div class="act-info-block">' +
                        '<b>Learn:</b> ' + curAct.learn +
                    '</div>' +
                    '<div class="act-info-block">' +
                        '<b>Daily Life:</b> ' + curAct.daily +
                    '</div>' +
                    '<div class="audio-row left">' + audioBtn(PIL_AUDIO[S.actTab], 'Listen') + '</div>' +
                '</div>' +
            '</div>';
    }],

    // 6. PROJECTS
    ['Projects', function () {
        var projList = [
            {
                name: 'Line Follower',
                tagline: 'A little robot that follows a black line.',
                art: ART.LF,
                materials: ['Arduino Nano', 'Dual IR Line Sensors', 'TT Gear Motors', 'L298N Motor Driver', 'Battery Pack', 'Wheeled Chassis']
            },
            {
                name: 'LED Traffic Light',
                tagline: 'Programming Plus Wiring Lights.',
                art: ART.TL,
                materials: ['Red, Yellow & Green LEDs', '220Ω Resistors', 'Arduino Uno / Nano', 'Piezo Buzzer', 'Breadboard & Jumper Wires']
            },
            {
                name: 'Recycled Arm',
                tagline: 'A Cardboard Robotic Arm.',
                art: ART.AR,
                materials: ['Cardboard Sheets', 'Wooden Craft Sticks', 'SG90 Micro Servos', 'Potentiometer Knobs', 'Arduino Controller', 'Hot Glue']
            }
        ];

        var curProj = projList[S.projTab];

        return '' +
            '<h1 class="section-title">PROJECT IDEAS</h1>' +
            '<p class="section-subtitle">Tap a Project</p>' +
            '<div class="proj-nav">' +
                projList.map(function (p, i) {
                    return '<button class="proj-nav-card' + (i === S.projTab ? ' on' : '') + '" data-projtab="' + i + '">' + p.name + '</button>';
                }).join('') +
            '</div>' +
            '<div class="proj-detail-panel">' +
                '<div class="proj-media">' + curProj.art + '</div>' +
                '<div>' +
                    '<h2 class="proj-info-title">' + curProj.name + audioBtn(PROJ_AUDIO[S.projTab]) + '</h2>' +
                    '<p class="proj-desc">' + curProj.tagline + '</p>' +
                    '<div class="proj-mats-heading">Key Materials & Hardware:</div>' +
                    '<div style="display:flex;flex-wrap:wrap;gap:8px;">' +
                        curProj.materials.map(function (m) { return '<span class="pill-chip" style="font-size:14px;">' + m + '</span>'; }).join('') +
                    '</div>' +
                '</div>' +
            '</div>';
    }],

    // 7. JOIN
    ['Join', function () {
        var steps = [
            {
                num: '1',
                title: '1. Contact Us',
                sub: 'Message Juan Manuel, Felipe or David.'
            },
            {
                num: '2',
                title: '2. Come to La Cascada',
                sub: 'Tell us your name and age at the first meeting.'
            },
            {
                num: '3',
                title: '3. Start Learning',
                sub: 'Everything is shared. No laptop? No problem.'
            }
        ];

        return '' +
            '<h1 class="section-title">HOW TO JOIN</h1>' +
            '<div class="join-grid" style="margin-top:24px;">' +
                // Left side $0 box
                '<div class="join-card-free">' +
                    '<div class="join-big-price">$0</div>' +
                    '<div class="join-price-label">IT IS FREE</div>' +
                    '<ul class="join-bullets-list">' +
                        '<li class="join-bullet-item">✓ No fees</li>' +
                        '<li class="join-bullet-item">✓ No cost to join</li>' +
                        '<li class="join-bullet-item">✓ Equipment shared</li>' +
                    '</ul>' +
                '</div>' +
                // Right side 1-2-3 steps
                '<div class="join-steps-col">' +
                    steps.map(function (s) {
                        return '' +
                            '<div class="join-step-card">' +
                                '<div class="join-step-header">' + s.title + '</div>' +
                                '<p class="join-step-body">' + s.sub + '</p>' +
                            '</div>';
                    }).join('') +
                    '<div class="audio-row left" style="margin-top:4px;">' + audioBtn('join', 'Listen') + '</div>' +
                '</div>' +
            '</div>';
    }],

    // 8. MATERIALS
    ['Materials', function () {
        var matList = [
            { name: 'Notebook', art: ART.N },
            { name: 'Pen or Pencil', art: ART.PE },
            { name: 'Laptop or Phone', art: ART.LP },
            { name: 'Recycled Parts', art: ART.PA }
        ];

        var packedCount = Object.keys(S.mat).filter(function (k) { return S.mat[k]; }).length;
        var progressPct = Math.round((packedCount / matList.length) * 100);

        return '' +
            '<h1 class="section-title">WHAT TO BRING</h1>' +
            '<p class="section-subtitle">Tap what you packed</p>' +
            '<div class="mat-progress-box">' +
                '<span class="mat-progress-text">Pack Readiness:</span>' +
                '<div class="mat-bar-track">' +
                    '<div class="mat-bar-fill" style="width:' + progressPct + '%;"></div>' +
                '</div>' +
                '<span class="mat-progress-text">' + packedCount + ' / ' + matList.length + ' (' + progressPct + '%)</span>' +
            '</div>' +
            '<div class="mat-grid">' +
                matList.map(function (item, i) {
                    var isPacked = S.mat[i];
                    return '' +
                        '<div class="mat-card' + (isPacked ? ' on' : '') + '" data-mat="' + i + '">' +
                            '<span class="mat-badge-check">✓ PACKED</span>' +
                            '<div class="mat-media-box">' + item.art + '</div>' +
                            '<p class="mat-card-label">' + item.name + '</p>' +
                        '</div>';
                }).join('') +
            '</div>' +
            '<div class="mat-long-banner">' +
                'Schedule and News: Founders’ Group Chat or Ask in Person.' +
            '</div>' +
            '<div class="audio-row">' + audioBtn('materials', 'Listen') + '</div>';
    }],

    // 9. SKILLS
    ['Skills', function () {
        var skillsList = [
            {
                name: 'Basic Reading',
                desc: 'Reading Instructions and Ideas.'
            },
            {
                name: 'Basic Math',
                desc: 'Counting, Measuring, Simple Logic.'
            },
            {
                name: 'Positive Attitude',
                desc: 'Enjoy Learning Even When It Is Hard.'
            },
            {
                name: 'Respect',
                desc: 'Listen to Your Teammates.'
            },
            {
                name: 'Responsible',
                desc: 'Be on Time and Take Care of Materials.'
            },
            {
                name: 'Not Afraid to Fail',
                desc: 'Mistakes Are How We Learn Robotics.'
            }
        ];

        var activeSkill = skillsList[S.skillTab];

        return '' +
            '<div class="skills-head" style="text-align:center;">' +
                audioBtn('tips', 'Listen') +
                '<h1 class="section-title">SKILLS AND TIPS</h1>' +
                '<div class="skills-headline-banner">NO EXPERT NEEDED</div>' +
                '<p class="section-subtitle">Beginners and Curious People Welcome · Tap a Skill</p>' +
            '</div>' +
            '<div class="skills-pills-row">' +
                skillsList.map(function (s, i) {
                    return '<button class="skill-pill-btn' + (i === S.skillTab ? ' on' : '') + '" data-skilltab="' + i + '">' + s.name + '</button>';
                }).join('') +
            '</div>' +
            '<div class="skill-detail-long-banner">' +
                '<span class="keyword">' + activeSkill.name.toUpperCase() + '</span>' +
                activeSkill.desc +
            '</div>';
    }],

    // 10. VIDEO
    ['Video', function () {
        return '' +
            '<div class="media-showcase">' +
                '<h1 class="section-title">VIDEO</h1>' +
                '<div class="media-showcase-sub">PRI TECHNOLOGY</div>' +
                '<div class="media-frame">' +
                    '<video id="pri-video" controls playsinline preload="metadata"></video>' +
                '</div>' +
            '</div>';
    }],

    // 11. POSTER
    ['Poster', function () {
        return '' +
            '<div class="media-showcase poster">' +
                '<h1 class="section-title">ADVERTISING POSTER</h1>' +
                '<div class="media-showcase-sub">PRI TECHNOLOGY</div>' +
                '<div class="media-frame">' +
                    '<img src="' + encodeURI('media/PRI Infografia.png') + '" alt="PRI Technologies advertising poster">' +
                '</div>' +
            '</div>';
    }]
];

function loadVideo(el) {
    el.addEventListener('play', stopAudio);
    el.src = encodeURI('media/PRI Video.mp4');
}

var cur = 0;
var mainEl = document.getElementById('m');
var navEl = document.getElementById('nav');
var navLogoContainer = document.getElementById('nav-logo-container');

if (navLogoContainer) {
    navLogoContainer.innerHTML = LOGO;
}

// Render Top Menu Navigation
navEl.innerHTML = SL.map(function (s, i) {
    return '<button class="nb" data-go="' + i + '">' + s[0] + '</button>';
}).join('');

// Navigation Controller
function go(i, fresh) {
    cur = (i + SL.length) % SL.length;

    // Stop audio when changing section
    if (fresh) stopAudio();

    // Generate content with Back & Next footer buttons
    var contentHtml = SL[cur][1]();
    var footerHtml = '' +
        '<footer class="page-footer">' +
            '<button class="btn btn-ghost btn-back" data-go="' + (cur - 1) + '">← Back</button>' +
            '<button class="btn btn-next" data-go="' + (cur + 1) + '">Next →</button>' +
        '</footer>';

    mainEl.innerHTML = contentHtml + footerHtml;

    var vidEl = document.getElementById('pri-video');
    if (vidEl) loadVideo(vidEl);

    // Stop audio when its button is no longer rendered (tab changed)
    if (playing.key && !mainEl.querySelector('[data-audio="' + playing.key + '"]')) {
        stopAudio();
    }

    // Update top nav active indicators
    navEl.querySelectorAll('.nb').forEach(function (btn, idx) {
        btn.setAttribute('aria-current', idx === cur);
        if (idx === cur) {
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    });

    if (fresh) {
        mainEl.style.animation = 'none';
        mainEl.offsetHeight; // force reflow
        mainEl.style.animation = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Re-render in place
function rr() {
    var scrollPos = window.scrollY;
    go(cur, false);
    window.scrollTo(0, scrollPos);
}

// Global Event Delegation
document.addEventListener('click', function (e) {
    var btn = e.target.closest('button, [data-why], [data-mat]');
    if (!btn) return;
    var d = btn.dataset;

    // Navigation
    if (d.go != null) {
        return go(+d.go, true);
    }

    // Audio Buttons
    if (d.audio != null) {
        return toggleAudio(d.audio);
    }

    // Home Pillars
    if (d.pil != null) {
        S.pil = +d.pil;
        return rr();
    }

    // Why Row Toggle
    if (d.why != null) {
        S.why[d.why] = !S.why[d.why];
        return rr();
    }

    // Goals Tab
    if (d.goaltab != null) {
        S.goalTab = +d.goaltab;
        return rr();
    }

    // Activities Tab
    if (d.acttab != null) {
        S.actTab = +d.acttab;
        return rr();
    }

    // Projects Tab
    if (d.projtab != null) {
        S.projTab = +d.projtab;
        return rr();
    }

    // Materials Packing Checklist
    if (d.mat != null) {
        S.mat[d.mat] = !S.mat[d.mat];
        return rr();
    }

    // Skills Tab
    if (d.skilltab != null) {
        S.skillTab = +d.skilltab;
        return rr();
    }

    // Toggle In-Page Google Maps Viewer
    if (d.togglemap != null) {
        S.showInlineMap = !S.showInlineMap;
        return rr();
    }

    // Copy Address
    if (d.copy != null) {
        var addressText = 'Centro Comercial La Cascada, Calle 48 #51-18, Medellín, Antioquia';
        var feedbackEl = document.getElementById('cp-feedback');
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(addressText).then(function () {
                if (feedbackEl) feedbackEl.textContent = '✓ Address Copied!';
            }).catch(function () {
                fallbackCopy(addressText, feedbackEl);
            });
        } else {
            fallbackCopy(addressText, feedbackEl);
        }
    }
});

function fallbackCopy(text, el) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        if (el) el.textContent = '✓ Address Copied!';
    } catch (err) {
        if (el) el.textContent = 'Could not copy';
    }
    document.body.removeChild(textArea);
}

// Keyboard Arrow Keys
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') go(cur + 1, true);
    if (e.key === 'ArrowLeft') go(cur - 1, true);
});

// Initialize at Home
go(0, true);
