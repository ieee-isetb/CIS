// Encoded access verification (prevents casual inspection)
const _k = 'Q0lTMjAyNg==';
const _v = (s) => atob(s).split('').reverse().join('');
const _c = { a: 'a20zb3VzYXk=', o: 'NjIwMmRyYW9i', p: 'NjIwMnBvaHNrcm93RkE=' };
const _verify = (code, type) => code === _v(_c[type]);

// Firebase references (will be set after Firebase loads)
let db, dbRef, dbSet, dbPush, dbGet, dbOnValue, dbUpdate, dbRemove;

// Secure hash function for answer verification
const _hash = (str) => {
    let hash = 0;
    const s = String(str).toLowerCase();
    for (let i = 0; i < s.length; i++) {
        const char = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
};

const _answers = {
    4: 1507998,      
    5: 'match',     
    6: -1846380095,  
    7: 64578,          
    8: 'match',     
    9: 1507998,      
    10: 1217613029,  
    11: 1507998,     
    12: 1038053024,  
    13: 64578,       
};

const _verifyMC = (qId, answerIndex) => _hash(answerIndex) === _answers[qId];

const _verifyArrange = (qId, items) => _hash(JSON.stringify(items)) === _answers[qId];

const _verifyFillBlank = (qId, answer) => _hash(answer.toLowerCase()) === _answers[qId];

const _getCorrectMC = (qId) => {
    const map = { 1: 0, 2: 1, 4: 1, 7: 2, 9: 1, 11: 1, 13: 2 };
    return map[qId];
};

const _getCorrectOrder = (qId) => {
    if (qId === 3) return ['Data Preparation', 'Model and Training Technique Selection', 'AI Model Training', 'Model Validation', 'Model Testing'];
    if (qId === 12) return ['Input Layer', 'Convolution Layer', 'Pooling Layer', 'Dense Layer', 'Output Layer'];
    return [];
};

const _getCorrectFillBlank = (qId) => {
    const map = { 6: 'Transfer', 10: 'Connected', 15: 'Reinforcement' };
    return map[qId];
};

const questions = [
    
    { 
        id: 4, 
        type: 'multiple-choice', 
        question: 'Which neural network architecture is primarily used for image and video recognition?',
        options: ['RNN (Recurrent Neural Networks)', 'CNN (Convolutional Neural Networks)', 'GAN (Generative Adversarial Networks)', 'Perceptron'],
        points: 10 
    },
    { 
        id: 5, 
        type: 'drag-drop', 
        question: 'Match each AI field with its description:',
        items: [
            { id: 'cv', label: 'Computer Vision' }, 
            { id: 'nlp', label: 'NLP' }, 
            { id: 'genai', label: 'Generative AI' }
        ],
        targets: [
            { id: 'cv', description: 'AI that enables machines to interpret the visual world' }, 
            { id: 'nlp', description: 'AI that processes and understands human language' }, 
            { id: 'genai', description: 'AI that generates new content like text, images, or music' }
        ],
        points: 15 
    },
    { 
        id: 6, 
        type: 'fill-blank', 
        question: '_____ Learning uses pre-trained models for new, related tasks to save time and computational power.',
        points: 10 
    },
    { 
        id: 7, 
        type: 'multiple-choice', 
        question: 'Which of the following is NOT a Large Language Model (LLM)?',
        options: ['ChatGPT', 'Google BERT', 'DALL-E', 'DeepSeek'],
        points: 10 
    },
    { 
        id: 8, 
        type: 'drag-drop', 
        question: 'Match the learning type with its characteristic:',
        items: [
            { id: 'sup', label: 'Supervised Learning' }, 
            { id: 'unsup', label: 'Unsupervised Learning' }
        ],
        targets: [
            { id: 'sup', description: 'Uses labeled data for Classification tasks' }, 
            { id: 'unsup', description: 'Uses unlabeled data for Clustering tasks' }
        ],
        points: 15 
    },
    { 
        id: 9, 
        type: 'multiple-choice', 
        question: 'Which of the following is a Generative AI model for creating images?',
        options: ['Google BERT', 'Stable Diffusion', 'YOLO', 'RCNN'],
        points: 10 
    },
    { 
        id: 10, 
        type: 'fill-blank', 
        question: 'The three main types of layers in a CNN structure are: Convolution, Pooling, and Fully _____ layers.',
        points: 10 
    },
    { 
        id: 11, 
        type: 'multiple-choice', 
        question: 'Which of the following is a task performed by NLP (Natural Language Processing)?',
        options: ['Image recognition', 'Sentiment Analysis', 'Object detection', 'Video compression'],
        points: 10 
    },
    { 
        id: 12, 
        type: 'arrange', 
        question: 'Arrange the CNN layers from input to output:',
        items: ['Output Layer', 'Pooling Layer', 'Input Layer', 'Dense Layer', 'Convolution Layer'],
        points: 15 
    },
    { 
        id: 13, 
        type: 'multiple-choice', 
        question: 'Which architecture is commonly used in Computer Vision alongside CNN?',
        options: ['BERT', 'LSTM', 'RCNN and YOLO', 'GPT'],
        points: 10 
    },
];

// State
let currentScreen = 'access';
let playerName = '';
let playerId = null;
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let arrangedItems = [];
let dragDropMatches = {};
let fillBlankAnswer = '';
let unsubscribers = [];

// Init - wait for Firebase
function waitForFirebase() {
    return new Promise((resolve) => {
        const check = () => {
            if (window.firebaseDB) {
                db = window.firebaseDB.db;
                dbRef = window.firebaseDB.ref;
                dbSet = window.firebaseDB.set;
                dbPush = window.firebaseDB.push;
                dbGet = window.firebaseDB.get;
                dbOnValue = window.firebaseDB.onValue;
                dbUpdate = window.firebaseDB.update;
                dbRemove = window.firebaseDB.remove;
                resolve();
            } else {
                setTimeout(check, 50);
            }
        };
        check();
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await waitForFirebase();
    setupListeners();
});

function setupListeners() {
    document.getElementById('access-form').addEventListener('submit', handleAccess);
    document.getElementById('name-form').addEventListener('submit', handleName);
    document.getElementById('view-scoreboard-btn').addEventListener('click', () => showScreen('scoreboard'));
    document.getElementById('play-again-btn').addEventListener('click', resetQuiz);
    document.getElementById('back-home-btn').addEventListener('click', () => window.location.href = '../../');
    
    document.getElementById('playerName').addEventListener('input', (e) => {
        const val = e.target.value.trim();
        document.getElementById('avatar-preview').textContent = val ? val[0].toUpperCase() : '?';
    });
}

function handleAccess(e) {
    e.preventDefault();
    const code = document.getElementById('accessCode').value.trim();
    const error = document.getElementById('access-error');
    
    if (_verify(code, 'a')) {
        showScreen('admin');
        setupAdminListeners();
        subscribeToAdminData();
    } else if (_verify(code, 'o')) {
        showScreen('officer');
        subscribeToOfficerData();
    } else if (_verify(code, 'p')) {
        showScreen('name');
    } else {
        error.textContent = 'Invalid access code';
    }
}

async function handleName(e) {
    e.preventDefault();
    const name = document.getElementById('playerName').value.trim();
    const error = document.getElementById('name-error');
    
    if (!name || name.length < 2) {
        error.textContent = 'Name must be at least 2 characters';
        return;
    }
    
    playerName = name;
    playerId = 'p_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    
    await addParticipant(name, 'waiting');
    showScreen('waiting');
    updateWaitingScreenUI();
    subscribeToGameStatus();
    subscribeToWaitingCount();
}

async function addParticipant(name, status) {
    const participantRef = dbRef(db, `quiz/participants/${playerId}`);
    await dbSet(participantRef, { 
        id: playerId, 
        name, 
        status, 
        timestamp: Date.now() 
    });
}

async function updateParticipantStatus(status) {
    const participantRef = dbRef(db, `quiz/participants/${playerId}/status`);
    await dbSet(participantRef, status);
}

function updateWaitingScreenUI() {
    document.getElementById('waiting-avatar').textContent = playerName[0].toUpperCase();
    document.getElementById('waiting-player-name').textContent = playerName;
}

function subscribeToWaitingCount() {
    const participantsRef = dbRef(db, 'quiz/participants');
    const unsub = dbOnValue(participantsRef, (snapshot) => {
        const data = snapshot.val() || {};
        const participants = Object.values(data);
        const waiting = participants.filter(p => p.status === 'waiting').length;
        const waitingEl = document.getElementById('waiting-count');
        if (waitingEl) waitingEl.textContent = waiting;
    });
    unsubscribers.push(unsub);
}

function subscribeToGameStatus() {
    const statusRef = dbRef(db, 'quiz/gameStatus');
    const unsub = dbOnValue(statusRef, async (snapshot) => {
        const data = snapshot.val();
        if (data && data.started === true && currentScreen === 'waiting') {
            // Game started, begin quiz
            unsubscribeAll();
            startQuiz();
        }
    });
    unsubscribers.push(unsub);
}

function unsubscribeAll() {
    unsubscribers.forEach(unsub => {
        if (typeof unsub === 'function') unsub();
    });
    unsubscribers = [];
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showScreen('quiz');
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    
    document.getElementById('player-avatar').textContent = playerName[0].toUpperCase();
    document.getElementById('player-display-name').textContent = playerName;
    document.getElementById('current-score').textContent = score;
    document.getElementById('current-q').textContent = currentQuestion + 1;
    document.getElementById('total-q').textContent = questions.length;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    
    selectedAnswer = null;
    arrangedItems = q.type === 'arrange' ? [...q.items] : [];
    dragDropMatches = {};
    fillBlankAnswer = '';
    
    const card = document.getElementById('question-card');
    card.innerHTML = buildQuestion(q);
    setupQuestionListeners(q);
}

function buildQuestion(q) {
    const typeNames = {
        'multiple-choice': '📝 Multiple Choice',
        'arrange': '🔢 Arrange Order',
        'drag-drop': '🎯 Match Items',
        'fill-blank': '✏️ Fill Blank'
    };
    
    let html = `
        <div class="question-type">${typeNames[q.type]}</div>
        <h2 class="question-text">${q.question}</h2>
    `;
    
    if (q.type === 'multiple-choice') {
        html += `<div class="options-list">
            ${q.options.map((opt, i) => `
                <div class="option-item" data-index="${i}">
                    <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                    <span class="option-text">${opt}</span>
                </div>
            `).join('')}
        </div>`;
    } else if (q.type === 'arrange') {
        html += `
            <p class="arrange-hint">Drag items to reorder</p>
            <div class="arrange-list" id="arrange-list">
                ${arrangedItems.map((item, i) => `
                    <div class="arrange-item" draggable="true" data-index="${i}">
                        <span class="arrange-num">${i + 1}</span>
                        <span class="arrange-text">${item}</span>
                        <span class="arrange-handle">⋮⋮</span>
                    </div>
                `).join('')}
            </div>
        `;
    } else if (q.type === 'drag-drop') {
        html += `
            <div class="dragdrop-container">
                <div class="dragdrop-items" id="dragdrop-items">
                    ${q.items.map(item => `
                        <div class="dragdrop-item" draggable="true" data-id="${item.id}">${item.label}</div>
                    `).join('')}
                </div>
                <div class="dragdrop-targets">
                    ${q.targets.map(t => `
                        <div class="dragdrop-target" data-id="${t.id}">
                            <div class="drop-zone" data-target="${t.id}">
                                <span class="drop-placeholder">Drop here</span>
                            </div>
                            <span class="target-desc">${t.description}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else if (q.type === 'fill-blank') {
        html += `<input type="text" class="fillblank-input" id="fillblank-input" placeholder="Type your answer..." autocomplete="off">`;
    }
    
    html += `
        <div class="question-actions">
            <button class="submit-btn" id="submit-btn" disabled>Submit Answer</button>
        </div>
    `;
    
    return html;
}

function setupQuestionListeners(q) {
    const submitBtn = document.getElementById('submit-btn');
    
    if (q.type === 'multiple-choice') {
        document.querySelectorAll('.option-item').forEach(opt => {
            opt.addEventListener('click', () => {
                document.querySelectorAll('.option-item').forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
                selectedAnswer = parseInt(opt.dataset.index);
                submitBtn.disabled = false;
            });
        });
    } else if (q.type === 'arrange') {
        setupArrangeDrag();
        submitBtn.disabled = false;
    } else if (q.type === 'drag-drop') {
        setupDragDrop(q, submitBtn);
    } else if (q.type === 'fill-blank') {
        const input = document.getElementById('fillblank-input');
        input.addEventListener('input', (e) => {
            fillBlankAnswer = e.target.value.trim();
            submitBtn.disabled = !fillBlankAnswer;
        });
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && fillBlankAnswer) submitBtn.click();
        });
    }
    
    submitBtn.addEventListener('click', () => submitAnswer(q));
}

function setupArrangeDrag() {
    const list = document.getElementById('arrange-list');
    let dragged = null;
    
    list.querySelectorAll('.arrange-item').forEach(item => {
        item.addEventListener('dragstart', () => {
            dragged = item;
            item.classList.add('dragging');
        });
        
        item.addEventListener('dragend', () => {
            item.classList.remove('dragging');
            dragged = null;
            updateArrangeNumbers();
        });
        
        item.addEventListener('dragover', (e) => {
            e.preventDefault();
            if (dragged && dragged !== item) {
                const rect = item.getBoundingClientRect();
                const mid = rect.top + rect.height / 2;
                if (e.clientY < mid) {
                    list.insertBefore(dragged, item);
                } else {
                    list.insertBefore(dragged, item.nextSibling);
                }
            }
        });
    });
}

function updateArrangeNumbers() {
    const items = document.querySelectorAll('.arrange-item');
    arrangedItems = Array.from(items).map(item => item.querySelector('.arrange-text').textContent);
    items.forEach((item, i) => item.querySelector('.arrange-num').textContent = i + 1);
}

function setupDragDrop(q, submitBtn) {
    const items = document.querySelectorAll('.dragdrop-item');
    const zones = document.querySelectorAll('.drop-zone');
    
    items.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            item.classList.add('dragging');
            e.dataTransfer.setData('text/plain', item.dataset.id);
        });
        item.addEventListener('dragend', () => item.classList.remove('dragging'));
    });
    
    zones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('dragover');
        });
        zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('dragover');
            const id = e.dataTransfer.getData('text/plain');
            const item = document.querySelector(`.dragdrop-item[data-id="${id}"]`);
            const targetId = zone.dataset.target;
            
            const existing = zone.querySelector('.dragdrop-item');
            if (existing) {
                document.getElementById('dragdrop-items').appendChild(existing);
                delete dragDropMatches[targetId];
            }
            
            zone.querySelector('.drop-placeholder')?.remove();
            zone.appendChild(item);
            dragDropMatches[targetId] = id;
            
            if (Object.keys(dragDropMatches).length === q.items.length) {
                submitBtn.disabled = false;
            }
        });
    });
}

function submitAnswer(q) {
    let correct = false;
    
    if (q.type === 'multiple-choice') {
        correct = _verifyMC(q.id, selectedAnswer);
        const correctIdx = _getCorrectMC(q.id);
        document.querySelectorAll('.option-item').forEach((opt, i) => {
            if (i === correctIdx) opt.classList.add('correct');
            else if (i === selectedAnswer && !correct) opt.classList.add('incorrect');
        });
    } else if (q.type === 'arrange') {
        correct = _verifyArrange(q.id, arrangedItems);
        const correctOrder = _getCorrectOrder(q.id);
        document.querySelectorAll('.arrange-item').forEach((item, i) => {
            const text = item.querySelector('.arrange-text').textContent;
            item.classList.add(text === correctOrder[i] ? 'correct' : 'incorrect');
        });
    } else if (q.type === 'drag-drop') {
        correct = q.items.every(item => dragDropMatches[item.id] === item.id);
        document.querySelectorAll('.drop-zone').forEach(zone => {
            const item = zone.querySelector('.dragdrop-item');
            zone.classList.add(item && item.dataset.id === zone.dataset.target ? 'correct' : 'incorrect');
        });
    } else if (q.type === 'fill-blank') {
        correct = _verifyFillBlank(q.id, fillBlankAnswer);
        const input = document.getElementById('fillblank-input');
        input.classList.add(correct ? 'correct' : 'incorrect');
        input.disabled = true;
        if (!correct) {
            const hint = document.createElement('div');
            hint.className = 'correct-hint';
            hint.textContent = `Answer: ${_getCorrectFillBlank(q.id)}`;
            input.parentNode.appendChild(hint);
        }
    }
    
    if (correct) score += q.points;
    
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.textContent = correct ? '✓ Correct!' : '✗ Wrong';
    submitBtn.classList.add(correct ? 'correct' : 'incorrect');
    submitBtn.disabled = true;
    
    setTimeout(() => {
        const actions = document.querySelector('.question-actions');
        const nextBtn = document.createElement('button');
        nextBtn.className = 'next-btn';
        nextBtn.textContent = currentQuestion < questions.length - 1 ? 'Next →' : 'See Results';
        nextBtn.addEventListener('click', () => {
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                renderQuestion();
            } else {
                finishQuiz();
            }
        });
        actions.appendChild(nextBtn);
    }, 400);
}

async function finishQuiz() {
    await updateParticipantStatus('completed');
    await saveScore();
    
    document.getElementById('result-player-name').textContent = playerName;
    document.getElementById('final-score').textContent = score;
    
    const maxScore = 175;
    const percent = score / maxScore;
    const ring = document.getElementById('score-ring');
    if (ring) {
        const circumference = 339.292;
        ring.style.strokeDashoffset = circumference * (1 - percent);
    }
    
    showScreen('results');
}

async function saveScore() {
    const scoreRef = dbRef(db, `quiz/scores/${playerId}`);
    await dbSet(scoreRef, { 
        id: playerId, 
        name: playerName, 
        score, 
        timestamp: Date.now() 
    });
}

function showScreen(name) {
    currentScreen = name;
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`${name}-screen`).classList.add('active');
    
    if (name === 'scoreboard') subscribeToScoreboard();
}

function subscribeToScoreboard() {
    const scoresRef = dbRef(db, 'quiz/scores');
    const unsub = dbOnValue(scoresRef, (snapshot) => {
        const data = snapshot.val() || {};
        const scores = Object.values(data).sort((a, b) => b.score - a.score);
        renderScoreboardUI(scores);
    });
    unsubscribers.push(unsub);
}

function renderScoreboardUI(scores) {
    const list = document.getElementById('scores-list');
    
    if (playerName && playerId) {
        const rank = scores.findIndex(s => s.id === playerId) + 1;
        if (rank > 0) {
            const card = document.getElementById('your-rank-card');
            card.style.display = 'flex';
            document.getElementById('your-rank').textContent = getMedal(rank);
            document.getElementById('your-rank-name').textContent = playerName;
            document.getElementById('your-rank-score').textContent = score;
        }
    }
    
    if (!scores.length) {
        list.innerHTML = '<div class="empty-state">No scores yet</div>';
        return;
    }
    
    list.innerHTML = scores.slice(0, 50).map((s, i) => `
        <div class="score-item ${s.id === playerId ? 'highlight' : ''}">
            <div class="score-rank">${getMedal(i + 1)}</div>
            <div class="score-info">
                <span class="score-name">${s.name}</span>
                <span class="score-time">${formatTime(s.timestamp)}</span>
            </div>
            <div class="score-points">${s.score}</div>
        </div>
    `).join('');
}

function getMedal(rank) {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
}

function formatTime(ts) {
    return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function resetQuiz() {
    unsubscribeAll();
    playerName = '';
    playerId = null;
    currentQuestion = 0;
    score = 0;
    showScreen('access');
    document.getElementById('accessCode').value = '';
    document.getElementById('playerName').value = '';
    document.getElementById('avatar-preview').textContent = '?';
}

// ============ ADMIN ============
function setupAdminListeners() {
    document.getElementById('start-game-btn').addEventListener('click', startGame);
    document.getElementById('stop-game-btn').addEventListener('click', stopGame);
    document.getElementById('clear-data-btn').addEventListener('click', clearAllData);
}

async function startGame() {
    // First update all waiting participants to in-progress
    const participantsRef = dbRef(db, 'quiz/participants');
    const snapshot = await dbGet(participantsRef);
    const data = snapshot.val() || {};
    
    const updates = {};
    Object.keys(data).forEach(key => {
        if (data[key].status === 'waiting') {
            updates[`quiz/participants/${key}/status`] = 'in-progress';
        }
    });
    
    // Also set game status
    updates['quiz/gameStatus'] = { started: true, timestamp: Date.now() };
    
    await dbUpdate(dbRef(db), updates);
}

async function stopGame() {
    const statusRef = dbRef(db, 'quiz/gameStatus');
    await dbSet(statusRef, { started: false, timestamp: Date.now() });
}

function subscribeToAdminData() {
    // Subscribe to participants
    const participantsRef = dbRef(db, 'quiz/participants');
    const unsub1 = dbOnValue(participantsRef, (snapshot) => {
        const data = snapshot.val() || {};
        const participants = Object.values(data);
        updateAdminParticipants(participants);
    });
    unsubscribers.push(unsub1);
    
    // Subscribe to scores
    const scoresRef = dbRef(db, 'quiz/scores');
    const unsub2 = dbOnValue(scoresRef, (snapshot) => {
        const data = snapshot.val() || {};
        const scores = Object.values(data).sort((a, b) => b.score - a.score);
        updateAdminScores(scores);
    });
    unsubscribers.push(unsub2);
    
    // Subscribe to game status
    const statusRef = dbRef(db, 'quiz/gameStatus');
    const unsub3 = dbOnValue(statusRef, (snapshot) => {
        const data = snapshot.val() || { started: false };
        updateAdminStatus(data.started);
    });
    unsubscribers.push(unsub3);
}

function updateAdminParticipants(participants) {
    const waiting = participants.filter(p => p.status === 'waiting').length;
    const playing = participants.filter(p => p.status === 'in-progress').length;
    const done = participants.filter(p => p.status === 'completed').length;
    
    document.getElementById('total-participants').textContent = participants.length;
    document.getElementById('waiting-count-admin').textContent = waiting;
    document.getElementById('in-progress-count').textContent = playing;
    document.getElementById('completed-count').textContent = done;
    
    const pList = document.getElementById('participants-list');
    pList.innerHTML = participants.length ? participants.map(p => `
        <div class="participant-item">
            <div class="player-avatar">${p.name[0].toUpperCase()}</div>
            <div class="participant-info">
                <span class="participant-name">${p.name}</span>
                <span class="participant-time">${formatTime(p.timestamp)}</span>
            </div>
            <span class="participant-status ${p.status}">${p.status === 'in-progress' ? 'PLAYING' : p.status.toUpperCase()}</span>
        </div>
    `).join('') : '<div class="empty-state-tournament"><span class="empty-icon">👥</span><span>Awaiting challengers...</span></div>';
}

function updateAdminScores(scores) {
    const top = scores.length ? Math.max(...scores.map(s => s.score)) : 0;
    document.getElementById('top-score').textContent = top;
    
    const lBoard = document.getElementById('admin-leaderboard');
    lBoard.innerHTML = scores.length ? scores.slice(0, 20).map((s, i) => `
        <div class="leaderboard-item">
            <div class="leaderboard-rank">${i + 1}</div>
            <div class="leaderboard-info">
                <span class="leaderboard-name">${s.name}</span>
                <span class="leaderboard-time">${formatTime(s.timestamp)}</span>
            </div>
            <div class="leaderboard-score">${s.score}</div>
        </div>
    `).join('') : '<div class="empty-state-tournament"><span class="empty-icon">🏆</span><span>No rankings yet</span></div>';
}

function updateAdminStatus(started) {
    const startBtn = document.getElementById('start-game-btn');
    const stopBtn = document.getElementById('stop-game-btn');
    const statusEl = document.getElementById('game-status-text');
    
    startBtn.style.display = started ? 'none' : 'flex';
    stopBtn.style.display = started ? 'flex' : 'none';
    
    if (started) {
        statusEl.classList.add('live');
        statusEl.querySelector('.status-text').textContent = 'LIVE';
    } else {
        statusEl.classList.remove('live');
        statusEl.querySelector('.status-text').textContent = 'STANDBY';
    }
}

// ============ OFFICER ============
function subscribeToOfficerData() {
    const participantsRef = dbRef(db, 'quiz/participants');
    const unsub1 = dbOnValue(participantsRef, (snapshot) => {
        const data = snapshot.val() || {};
        const participants = Object.values(data);
        const done = participants.filter(p => p.status === 'completed').length;
        document.getElementById('officer-total-participants').textContent = participants.length;
        document.getElementById('officer-completed-count').textContent = done;
    });
    unsubscribers.push(unsub1);
    
    const scoresRef = dbRef(db, 'quiz/scores');
    const unsub2 = dbOnValue(scoresRef, (snapshot) => {
        const data = snapshot.val() || {};
        const scores = Object.values(data).sort((a, b) => b.score - a.score);
        const top = scores.length ? Math.max(...scores.map(s => s.score)) : 0;
        document.getElementById('officer-top-score').textContent = top;
        
        const lBoard = document.getElementById('officer-leaderboard');
        lBoard.innerHTML = scores.length ? scores.slice(0, 50).map((s, i) => `
            <div class="leaderboard-item">
                <div class="leaderboard-rank">${i + 1}</div>
                <div class="leaderboard-info">
                    <span class="leaderboard-name">${s.name}</span>
                    <span class="leaderboard-time">${formatTime(s.timestamp)}</span>
                </div>
                <div class="leaderboard-score">${s.score}</div>
            </div>
        `).join('') : '<div class="empty-state-tournament"><span class="empty-icon">🏆</span><span>Waiting for results...</span></div>';
    });
    unsubscribers.push(unsub2);
    
    const statusRef = dbRef(db, 'quiz/gameStatus');
    const unsub3 = dbOnValue(statusRef, (snapshot) => {
        const data = snapshot.val() || { started: false };
        const statusEl = document.getElementById('officer-game-status');
        if (data.started) {
            statusEl.classList.add('live');
            statusEl.querySelector('.status-text').textContent = 'LIVE';
        } else {
            statusEl.classList.remove('live');
            statusEl.querySelector('.status-text').textContent = 'STANDBY';
        }
    });
    unsubscribers.push(unsub3);
}

async function clearAllData() {
    if (!confirm('Clear ALL data? This cannot be undone!')) return;
    
    const quizRef = dbRef(db, 'quiz');
    await dbRemove(quizRef);
    
    // Re-initialize game status
    const statusRef = dbRef(db, 'quiz/gameStatus');
    await dbSet(statusRef, { started: false, timestamp: Date.now() });
}

window.addEventListener('beforeunload', () => {
    unsubscribeAll();
});
