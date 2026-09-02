/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ============================================================
  // GSAP + ScrollTrigger
  // ============================================================
  gsap.registerPlugin(ScrollTrigger);

  // ============================================================
  // HAMBURGER MENU
  // ============================================================
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // ============================================================
  // ÍCONES (Lucide)
  // ============================================================
  lucide.createIcons();

  // ============================================================
  // PARTÍCULAS DO HERO
  // ============================================================
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    for (let i = 0; i < 25; i++) {
      const el = document.createElement('div');
      el.classList.add('particle');
      const size = 2 + Math.random() * 4;
      el.style.width = size + 'px';
      el.style.height = size + 'px';
      el.style.left = Math.random() * 100 + '%';
      el.style.top = Math.random() * 100 + '%';
      el.style.animationDuration = 12 + Math.random() * 18 + 's';
      el.style.animationDelay = Math.random() * 10 + 's';
      el.style.opacity = 0.1 + Math.random() * 0.25;
      particlesContainer.appendChild(el);
    }
  }

  // ============================================================
  // PARTÍCULAS DO CTA
  // ============================================================
  const ctaParticles = document.getElementById('ctaParticles');
  if (ctaParticles) {
    for (let i = 0; i < 15; i++) {
      const el = document.createElement('div');
      el.classList.add('particle');
      const size = 2 + Math.random() * 3;
      el.style.width = size + 'px';
      el.style.height = size + 'px';
      el.style.left = Math.random() * 100 + '%';
      el.style.top = Math.random() * 100 + '%';
      el.style.animationDuration = 16 + Math.random() * 20 + 's';
      el.style.animationDelay = Math.random() * 10 + 's';
      el.style.opacity = 0.08 + Math.random() * 0.15;
      ctaParticles.appendChild(el);
    }
  }

  // ============================================================
  // ANIMAÇÕES GSAP
  // ============================================================

  // Hero
  gsap.from('.hero__tag', { opacity: 0, y: 30, duration: 0.8, delay: 0.2 });
  gsap.from('.hero__title', { opacity: 0, y: 40, duration: 1, delay: 0.3 });
  gsap.from('.hero__sub', { opacity: 0, y: 30, duration: 0.8, delay: 0.5 });
  gsap.from('.hero__buttons', { opacity: 0, y: 30, duration: 0.8, delay: 0.7 });
  gsap.from('.visual__scene', { opacity: 0, scale: 0.92, duration: 1.2, delay: 0.4, ease: 'power2.out' });

  // Cards flutuantes do hero (entrada com efeito cascata)
  gsap.utils.toArray('.visual__card').forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: 0.8 + i * 0.15,
      ease: 'power2.out',
    });
  });

  // Tutor card
  gsap.from('.tutor__card', {
    opacity: 0,
    y: 40,
    duration: 0.9,
    scrollTrigger: {
      trigger: '.tutor__card',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });

  // Blocos da seção "Seu dinheiro está tentando te dizer"
  gsap.utils.toArray('.message__block').forEach((block, i) => {
    gsap.from(block, {
      opacity: 0,
      x: -30,
      duration: 0.7,
      delay: i * 0.12,
      scrollTrigger: {
        trigger: block,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  // X-Ray stats
  gsap.utils.toArray('.xray__stat').forEach((stat, i) => {
    gsap.from(stat, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: stat,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Goals
  gsap.utils.toArray('.goal').forEach((goal, i) => {
    gsap.from(goal, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: goal,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Chat messages
  gsap.utils.toArray('.chat__message').forEach((msg, i) => {
    gsap.from(msg, {
      opacity: 0,
      x: i % 2 === 0 ? -20 : 20,
      duration: 0.6,
      delay: 0.2 + i * 0.15,
      scrollTrigger: {
        trigger: msg,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Insights
  gsap.utils.toArray('.insight').forEach((insight, i) => {
    gsap.from(insight, {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      delay: i * 0.08,
      scrollTrigger: {
        trigger: insight,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Benefits
  gsap.utils.toArray('.benefit').forEach((benefit, i) => {
    gsap.from(benefit, {
      opacity: 0,
      x: -15,
      duration: 0.5,
      delay: i * 0.06,
      scrollTrigger: {
        trigger: benefit,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Security items
  gsap.utils.toArray('.security__item').forEach((item, i) => {
    gsap.from(item, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: i * 0.08,
      scrollTrigger: {
        trigger: item,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Plans
  gsap.utils.toArray('.plan').forEach((plan, i) => {
    gsap.from(plan, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: plan,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });

  // CTA
  gsap.from('.cta__content', {
    opacity: 0,
    y: 30,
    duration: 0.9,
    scrollTrigger: {
      trigger: '.cta__content',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });

  // ============================================================
  // GRÁFICO X-RAY (canvas)
  // ============================================================
  const canvasXray = document.getElementById('chartXray');
  if (canvasXray) {
    const ctx = canvasXray.getContext('2d');
    const w = canvasXray.width;
    const h = canvasXray.height;

    // Dados: receitas e despesas (6 meses)
    const receitas = [4500, 5200, 5800, 6200, 6500, 6850];
    const despesas = [3800, 4100, 3900, 4300, 4200, 4230];
    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];

    function drawXray(progress) {
      ctx.clearRect(0, 0, w, h);

      const padding = { top: 20, bottom: 20, left: 30, right: 20 };
      const chartW = w - padding.left - padding.right;
      const chartH = h - padding.top - padding.bottom;

      const maxVal = Math.max(...receitas, ...despesas) * 1.2;
      const count = receitas.length;

      const drawBars = (data, color, offset) => {
        ctx.beginPath();
        const barWidth = chartW / count * 0.35;
        data.forEach((val, i) => {
          const x = padding.left + (i / count) * chartW + offset;
          const barH = (val / maxVal) * chartH;
          const y = padding.top + chartH - barH;
          ctx.fillStyle = color;
          ctx.shadowColor = color;
          ctx.shadowBlur = 6;
          ctx.fillRect(x, y, barWidth, barH);
          ctx.shadowBlur = 0;
        });
      };

      // Desenhar barras (apenas se progress > 0)
      const drawCount = Math.floor(progress * count);
      if (drawCount > 0) {
        const dataReceitas = receitas.slice(0, drawCount);
        const dataDespesas = despesas.slice(0, drawCount);
        // Preencher com zeros para manter posição
        while (dataReceitas.length < count) dataReceitas.push(0);
        while (dataDespesas.length < count) dataDespesas.push(0);

        drawBars(dataReceitas, 'rgba(199, 255, 53, 0.7)', -10);
        drawBars(dataDespesas, 'rgba(255, 107, 107, 0.5)', 10);
      }

      // Linha de grade sutil
      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= 4; i++) {
        const y = padding.top + (i / 4) * chartH;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(w - padding.right, y);
        ctx.stroke();
      }

      // Rótulos dos meses
      ctx.fillStyle = 'rgba(255,255,255,0.2)';
      ctx.font = '8px Space Grotesk, sans-serif';
      ctx.textAlign = 'center';
      meses.forEach((m, i) => {
        const x = padding.left + (i / count) * chartW + chartW / count / 2;
        ctx.fillText(m, x, h - 4);
      });

      // Legenda
      ctx.font = '7px Space Grotesk, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillStyle = 'rgba(199,255,53,0.6)';
      ctx.fillRect(w - 90, 6, 8, 8);
      ctx.fillText('Receitas', w - 78, 13);
      ctx.fillStyle = 'rgba(255,107,107,0.5)';
      ctx.fillRect(w - 40, 6, 8, 8);
      ctx.fillText('Despesas', w - 28, 13);
    }

    // Animar quando entrar na tela
    let progressXray = 0;
    const xrayTrigger = ScrollTrigger.create({
      trigger: canvasXray,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(
          { p: 0 },
          {
            p: 1,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: function () {
              progressXray = this.targets()[0].p;
              drawXray(progressXray);
            },
            onComplete: () => {
              drawXray(1);
            },
          }
        );
        xrayTrigger.disable();
      },
    });
  }

  // ============================================================
  // PARALLAX LEVE (movimento do mouse no hero)
  // ============================================================
  const heroVisual = document.getElementById('heroVisual');
  if (heroVisual) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      gsap.to(heroVisual, { x: x, y: y, duration: 1.2, ease: 'power1.out' });
    });
  }

  // ============================================================
  // HEADER SCROLL
  // ============================================================
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.style.background = 'rgba(3, 28, 24, 0.85)';
    } else {
      header.style.background = 'rgba(3, 28, 24, 0.7)';
    }
  });
});