
(function () {
  const featureDetails = {
    ownership: {
      icon: 'shield-check', kicker: 'Ownership Verification', title: 'Property Ownership Verification',
      body: ['This module reviews ownership-related information from deeds, khatian records, mutation papers and supporting documents. It helps identify the current owner, previous owners and the confidence level of the ownership claim.', 'The goal is to highlight possible gaps before the user moves forward with a purchase or legal review.'],
      points: ['Current and previous owner summary', 'Ownership timeline support', 'Confidence and warning indicators']
    },
    chain: {
      icon: 'git-branch', kicker: 'Ownership Chain', title: 'Ownership Chain Tracking',
      body: ['This module visualizes how ownership moved from one person to another. It is useful for inheritance and multi-generation transfer records.', 'If a transfer link is missing or unclear, the system can flag it as a chain gap.'],
      points: ['Grandfather → Father → Current owner mapping', 'Missing transfer link detection', 'Clear ownership journey view']
    },
    document: {
      icon: 'scan-search', kicker: 'Consistency Check', title: 'Document Consistency Check',
      body: ['This module compares repeated information across multiple documents, including names, land quantity, registration numbers, dag/khatian references and dates.', 'The purpose is to detect mismatch early and make manual review easier.'],
      points: ['Name and spelling comparison', 'Land quantity and record matching', 'Suspicious mismatch highlighting']
    },
    compliance: {
      icon: 'list-checks', kicker: 'Compliance', title: 'Compliance Assistant',
      body: ['This module checks whether important supporting records are present, such as mutation papers, tax receipts, inheritance documents and registration-related evidence.', 'It does not replace legal advice but provides a useful checklist for next-step preparation.'],
      points: ['Missing document checklist', 'Pending mutation and tax flags', 'Inheritance gap reminders']
    },
    risk: {
      icon: 'gauge', kicker: 'Risk Analysis', title: 'Purchase Risk Analyzer',
      body: ['This module converts document gaps and suspicious patterns into a simple risk level. Buyers can understand whether a property appears low, medium or high risk before moving forward.', 'The score is a decision-support signal and should be confirmed through official channels.'],
      points: ['Risk score and warning categories', 'Suspicious pattern summary', 'Practical recommendation notes']
    },
    reports: {
      icon: 'file-check-2', kicker: 'Reports', title: 'Report Generation',
      body: ['This module prepares a clean summary from the verification workflow. Reports can include ownership findings, compliance checklist, risk score and user-friendly recommendations.', 'The report is designed to be readable and shareable.'],
      points: ['Ownership report', 'Compliance report', 'Risk analysis report']
    }
  };

  const moduleData = {
    ownership: {
      title: 'Property Ownership Verification', status: 'Ready',
      desc: 'Identifies current owner, previous owners, ownership timeline, and verification confidence level.',
      upload: 'Upload deed, khatian, mutation or tax receipt',
      metrics: ['Confidence 86%', 'Owner match 3/4', 'Review time 2 min'],
      fields: ['Current owner: Md. Rahman detected from deed', 'Previous owner: Abdul Karim matched in transfer section', 'Khatian reference: 1452 / Dag: 792', 'Timeline: registration dates appear sequential'],
      checks: ['Owner name consistency', 'Previous owner reference', 'Registration date sequence', 'Mutation support'],
      timeline: ['Step 1: OCR reads owner and seller names', 'Step 2: Records are compared against previous transfer details', 'Step 3: confidence signal is prepared for report'],
      recommendation: 'Ownership appears mostly consistent. Confirm mutation status and certified registry copy before final decision.',
      result: 'ownership claim appears mostly consistent, but mutation support should be checked before final decision.'
    },
    chain: {
      title: 'Ownership Chain Tracking', status: 'Chain mode',
      desc: 'Visualizes the ownership journey and detects missing transfer links across documents.',
      upload: 'Upload old deeds and inheritance records',
      metrics: ['Chain depth 3 owners', 'Gap flags 1', 'Continuity 74%'],
      fields: ['Original owner: Abdul Karim', 'Transfer recipient: Md. Hasan', 'Current seller: Md. Rahman', 'Potential gap: inheritance proof not attached'],
      checks: ['Grandfather to father transfer', 'Father to current owner transfer', 'Heirship evidence', 'Date order validation'],
      timeline: ['Step 1: Builds owner-to-owner path', 'Step 2: Checks if each transfer has support', 'Step 3: Highlights missing link before purchase review'],
      recommendation: 'One chain link needs stronger supporting documentation. Ask for inheritance or transfer proof before moving forward.',
      result: 'one transfer link needs supporting documentation to make the ownership chain stronger.'
    },
    document: {
      title: 'Document Consistency Check', status: 'Compare mode',
      desc: 'Compares names, land quantity, registration details, transfer records, and ownership continuity.',
      upload: 'Upload multiple documents for comparison',
      metrics: ['Matched fields 11/13', 'Mismatch 2', 'Confidence 81%'],
      fields: ['Name match: Rahman vs Md. Rahman flagged for review', 'Land amount: 6.50 decimals matched with khatian', 'Dag/Khatian: same reference across two files', 'Registration number: one copy unclear'],
      checks: ['Name spelling mismatch', 'Area mismatch', 'Duplicate or missing number', 'Record continuity'],
      timeline: ['Step 1: Extracts repeated fields from each document', 'Step 2: Compares values side by side', 'Step 3: Groups mismatches by priority'],
      recommendation: 'Most fields are aligned. Confirm unclear registration number and name spelling through certified records.',
      result: 'document fields are mostly aligned. Land quantity and unclear registration number should be manually confirmed.'
    },
    compliance: {
      title: 'Compliance Assistant', status: 'Checklist mode',
      desc: 'Detects missing documents, pending mutation, unpaid tax records, inheritance gaps, and incomplete registration.',
      upload: 'Upload compliance papers and receipts',
      metrics: ['Required 6', 'Submitted 4', 'Missing 2'],
      fields: ['Mutation: latest copy required', 'Tax receipt: previous year available', 'Inheritance: needed if seller inherited property', 'Registration: deed copy attached'],
      checks: ['Mutation availability', 'Tax payment evidence', 'Inheritance certificate', 'Registration completeness'],
      timeline: ['Step 1: Creates required document checklist', 'Step 2: Marks submitted vs missing items', 'Step 3: Shows action items for buyer or reviewer'],
      recommendation: 'Collect updated tax receipt and mutation record before finalizing the transaction.',
      result: 'tax receipt and mutation record should be updated before proceeding.'
    },
    risk: {
      title: 'Purchase Risk Analyzer', status: 'Risk mode',
      desc: 'Helps buyers evaluate risk levels before purchase using suspicious pattern analysis.',
      upload: 'Upload all available purchase documents',
      metrics: ['Risk 58/100', 'Level Medium', 'Priority 3'],
      fields: ['Missing papers: mutation and latest tax receipt', 'Mismatch items: minor name variation', 'Chain issues: one missing inheritance support', 'Risk level: calculated from weighted factors'],
      checks: ['Missing record weight', 'Suspicious mismatch weight', 'Ownership gap weight', 'Compliance issue weight'],
      timeline: ['Step 1: Scores each issue by severity', 'Step 2: Groups issues into low, medium or high categories', 'Step 3: Generates recommended next action'],
      recommendation: 'Medium risk. Resolve mutation, tax and ownership chain evidence before making any financial commitment.',
      result: 'medium risk. Resolve missing mutation and chain evidence before any financial commitment.'
    },
    reports: {
      title: 'Report Generation', status: 'Report mode',
      desc: 'Generates ownership verification reports, compliance reports, and risk analysis reports in a structured format.',
      upload: 'Upload final document set for report summary',
      metrics: ['Sections 5', 'Warnings 3', 'Export ready'],
      fields: ['Ownership summary: ready', 'Compliance checklist: action needed', 'Risk score: medium', 'Recommendation note: generated'],
      checks: ['Report type selection', 'Finding summary', 'Warning section', 'Export-ready layout'],
      timeline: ['Step 1: Collects module findings', 'Step 2: Creates readable report sections', 'Step 3: Prepares PDF-style preview'],
      recommendation: 'Generate a combined summary after all missing documents are reviewed and confirmed.',
      result: 'report preview generated with ownership, compliance and risk sections.'
    }
  };

  const workflowData = {
    upload: { title: 'Upload Property Documents', text: 'The user starts by uploading scanned or digital property documents. Each file is organized by document type before analysis begins.', bullets: ['Drag-and-drop or file picker input', 'Document type guidance', 'Upload readiness status'] },
    extract: { title: 'Extract Key Information', text: 'PropertyTrace extracts owner names, registration references, date information, land quantity and relevant identifiers for review.', bullets: ['Owner and seller names', 'Khatian, dag and registration references', 'Dates and land quantity fields'] },
    compare: { title: 'Compare and Validate', text: 'The extracted fields are compared across documents to identify conflicts and missing relationships.', bullets: ['Name and spelling comparison', 'Land value and document reference matching', 'Missing transfer link detection'] },
    risk: { title: 'Generate Risk Insight', text: 'Document gaps and suspicious patterns are grouped into practical risk indicators that users can understand.', bullets: ['Low / medium / high risk level', 'Reason-based warnings', 'Priority issue list'] },
    report: { title: 'Export Structured Report', text: 'The final output is arranged into a professional report that summarizes findings and next-step recommendations.', bullets: ['Ownership summary', 'Compliance checklist', 'Risk analysis report'] }
  };

  const reportData = {
    ownership: { title: 'Ownership Verification Report', badge: 'Draft', desc: 'A structured report showing current owner, previous owners, transfer timeline and confidence level.', status: 'Review Ready', score: '86%', output: 'PDF / Web', owner: 'Current owner matched', property: 'Deed + Khatian', risk: 'Low', issues: '2 items', bar: '24%', reference: 'PT-BD-0426', generated: 'Demo Preview', sections: ['Current owner summary', 'Previous owner list', 'Transfer timeline', 'Confidence notes', 'Registry confirmation reminder'], note: 'This report helps users understand the ownership story before deeper legal verification.', recommendation: 'Verify certified registry copy and mutation paper before final decision.' },
    compliance: { title: 'Compliance Report', badge: 'Checklist', desc: 'A checklist-style report showing required, submitted and missing supporting documents.', status: 'Action Needed', score: '72%', output: 'PDF / Web', owner: 'Owner identity listed', property: 'Compliance documents', risk: 'Medium', issues: '4 items', bar: '52%', reference: 'PT-BD-1198', generated: 'Demo Preview', sections: ['Mutation status', 'Tax receipt review', 'Inheritance requirement', 'Registration document completeness', 'Missing document list'], note: 'Missing compliance items should be collected before finalizing a transaction.', recommendation: 'Collect updated mutation record and latest tax receipt before proceeding.' },
    risk: { title: 'Risk Analysis Report', badge: 'Risk', desc: 'A practical report showing risk score, warning categories and suggested next checks.', status: 'Medium Risk', score: '58/100', output: 'PDF / Web', owner: 'Needs review', property: 'Multi-document scan', risk: 'Medium', issues: '5 items', bar: '58%', reference: 'PT-BD-2307', generated: 'Demo Preview', sections: ['Risk score', 'Mismatch warning', 'Missing record warning', 'Ownership chain warning', 'Recommended next steps'], note: 'Risk score is a decision-support signal and should be confirmed through official and legal verification.', recommendation: 'Resolve ownership chain gap and missing records before any payment commitment.' },
    summary: { title: 'Complete Summary Report', badge: 'Combined', desc: 'A combined report with ownership, compliance and risk findings in one organized structure.', status: 'Complete Draft', score: '81%', output: 'Full Report', owner: 'Mostly consistent', property: 'Full document set', risk: 'Medium', issues: '3 items', bar: '42%', reference: 'PT-BD-8841', generated: 'Demo Preview', sections: ['Executive summary', 'Ownership findings', 'Compliance findings', 'Risk findings', 'Final recommendation note'], note: 'This report is best when users want one clean overview of the full document review workflow.', recommendation: 'Use this summary for discussion with an official records office or legal reviewer.' }
  };

  function icon(name, cls) { return `<i data-lucide="${name}" class="${cls}"></i>`; }
  function ensureModalRoot() { let root = document.getElementById('modalRoot'); if (!root) { root = document.createElement('div'); root.id = 'modalRoot'; document.body.appendChild(root); } return root; }
  function modalShell(id, content, extraClass = '') { return `<div id="${id}" class="modal-overlay" aria-hidden="true" role="dialog" aria-modal="true"><div class="modal-panel ${extraClass}">${content}</div></div>`; }

  function buildAuthModals() {
    const root = ensureModalRoot();
    if (document.getElementById('loginModal')) return;
    const login = modalShell('loginModal', `
      <div class="relative overflow-hidden p-7 sm:p-8">
        <div class="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-accent/25 blur-2xl"></div>
        <div class="absolute -left-16 bottom-4 h-32 w-32 rounded-full bg-gold/25 blur-2xl"></div>
        <button class="modal-close absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/55 text-primary hover:bg-white" data-close-modal aria-label="Close login modal">${icon('x','h-5 w-5')}</button>
        <div class="relative">
          <div class="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-white/45 bg-white/35 text-accent shadow-[inset_0_1px_0_rgba(255,255,255,.65)] backdrop-blur-xl">${icon('lock-keyhole','h-7 w-7')}</div>
          <p class="mb-2 text-xs font-extrabold uppercase tracking-[.22em] text-accent">Secure Access</p>
          <h2 class="section-title text-3xl font-extrabold text-primary">Login to PropertyTrace</h2>
          <p class="mt-3 text-sm leading-6 text-darkGray">Access your saved verification dashboard, uploaded document history, and previous reports.</p>
          <form class="mt-6 grid gap-4" onsubmit="event.preventDefault(); alert('Demo login form only. Backend connection is not included.');">
            <label class="grid gap-2 text-sm font-bold text-primary/80">Email Address<input class="form-input" type="email" placeholder="you@example.com" required></label>
            <label class="grid gap-2 text-sm font-bold text-primary/80">Password<input class="form-input" type="password" placeholder="Enter password" required></label>
            <div class="flex items-center justify-between text-xs font-bold"><label class="flex items-center gap-2 text-darkGray"><input type="checkbox" class="h-4 w-4 rounded border-primary/20"> Remember me</label><a href="#" class="text-accent hover:text-secondary">Forgot password?</a></div>
            <button class="mt-2 rounded-full bg-accent px-6 py-3.5 text-sm font-extrabold text-white shadow-glow hover:bg-secondary transition" type="submit">Login</button>
          </form>
          <p class="mt-5 text-center text-sm text-darkGray">New here? <button class="font-extrabold text-accent hover:text-secondary" data-switch-modal="signupModal">Create an account</button></p>
        </div>
      </div>`);
    const signup = modalShell('signupModal', `
      <div class="relative overflow-hidden p-7 sm:p-8">
        <div class="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/25 blur-2xl"></div>
        <div class="absolute -left-16 bottom-4 h-36 w-36 rounded-full bg-accent/24 blur-2xl"></div>
        <button class="modal-close absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/55 text-primary hover:bg-white" data-close-modal aria-label="Close signup modal">${icon('x','h-5 w-5')}</button>
        <div class="relative">
          <div class="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-white/45 bg-white/35 text-gold shadow-[inset_0_1px_0_rgba(255,255,255,.65)] backdrop-blur-xl">${icon('sparkles','h-7 w-7')}</div>
          <p class="mb-2 text-xs font-extrabold uppercase tracking-[.22em] text-gold">Get Started</p>
          <h2 class="section-title text-3xl font-extrabold text-primary">Create Your Account</h2>
          <p class="mt-3 text-sm leading-6 text-darkGray">Start a document review workflow and generate your first property verification report.</p>
          <form class="mt-6 grid gap-4" onsubmit="event.preventDefault(); alert('Demo signup form only. Backend connection is not included.');">
            <label class="grid gap-2 text-sm font-bold text-primary/80">Full Name<input class="form-input" type="text" placeholder="Your full name" required></label>
            <label class="grid gap-2 text-sm font-bold text-primary/80">Email Address<input class="form-input" type="email" placeholder="you@example.com" required></label>
            <div class="grid gap-4 sm:grid-cols-2"><label class="grid gap-2 text-sm font-bold text-primary/80">Password<input class="form-input" type="password" placeholder="Password" required></label><label class="grid gap-2 text-sm font-bold text-primary/80">Confirm<input class="form-input" type="password" placeholder="Confirm" required></label></div>
            <label class="flex items-start gap-2 text-xs leading-5 text-darkGray"><input type="checkbox" class="mt-1 h-4 w-4 rounded border-primary/20" required> I agree to use PropertyTrace as a decision-support tool and verify official records separately.</label>
            <button class="mt-2 rounded-full bg-accent px-6 py-3.5 text-sm font-extrabold text-white shadow-glow hover:bg-secondary transition" type="submit">Create Account</button>
          </form>
          <p class="mt-5 text-center text-sm text-darkGray">Already have an account? <button class="font-extrabold text-accent hover:text-secondary" data-switch-modal="loginModal">Login</button></p>
        </div>
      </div>`);
    root.insertAdjacentHTML('beforeend', login + signup);
  }

  function buildFeatureModal() {
    const root = ensureModalRoot();
    if (document.getElementById('featureModal')) return;
    const feature = modalShell('featureModal', `
      <div class="relative overflow-hidden p-7 sm:p-8">
        <div class="absolute right-0 top-0 h-44 w-44 rounded-full bg-accent/15 blur-3xl"></div><div class="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-gold/15 blur-3xl"></div>
        <button class="modal-close absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/55 text-primary hover:bg-white" data-close-modal aria-label="Close feature modal">${icon('x','h-5 w-5')}</button>
        <div class="relative"><div id="featureModalIcon" class="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-accent/10 text-accent"></div><p id="featureModalKicker" class="mb-2 text-xs font-extrabold uppercase tracking-[.22em] text-accent"></p><h2 id="featureModalTitle" class="section-title pr-9 text-3xl font-extrabold text-primary"></h2><div id="featureModalBody" class="mt-4 grid gap-3 text-sm leading-7 text-darkGray"></div><div class="mt-6 rounded-2xl border border-primary/10 bg-white/45 p-5"><p class="mb-3 text-sm font-extrabold text-primary">Key Benefits</p><div id="featureModalPoints" class="grid gap-2"></div></div><div class="mt-6 flex flex-col gap-3 sm:flex-row"><button class="rounded-full bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-glow hover:bg-secondary transition" data-open-modal="signupModal">Start Verification</button><button class="rounded-full border border-primary/15 bg-white/40 px-6 py-3 text-sm font-extrabold text-primary hover:border-accent hover:text-accent transition" data-close-modal>Close</button></div></div>
      </div>`, 'modal-soft-panel');
    root.insertAdjacentHTML('beforeend', feature);
  }

  function openModal(id) { document.querySelectorAll('.modal-overlay.show').forEach(m => closeModal(m.id)); const modal = document.getElementById(id); if (!modal) return; modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden'; if (window.lucide) lucide.createIcons(); }
  function closeModal(id) { const modal = document.getElementById(id); if (!modal) return; modal.classList.remove('show'); modal.setAttribute('aria-hidden','true'); if (!document.querySelector('.modal-overlay.show')) document.body.style.overflow = ''; }
  function populateFeatureModal(key) { const data = featureDetails[key]; if (!data) return; document.getElementById('featureModalIcon').innerHTML = icon(data.icon,'h-7 w-7'); document.getElementById('featureModalKicker').textContent = data.kicker; document.getElementById('featureModalTitle').textContent = data.title; document.getElementById('featureModalBody').innerHTML = data.body.map(p => `<p>${p}</p>`).join(''); document.getElementById('featureModalPoints').innerHTML = data.points.map(p => `<div class="flex gap-3 text-sm text-darkGray">${icon('check-circle-2','mt-0.5 h-5 w-5 shrink-0 text-accent')}<span>${p}</span></div>`).join(''); openModal('featureModal'); }

  function renderModule(key) {
    const data = moduleData[key]; if (!data) return;
    document.querySelectorAll('[data-module-card]').forEach(btn => btn.classList.toggle('active', btn.dataset.moduleCard === key));
    const set = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
    set('moduleTitle', data.title); set('moduleDescription', data.desc); set('moduleStatus', data.status); set('uploadLabel', data.upload); set('moduleProgressText', '0%');
    const bar = document.getElementById('moduleProgress'); if (bar) bar.style.width = '0%';
    const metrics = document.getElementById('moduleMetrics'); if (metrics) metrics.innerHTML = data.metrics.map(x => `<div class="module-metric"><span>${x.split(' ')[0]}</span><b>${x.substring(x.indexOf(' ')+1)}</b></div>`).join('');
    const fields = document.getElementById('moduleFields'); if (fields) fields.innerHTML = data.fields.map(x => `<div class="flex gap-2">${icon('dot','mt-1 h-4 w-4 shrink-0 text-accent')}<span>${x}</span></div>`).join('');
    const checks = document.getElementById('moduleChecks'); if (checks) checks.innerHTML = data.checks.map(x => `<div class="flex gap-2">${icon('check-circle-2','mt-0.5 h-4 w-4 shrink-0 text-accent')}<span>${x}</span></div>`).join('');
    const timeline = document.getElementById('moduleTimeline'); if (timeline) timeline.innerHTML = data.timeline.map(x => `<div class="flex gap-3"><span class="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold"></span><span>${x}</span></div>`).join('');
    set('moduleRecommendation', data.recommendation);
    const result = document.getElementById('moduleResult'); if (result) result.innerHTML = 'Choose a module and click <b>Run Demo Analysis</b> to see a sample working result.';
    if (window.lucide) lucide.createIcons();
  }

  function runModule() {
    const active = document.querySelector('[data-module-card].active'); const key = active ? active.dataset.moduleCard : 'ownership'; const data = moduleData[key];
    const status = document.getElementById('moduleStatus'), text = document.getElementById('moduleProgressText'), bar = document.getElementById('moduleProgress'), result = document.getElementById('moduleResult');
    if (!data || !bar || !text || !result) return;
    if (status) status.textContent = 'Analyzing';
    result.innerHTML = 'Running extraction, comparison, checklist review and report preparation...';
    let p = 0;
    const timer = setInterval(() => { p += 20; bar.style.width = p + '%'; text.textContent = p + '%'; if (p >= 100) { clearInterval(timer); if (status) status.textContent = 'Completed'; result.innerHTML = `<div class="flex gap-3"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-white">${icon('check','h-5 w-5')}</span><span><b>Demo analysis completed:</b> ${data.result}<br><small class="text-darkGray/80">This is a front-end working demo. A production version would connect this workflow to OCR, storage and report generation.</small></span></div>`; if (window.lucide) lucide.createIcons(); } }, 180);
  }

  function setupWorkflow() {
    const title = document.getElementById('workflowTitle'); if (!title) return;
    const text = document.getElementById('workflowText'), bullets = document.getElementById('workflowBullets');
    document.querySelectorAll('[data-workflow-step]').forEach(btn => btn.addEventListener('click', () => {
      const data = workflowData[btn.dataset.workflowStep]; if (!data) return;
      document.querySelectorAll('[data-workflow-step]').forEach(b => b.classList.remove('active')); btn.classList.add('active');
      title.textContent = data.title; text.textContent = data.text; bullets.innerHTML = data.bullets.map(b => `<div class="flex gap-2">${icon('check-circle-2','mt-0.5 h-4 w-4 shrink-0 text-accent')}<span>${b}</span></div>`).join(''); if (window.lucide) lucide.createIcons();
    }));
    const first = document.querySelector('[data-workflow-step].active'); if (first) first.click();
  }

  function updateRisk() {
    const checks = Array.from(document.querySelectorAll('[data-risk-factor]'));
    const range = document.getElementById('riskConfidence');
    if (!checks.length || !range) return;

    let score = Number(range.value || 0);
    checks.forEach(c => { if (c.checked) score += Number(c.dataset.riskFactor || 0); });
    score = Math.min(100, score);

    const scoreEl = document.getElementById('riskScore');
    const levelEl = document.getElementById('riskLevel');
    const percent = document.getElementById('riskPercent');
    const bar = document.getElementById('riskBar');
    const summary = document.getElementById('riskSummary');
    const advice = document.getElementById('riskAdvice');

    let level = 'Low Risk';
    let color = '#008B7B';
    let shadow = '0 14px 28px rgba(0,139,123,.22)';
    let msg = 'Current sample indicates low risk. Continue reviewing official records before making a final decision.';
    let tips = ['Keep official verification as the final step.', 'Store all supporting receipts and certified copies.'];

    if (score >= 65) {
      level = 'High Risk';
      color = '#853535';
      shadow = '0 14px 28px rgba(133,53,53,.24)';
      msg = 'High risk pattern detected. Do not proceed without official verification and professional legal review.';
      tips = ['Resolve ownership chain gaps first.', 'Collect missing mutation, tax, or inheritance papers.', 'Request legal review before payment.'];
    } else if (score >= 35) {
      level = 'Medium Risk';
      color = '#D59D3A';
      shadow = '0 14px 28px rgba(213,157,58,.25)';
      msg = 'Medium risk pattern detected. Some documents require additional checking before purchase commitment.';
      tips = ['Confirm mismatched names and land quantity.', 'Collect latest tax receipt and mutation status.', 'Ask for missing transfer evidence.'];
    }

    if (scoreEl) scoreEl.textContent = String(score).padStart(2, '0');
    if (percent) percent.textContent = score + '%';
    if (bar) { bar.style.width = score + '%'; bar.style.background = color; }
    if (levelEl) { levelEl.textContent = level; levelEl.style.background = color; levelEl.style.color = level === 'Medium Risk' ? '#07202E' : '#FFFFFF'; levelEl.style.boxShadow = shadow; }
    if (summary) summary.textContent = msg;
    if (advice) advice.innerHTML = tips.map(t => `<div class="flex gap-2">${icon('arrow-right-circle','mt-0.5 h-4 w-4 shrink-0 text-accent')}<span>${t}</span></div>`).join('');
    if (window.lucide) lucide.createIcons();
  }

  function renderReport(key) {
    const data = reportData[key]; if (!data) return;
    document.querySelectorAll('[data-report-type]').forEach(btn => btn.classList.toggle('active', btn.dataset.reportType === key));
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('reportTitle', data.title); set('reportBadge', data.badge); set('reportDescription', data.desc); set('reportStatus', data.status); set('reportScore', data.score); set('reportOutput', data.output); set('reportOwner', data.owner); set('reportProperty', data.property); set('reportRiskLabel', data.risk); set('reportIssueCount', data.issues); set('reportReference', data.reference); set('reportGenerated', data.generated); set('reportRecommendation', data.recommendation); set('reportNote', data.note);
    const badge = document.getElementById('reportBadge'); if (badge) { badge.className = 'rounded-full px-4 py-2 text-xs font-extrabold ' + (key === 'risk' ? 'bg-danger/10 text-danger' : key === 'compliance' ? 'bg-gold/15 text-gold' : 'bg-accent/10 text-accent'); }
    const riskLabel = document.getElementById('reportRiskLabel'); if (riskLabel) { riskLabel.className = 'text-4xl font-extrabold ' + (data.risk === 'Low' ? 'text-accent' : data.risk === 'Medium' ? 'text-gold' : 'text-danger'); }
    const miniBar = document.getElementById('reportMiniBar'); if (miniBar) { miniBar.style.width = data.bar; miniBar.className = 'h-full rounded-full transition-all duration-500 ' + (data.risk === 'Low' ? 'bg-accent' : data.risk === 'Medium' ? 'bg-gold' : 'bg-danger'); }
    const sections = document.getElementById('reportSections'); if (sections) sections.innerHTML = data.sections.map(s => `<div class="flex gap-2">${icon('check-circle-2','mt-0.5 h-4 w-4 shrink-0 text-accent')}<span>${s}</span></div>`).join('');
    if (window.lucide) lucide.createIcons();
  }

  function setupScrollSpy() {
    if (document.body.dataset.page !== 'home') return;
    const sections = [
      ['home', document.getElementById('home')], ['features', document.getElementById('features')], ['how', document.getElementById('how')], ['risk', document.getElementById('risk')], ['reports', document.getElementById('reports')]
    ].filter(x => x[1]);
    if (!sections.length) return;
    const activate = (key) => document.querySelectorAll('[data-nav-key]').forEach(a => a.classList.toggle('active', a.dataset.navKey === key));
    const onScroll = () => {
      let current = 'home'; const y = window.scrollY + 180;
      for (const [key, el] of sections) { if (el.offsetTop <= y) current = key; }
      activate(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  function setupInteractions() {
    if (window.lucide) lucide.createIcons();
    const menuBtn = document.getElementById('menuBtn'), mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) { menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden')); document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('hidden'))); }
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) { const revealObserver = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), { threshold: .12 }); revealElements.forEach(el => revealObserver.observe(el)); } else revealElements.forEach(el => el.classList.add('visible'));
    const backToTop = document.getElementById('backToTop'); if (backToTop) { window.addEventListener('scroll', () => { if (window.scrollY > 700) { backToTop.classList.remove('hidden'); backToTop.classList.add('grid'); } else { backToTop.classList.add('hidden'); backToTop.classList.remove('grid'); } }); backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' })); }

    document.addEventListener('click', (event) => {
      const openBtn = event.target.closest('[data-open-modal]'); if (openBtn) { event.preventDefault(); openModal(openBtn.getAttribute('data-open-modal')); return; }
      const switchBtn = event.target.closest('[data-switch-modal]'); if (switchBtn) { event.preventDefault(); document.querySelectorAll('.modal-overlay.show').forEach(m => closeModal(m.id)); openModal(switchBtn.getAttribute('data-switch-modal')); return; }
      const closeBtn = event.target.closest('[data-close-modal]'); if (closeBtn) { event.preventDefault(); const modal = closeBtn.closest('.modal-overlay'); if (modal) closeModal(modal.id); return; }
      const learnBtn = event.target.closest('[data-feature]'); if (learnBtn) { event.preventDefault(); populateFeatureModal(learnBtn.getAttribute('data-feature')); return; }
      const moduleBtn = event.target.closest('[data-module-card]'); if (moduleBtn) { event.preventDefault(); renderModule(moduleBtn.dataset.moduleCard); if (document.getElementById('moduleWorkspaceModal')) openModal('moduleWorkspaceModal'); return; }
      const reportBtn = event.target.closest('[data-report-type]'); if (reportBtn) { event.preventDefault(); renderReport(reportBtn.dataset.reportType); return; }
      if (event.target.classList && event.target.classList.contains('modal-overlay')) closeModal(event.target.id);
    });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') document.querySelectorAll('.modal-overlay.show').forEach(m => closeModal(m.id)); });

    const upload = document.getElementById('featureUpload'); if (upload) upload.addEventListener('change', () => { const label = document.getElementById('uploadLabel'); if (label) label.textContent = upload.files.length ? `${upload.files.length} file(s) selected for demo analysis` : 'Upload deed, khatian, mutation or tax receipt'; });
    const runBtn = document.getElementById('runModuleBtn'); if (runBtn) runBtn.addEventListener('click', runModule);
    renderModule('ownership');

    setupWorkflow();
    document.querySelectorAll('[data-risk-factor], #riskConfidence').forEach(el => el.addEventListener('input', updateRisk));
    document.querySelectorAll('[data-risk-factor]').forEach(el => el.addEventListener('change', updateRisk));
    const resetRisk = document.getElementById('resetRiskBtn'); if (resetRisk) resetRisk.addEventListener('click', () => { document.querySelectorAll('[data-risk-factor]').forEach(c => c.checked = false); const range = document.getElementById('riskConfidence'); if (range) range.value = 8; updateRisk(); });
    updateRisk();

    renderReport('ownership');
    const dl = document.getElementById('downloadReportBtn'); if (dl) dl.addEventListener('click', () => alert('Demo report download placeholder. Connect this button to a generated PDF in production.'));
    const contactForm = document.getElementById('contactForm'); if (contactForm) contactForm.addEventListener('submit', (e) => { e.preventDefault(); const msg = document.getElementById('contactSuccess'); if (msg) msg.classList.remove('hidden'); contactForm.reset(); });
    setupScrollSpy();
  }

  document.addEventListener('DOMContentLoaded', () => { buildAuthModals(); buildFeatureModal(); setupInteractions(); });
})();
