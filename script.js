function init() {
    const bZone = document.getElementById('balloons-layer');
    const hZone = document.getElementById('hearts-layer');
    const rZone = document.getElementById('fireworks-layer');

    // 1. Balloons with Threads (30 Seconds)
    const bInt = setInterval(() => {
        const wrap = document.createElement('div');
        wrap.className = 'balloon-box';
        wrap.style.left = Math.random() * 95 + 'vw';
        const b = document.createElement('div');
        b.className = 'balloon';
        b.style.background = ['#ff4d6d','#00b4d8','#fca311','#9d4edd'][Math.floor(Math.random()*4)];
        const t = document.createElement('div');
        t.className = 'thread';
        wrap.appendChild(b); wrap.appendChild(t);
        bZone.appendChild(wrap);
        setTimeout(() => wrap.remove(), 9000);
    }, 600);
    setTimeout(() => clearInterval(bInt), 30000);

    // 2. Hearts Fall
    setInterval(() => {
        const h = document.createElement('div');
        h.className = 'heart';
        h.innerHTML = '💗';
        h.style.left = Math.random() * 100 + 'vw';
        h.style.top = '-30px';
        hZone.appendChild(h);
        setTimeout(() => h.remove(), 5000);
    }, 350);

    // 3. Noticeable Fireworks
    setInterval(() => {
        const r = document.createElement('div');
        r.className = 'rocket';
        r.style.left = Math.random() * 100 + 'vw';
        r.style.bottom = '0';
        rZone.appendChild(r);
        r.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-75vh)' }], { duration: 1100, easing: 'ease-in' });
        setTimeout(() => { createBurst(r.style.left); r.remove(); }, 1050);
    }, 750);
}

function createBurst(left) {
    for (let i = 0; i < 35; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = left; p.style.top = '25vh'; 
        const size = Math.random() * 6 + 4;
        p.style.width = size + 'px'; p.style.height = size + 'px';
        const colors = ['#ffffff', '#ffeb3b', '#00e5ff', '#ff4081', '#7fff00', '#87CEEB'];
        const c = colors[Math.floor(Math.random() * colors.length)];
        p.style.backgroundColor = c; p.style.color = c;
        document.body.appendChild(p);
        const a = Math.random() * Math.PI * 2;
        const v = Math.random() * 180 + 60;
        p.animate([{ transform: 'translate(0,0)', opacity: 1 }, { transform: `translate(${Math.cos(a)*v}px, ${Math.sin(a)*v}px)`, opacity: 0 }], { duration: 1100, fill: 'forwards' });
        setTimeout(() => p.remove(), 1100);
    }
}
window.onload = init;