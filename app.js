// ======================================================================
//  APP STATE
// ======================================================================
const STATE = {
    session: { name: 'Student', email: 'student@cse.edu' },
    currentView: 'dashboard',
    currentSemester: 1,
    currentSubjectId: null,
    currentTopicId: null,
    theme: 'dark',
    bookmarks: [],
    completed: [],
    lastRead: null,
    sidebarOpen: false,
};

// ======================================================================
//  DOM REFS
// ======================================================================
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const appEl = $('#app');
const sidebar = $('#sidebar');
const menuToggle = $('#menuToggle');
const semesterList = $('#semesterList');
const pageContent = $('#pageContent');
const globalSearch = $('#globalSearch');
const searchDropdown = $('#searchDropdown');
const themeToggle = $('#themeToggle');
const userAvatar = $('#userAvatar');
const userName = $('#userName');
const userEmail = $('#userEmail');

// ======================================================================
//  HELPERS
// ======================================================================
function getSemester(id) { return SYLLABUS.semesters.find(s => s.id === id); }

function getSubject(semId, subjId) {
    const sem = getSemester(semId);
    return sem ? sem.subjects.find(s => s.id === subjId) : null;
}

function getTopic(semId, subjId, topicId) {
    const subj = getSubject(semId, subjId);
    return subj ? subj.topics.find(t => t.id === topicId) : null;
}

function getAllTopics() {
    const result = [];
    SYLLABUS.semesters.forEach(sem => {
        sem.subjects.forEach(subj => {
            subj.topics.forEach(topic => {
                result.push({ ...topic, semesterId: sem.id, semesterName: sem.name,
                    subjectId: subj.id, subjectCode: subj.code, subjectName: subj.name });
            });
        });
    });
    return result;
}

function getPrevNext(semId, subjId, topicId) {
    const all = getAllTopics();
    const idx = all.findIndex(t => t.semesterId === semId && t.subjectId === subjId && t.id === topicId);
    if (idx === -1) return { prev: null, next: null };
    return { prev: idx > 0 ? all[idx - 1] : null, next: idx < all.length - 1 ? all[idx + 1] : null };
}

function isTopicCompleted(semId, subjId, topicId) {
    return STATE.completed.some(c => c.semesterId === semId && c.subjectId === subjId && c.topicId === topicId);
}

function isTopicBookmarked(semId, subjId, topicId) {
    return STATE.bookmarks.some(b => b.semesterId === semId && b.subjectId === subjId && b.topicId === topicId);
}

function toggleComplete(semId, subjId, topicId) {
    const idx = STATE.completed.findIndex(c => c.semesterId === semId && c.subjectId === subjId && c.topicId === topicId);
    if (idx > -1) STATE.completed.splice(idx, 1);
    else STATE.completed.push({ semesterId: semId, subjectId: subjId, topicId, date: new Date().toISOString() });
    saveState();
}

function toggleBookmark(semId, subjId, topicId) {
    const idx = STATE.bookmarks.findIndex(b => b.semesterId === semId && b.subjectId === subjId && b.topicId === topicId);
    if (idx > -1) STATE.bookmarks.splice(idx, 1);
    else STATE.bookmarks.push({ semesterId: semId, subjectId: subjId, topicId, date: new Date().toISOString() });
    saveState();
}

function saveState() {
    const data = { session: STATE.session, theme: STATE.theme, bookmarks: STATE.bookmarks,
        completed: STATE.completed, lastRead: STATE.lastRead };
    localStorage.setItem('cse_hub_state', JSON.stringify(data));
}

function loadState() {
    try {
        const raw = localStorage.getItem('cse_hub_state');
        if (!raw) return;
        const data = JSON.parse(raw);
        STATE.session = data.session || { name: 'Student', email: 'student@cse.edu' };
        STATE.theme = data.theme || 'dark';
        STATE.bookmarks = data.bookmarks || [];
        STATE.completed = data.completed || [];
        STATE.lastRead = data.lastRead || null;
    } catch (e) { /* ignore */ }
}

function applyTheme(theme) {
    STATE.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-moon';
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> <span>Theme</span>';
    } else {
        icon.className = 'fas fa-sun';
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> <span>Theme</span>';
    }
    saveState();
}

function toggleTheme() { applyTheme(STATE.theme === 'dark' ? 'light' : 'dark'); }

// ======================================================================
//  NAVIGATION (GLOBALLY ACCESSIBLE)
// ======================================================================
window.navigateToTopic = function(semId, subjId, topicId) {
    STATE.currentSemester = semId;
    STATE.currentSubjectId = subjId;
    STATE.currentTopicId = topicId;
    STATE.lastRead = { semesterId: semId, subjectId: subjId, topicId, date: new Date().toISOString() };
    saveState();
    renderView('topic');
    updateSidebarSemesters(semId);
};

function navigateToSubject(semId, subjId) {
    STATE.currentSemester = semId;
    STATE.currentSubjectId = subjId;
    STATE.currentTopicId = null;
    renderView('subject');
    updateSidebarSemesters(semId);
}

function navigateToSemester(semId) {
    STATE.currentSemester = semId;
    STATE.currentSubjectId = null;
    STATE.currentTopicId = null;
    renderView('semester');
    updateSidebarSemesters(semId);
}

function updateSidebarSemesters(activeId) {
    $$('.sem-btn', semesterList).forEach(btn => {
        const id = parseInt(btn.dataset.sem);
        btn.classList.toggle('active', id === activeId);
    });
}

// ======================================================================
//  RENDER FUNCTIONS
// ======================================================================
function renderView(view) {
    $$('.nav-btn', sidebar).forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
    if (window.innerWidth <= 768) { sidebar.classList.remove('open');
        STATE.sidebarOpen = false; }
    switch (view) {
        case 'dashboard':
            renderDashboard();
            break;
        case 'syllabus':
            renderSyllabus();
            break;
        case 'semester':
            renderSemester();
            break;
        case 'subject':
            renderSubject();
            break;
        case 'topic':
            renderTopic();
            break;
        default:
            renderDashboard();
    }
}

// ---------- DASHBOARD ----------
function renderDashboard() {
    const allTopics = getAllTopics();
    const total = allTopics.length;
    const completed = STATE.completed.length;
    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
    const bookmarks = STATE.bookmarks.length;
    let lastReadHtml = '<p class="placeholder">No topic read yet. Browse the syllabus to start learning!</p>';
    let lastReadBtn = '';
    if (STATE.lastRead) {
        const t = getTopic(STATE.lastRead.semesterId, STATE.lastRead.subjectId, STATE.lastRead.topicId);
        if (t) {
            const subj = getSubject(STATE.lastRead.semesterId, STATE.lastRead.subjectId);
            lastReadHtml =
                `<div class="topic-link" data-sem="${STATE.lastRead.semesterId}" data-subj="${STATE.lastRead.subjectId}" data-topic="${STATE.lastRead.topicId}">${t.title}<div class="meta">${subj ? subj.code : ''} · ${subj ? subj.name : ''}</div></div>`;
            lastReadBtn =
                `<button class="btn btn-accent btn-sm resume-btn" data-sem="${STATE.lastRead.semesterId}" data-subj="${STATE.lastRead.subjectId}" data-topic="${STATE.lastRead.topicId}"><i class="fas fa-play"></i> Resume</button>`;
        }
    }
    let bookmarksHtml = '<p class="placeholder">No bookmarks yet.</p>';
    if (STATE.bookmarks.length > 0) {
        bookmarksHtml = STATE.bookmarks.slice(0, 5).map(b => {
            const t = getTopic(b.semesterId, b.subjectId, b.topicId);
            if (!t) return '';
            const subj = getSubject(b.semesterId, b.subjectId);
            return `<div class="topic-link" data-sem="${b.semesterId}" data-subj="${b.subjectId}" data-topic="${b.topicId}">${t.title}<div class="meta">${subj ? subj.code : ''} · ${subj ? subj.name : ''}</div></div>`;
        }).filter(Boolean).join('');
    }
    pageContent.innerHTML = `
            <div class="stats-grid">
                <div class="stat-card"><div class="num">${total}</div><div class="label">Total Topics</div></div>
                <div class="stat-card"><div class="num success">${completed}</div><div class="label">Completed</div></div>
                <div class="stat-card"><div class="num accent">${progress}%</div><div class="label">Progress</div></div>
                <div class="stat-card"><div class="num warning">${bookmarks}</div><div class="label">Bookmarks</div></div>
            </div>
            <div class="dash-sections">
                <div class="dash-card"><h3><i class="fas fa-play-circle"></i> Continue Learning</h3>${lastReadHtml}<div class="dash-actions">${lastReadBtn}</div></div>
                <div class="dash-card"><h3><i class="fas fa-bookmark"></i> Bookmarks</h3>${bookmarksHtml}<div class="dash-actions"><button class="btn btn-outline btn-sm" id="dash-view-bookmarks" ${STATE.bookmarks.length===0?'disabled':''}>View All</button></div></div>
            </div>
            <div class="dash-actions" style="margin-top:1.2rem;gap:0.6rem;"><button class="btn btn-accent" id="dash-browse-syllabus"><i class="fas fa-book-open"></i> Browse Syllabus</button></div>
        `;
    pageContent.querySelectorAll('.topic-link').forEach(el => {
        el.addEventListener('click', () => {
            window.navigateToTopic(parseInt(el.dataset.sem), el.dataset.subj, el.dataset.topic);
        });
    });
    pageContent.querySelectorAll('.resume-btn').forEach(el => {
        el.addEventListener('click', () => {
            window.navigateToTopic(parseInt(el.dataset.sem), el.dataset.subj, el.dataset.topic);
        });
    });
    $('#dash-browse-syllabus')?.addEventListener('click', () => renderView('syllabus'));
    $('#dash-view-bookmarks')?.addEventListener('click', () => {
        if (STATE.bookmarks.length > 0) {
            const b = STATE.bookmarks[0];
            window.navigateToTopic(b.semesterId, b.subjectId, b.topicId);
        }
    });
}

// ---------- SYLLABUS ----------
function renderSyllabus() {
    const semesters = SYLLABUS.semesters;
    pageContent.innerHTML = `
            <div class="view-header"><h2>📚 Syllabus</h2><div class="sub">Browse all semesters and subjects</div></div>
            <div class="subject-grid">
                ${semesters.map(sem => `
                    <div class="subject-card" data-sem="${sem.id}">
                        <div class="code">${sem.name}</div>
                        <div class="name">${sem.name}</div>
                        <div class="desc">${sem.subjects.length} subjects</div>
                        <div class="meta"><span>📖 ${sem.subjects.reduce((acc,s)=>acc+s.topics.length,0)} topics</span></div>
                    </div>
                `).join('')}
            </div>
        `;
    pageContent.querySelectorAll('.subject-card').forEach(el => {
        el.addEventListener('click', () => {
            navigateToSemester(parseInt(el.dataset.sem));
        });
    });
}

// ---------- SEMESTER VIEW ----------
function renderSemester() {
    const sem = getSemester(STATE.currentSemester);
    if (!sem) { renderSyllabus(); return; }
    const totalTopics = sem.subjects.reduce((acc, s) => acc + s.topics.length, 0);
    const completedTopics = sem.subjects.reduce((acc, s) => acc + s.topics.filter(t => isTopicCompleted(sem.id, s.id,
        t.id)).length, 0);
    pageContent.innerHTML = `
            <div class="view-header">
                <h2>${sem.name}</h2>
                <div class="sub">${sem.subjects.length} subjects · ${totalTopics} topics · ${completedTopics} completed</div>
                <button class="btn btn-outline btn-sm mt-1" id="sem-back-syllabus"><i class="fas fa-arrow-left"></i> Back to Syllabus</button>
            </div>
            <div class="subject-grid">
                ${sem.subjects.map(subj => {
                    const total = subj.topics.length;
                    const done = subj.topics.filter(t => isTopicCompleted(sem.id, subj.id, t.id)).length;
                    return `
                        <div class="subject-card" data-sem="${sem.id}" data-subj="${subj.id}">
                            <div class="code">${subj.code}</div>
                            <div class="name">${subj.name}</div>
                            <div class="desc">${subj.description}</div>
                            <div class="meta"><span>📖 ${total} topics</span><span>✅ ${done}/${total}</span></div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    pageContent.querySelectorAll('.subject-card').forEach(el => {
        el.addEventListener('click', function() {
            const semId = parseInt(this.dataset.sem);
            const subjId = this.dataset.subj;
            navigateToSubject(semId, subjId);
        });
    });
    $('#sem-back-syllabus')?.addEventListener('click', () => renderView('syllabus'));
}

// ---------- SUBJECT VIEW (LIST OF TOPICS) ----------
function renderSubject() {
    const sem = getSemester(STATE.currentSemester);
    const subj = getSubject(STATE.currentSemester, STATE.currentSubjectId);
    if (!sem || !subj) { renderSyllabus(); return; }

    pageContent.innerHTML = `
            <div class="view-header">
                <h2>${subj.code}: ${subj.name}</h2>
                <div class="sub">${sem.name} · ${subj.topics.length} topics</div>
                <button class="btn btn-outline btn-sm mt-1" id="subj-back-sem"><i class="fas fa-arrow-left"></i> Back to ${sem.name}</button>
            </div>
            <div class="topic-grid">
                ${subj.topics.map(topic => {
                    const done = isTopicCompleted(sem.id, subj.id, topic.id);
                    return `
                        <div class="topic-card" onclick="window.navigateToTopic(${sem.id}, '${subj.id}', '${topic.id}')">
                            <div class="title">${topic.title}</div>
                            <span class="status-badge ${done ? 'done' : 'pending'}">${done ? '✅ Completed' : '📖 Pending'}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        `;

    $('#subj-back-sem')?.addEventListener('click', () => navigateToSemester(STATE.currentSemester));
}

// ---------- TOPIC DETAIL ----------
function renderTopic() {
    const sem = getSemester(STATE.currentSemester);
    const subj = getSubject(STATE.currentSemester, STATE.currentSubjectId);
    const topic = getTopic(STATE.currentSemester, STATE.currentSubjectId, STATE.currentTopicId);
    if (!sem || !subj || !topic) { renderSyllabus(); return; }
    const completed = isTopicCompleted(sem.id, subj.id, topic.id);
    const bookmarked = isTopicBookmarked(sem.id, subj.id, topic.id);
    const { prev, next } = getPrevNext(sem.id, subj.id, topic.id);

    let contentHtml = topic.content || '';
    if (topic.codeBlocks && topic.codeBlocks.length) {
        topic.codeBlocks.forEach(cb => {
            const langMap = { c: 'c', cpp: 'cpp', sql: 'sql', python: 'python', js: 'javascript' };
            const lang = langMap[cb.lang] || cb.lang;
            contentHtml += `<pre><code class="lang-${lang}">${escHtml(cb.code)}</code></pre>`;
        });
    }
    const objectivesHtml = topic.objectives?.length ? `<ul>${topic.objectives.map(o=>`<li>${escHtml(o)}</li>`).join('')}</ul>` :
        '';
    const takeawaysHtml = topic.keyTakeaways?.length ? `<ul>${topic.keyTakeaways.map(t=>`<li>${escHtml(t)}</li>`).join('')}</ul>` :
        '';
    const questionsHtml = topic.practiceQuestions?.length ? `<ul>${topic.practiceQuestions.map(q=>`<li>${escHtml(q)}</li>`).join('')}</ul>` :
        '';

    // Build resources HTML
    let resourcesHtml = '';
    if (topic.resources && topic.resources.length > 0) {
        resourcesHtml = `
                <h3>📚 Learn More</h3>
                <ul style="list-style:none;padding-left:0;display:flex;flex-wrap:wrap;gap:0.5rem;">
                    ${topic.resources.map(r => `
                        <li style="display:inline-block;">
                            <a href="${r.url}" target="_blank" rel="noopener noreferrer" 
                               style="display:inline-block;padding:0.3rem 1rem;background:var(--bg-input);
                                      border:1px solid var(--border-color);border-radius:40px;
                                      color:var(--accent);text-decoration:none;font-size:0.8rem;
                                      transition:all var(--transition);">
                                ${r.name}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            `;
    }

    pageContent.innerHTML = `
            <div class="topic-hero">
                <div class="breadcrumb">
                    <span data-view="syllabus">Syllabus</span><span class="sep">›</span>
                    <span data-sem="${sem.id}">${sem.name}</span><span class="sep">›</span>
                    <span data-sem="${sem.id}" data-subj="${subj.id}">${subj.code}</span><span class="sep">›</span>
                    <span>${topic.title}</span>
                </div>
                <div class="title-row">
                    <div><h1>${topic.title}</h1><div class="sub-meta">${subj.code} · ${subj.name} · ${sem.name}</div></div>
                    <div class="actions">
                        <button class="btn ${completed?'btn-success':'btn-outline'} btn-sm" id="topic-complete-btn"><i class="fas ${completed?'fa-check-circle':'fa-circle'}"></i> ${completed?'Completed':'Mark Complete'}</button>
                        <button class="btn ${bookmarked?'btn-accent':'btn-outline'} btn-sm" id="topic-bookmark-btn"><i class="fas ${bookmarked?'fa-bookmark':'fa-bookmark'}"></i> ${bookmarked?'Bookmarked':'Bookmark'}</button>
                    </div>
                </div>
            </div>
            <div class="topic-body">
                ${contentHtml}
                ${objectivesHtml ? `<h3>📌 Learning Objectives</h3>${objectivesHtml}` : ''}
                ${takeawaysHtml ? `<h3>🎯 Key Takeaways</h3>${takeawaysHtml}` : ''}
                ${questionsHtml ? `<h3>🧠 Practice Questions</h3>${questionsHtml}` : ''}
                ${resourcesHtml}
            </div>
            <div class="topic-nav">
                <div>${prev ? `<button class="btn btn-outline" id="topic-prev" data-sem="${prev.semesterId}" data-subj="${prev.subjectId}" data-topic="${prev.id}"><i class="fas fa-arrow-left"></i> ${prev.title}</button>` : ''}</div>
                <div>${next ? `<button class="btn btn-accent" id="topic-next" data-sem="${next.semesterId}" data-subj="${next.subjectId}" data-topic="${next.id}">${next.title} <i class="fas fa-arrow-right"></i></button>` : ''}</div>
            </div>
        `;

    // Breadcrumb clicks
    pageContent.querySelectorAll('.breadcrumb span[data-view]').forEach(el => el.addEventListener('click', () =>
        renderView('syllabus')));
    pageContent.querySelectorAll('.breadcrumb span[data-sem]').forEach(el => {
        el.addEventListener('click', () => {
            if (el.dataset.subj) {
                const subj2 = getSubject(parseInt(el.dataset.sem), el.dataset.subj);
                if (subj2) navigateToSubject(parseInt(el.dataset.sem), el.dataset.subj);
            } else {
                navigateToSemester(parseInt(el.dataset.sem));
            }
        });
    });

    $('#topic-complete-btn')?.addEventListener('click', () => { toggleComplete(sem.id, subj.id, topic.id);
        renderTopic(); });
    $('#topic-bookmark-btn')?.addEventListener('click', () => { toggleBookmark(sem.id, subj.id, topic.id);
        renderTopic(); });
    $('#topic-prev')?.addEventListener('click', function() {
        window.navigateToTopic(parseInt(this.dataset.sem), this.dataset.subj, this.dataset.topic);
    });
    $('#topic-next')?.addEventListener('click', function() {
        window.navigateToTopic(parseInt(this.dataset.sem), this.dataset.subj, this.dataset.topic);
    });

    STATE.lastRead = { semesterId: sem.id, subjectId: subj.id, topicId: topic.id, date: new Date().toISOString() };
    saveState();
}

// ======================================================================
//  SIDEBAR
// ======================================================================
function renderSemesterList() {
    semesterList.innerHTML = `
            <div class="label"><i class="fas fa-layer-group"></i> Semesters</div>
            ${SYLLABUS.semesters.map(sem => `
                <button class="sem-btn ${sem.id === STATE.currentSemester ? 'active' : ''}" data-sem="${sem.id}">
                    <span>${sem.name}</span>
                    <span class="badge">${sem.subjects.length}</span>
                </button>
            `).join('')}
        `;
    semesterList.querySelectorAll('.sem-btn').forEach(btn => {
        btn.addEventListener('click', () => navigateToSemester(parseInt(btn.dataset.sem)));
    });
}

function setupSidebarNav() {
    $$('.nav-btn', sidebar).forEach(btn => {
        btn.addEventListener('click', () => {
            STATE.currentView = btn.dataset.view;
            renderView(btn.dataset.view);
            $$('.nav-btn', sidebar).forEach(b => b.classList.toggle('active', b === btn));
        });
    });
}

// ---------- SEARCH ----------
let searchTimeout = null;

function performSearch(query) {
    if (!query || query.length < 2) { searchDropdown.classList.remove('open'); return; }
    const q = query.toLowerCase();
    const all = getAllTopics();
    const results = all.filter(t =>
        t.title.toLowerCase().includes(q) ||
        t.subjectName.toLowerCase().includes(q) ||
        t.subjectCode.toLowerCase().includes(q)
    );
    if (results.length === 0) {
        searchDropdown.innerHTML =
            `<div class="result-item" style="color:var(--text-muted);cursor:default;">No results found</div>`;
        searchDropdown.classList.add('open');
        return;
    }
    searchDropdown.innerHTML = results.slice(0, 8).map(t => `
            <div class="result-item" data-sem="${t.semesterId}" data-subj="${t.subjectId}" data-topic="${t.id}">
                <div>${t.title}</div>
                <div class="sub">${t.subjectCode} · ${t.subjectName} · ${t.semesterName}</div>
            </div>
        `).join('');
    searchDropdown.classList.add('open');
    searchDropdown.querySelectorAll('.result-item').forEach(el => {
        el.addEventListener('click', () => {
            window.navigateToTopic(parseInt(el.dataset.sem), el.dataset.subj, el.dataset.topic);
            searchDropdown.classList.remove('open');
            globalSearch.value = '';
        });
    });
}

// ======================================================================
//  INIT
// ======================================================================
function showApp() {
    appEl.style.display = 'flex';
    const name = STATE.session.name || 'Student';
    const email = STATE.session.email || 'student@cse.edu';
    userAvatar.textContent = name.charAt(0).toUpperCase();
    userName.textContent = name;
    userEmail.textContent = email;
    renderSemesterList();
    setupSidebarNav();
    renderView('dashboard');
    applyTheme(STATE.theme);
}

function escHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ---------- EVENT LISTENERS ----------
themeToggle.addEventListener('click', toggleTheme);
menuToggle.addEventListener('click', () => {
    STATE.sidebarOpen = !STATE.sidebarOpen;
    sidebar.classList.toggle('open', STATE.sidebarOpen);
});
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        const isSidebar = sidebar.contains(e.target);
        const isToggle = menuToggle.contains(e.target);
        if (!isSidebar && !isToggle && STATE.sidebarOpen) {
            sidebar.classList.remove('open');
            STATE.sidebarOpen = false;
        }
    }
});
globalSearch.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    const query = e.target.value.trim();
    searchTimeout = setTimeout(() => performSearch(query), 300);
});
globalSearch.addEventListener('blur', () => {
    setTimeout(() => searchDropdown.classList.remove('open'), 200);
});
globalSearch.addEventListener('focus', () => {
    if (globalSearch.value.trim().length >= 2) performSearch(globalSearch.value.trim());
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') searchDropdown.classList.remove('open'); });

function init() {
    loadState();
    showApp();
}
document.addEventListener('DOMContentLoaded', init);
if (document.readyState === 'complete' || document.readyState === 'interactive') init();
