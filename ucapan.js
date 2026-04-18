document.addEventListener("DOMContentLoaded", () => {
const message = `Assalamualaikum babyyy ❤️

Selamat hari lahir untuk my one and only, Nur Syahira Syazlynnda, my babysyasya. Happy birthday baby. Hari ni merupakan hari yang sangat special sebab 22 tahun lepas dunia dapat someone yang sangat kuat, sangat baik, dan sangat penuh dengan kasih sayang.

saya just nak baby tahu, sepanjang saya kenal baby, saya nampak macam mana kuatnya baby hadap semua benda dalam hidup baby. Bukan semua orang mampu jadi macam baby. baby mungkin tak sedar, tapi cara baby survive, cara baby still bangun walaupun penat, walaupun sakit, itu semua buat saya sangat bangga dengan baby.

Baby, I know sometimes baby rasa penat sangat jadi kuat. Rasa macam nak rehat, nak ada orang yang betul-betul faham tanpa baby explain panjang-panjang. And it's okay. Hari ni, especially hari lahir baby, saya harap baby bagi diri baby round of applause. You don't have to be strong all the time. Dengan saya, baby always boleh jadi diri baby yang sebenar.

baby tahu tak, setiap kali saya tengok baby dengan family baby, saya nampak betapa besarnya kasih sayang diorang dekat baby. Awak adalah kebanggaan diorang. dan saya tahu baby dah buat yang terbaik untuk jadi anak yang mereka harapkan. and I'm really proud of you for that.

to be honest, saya bersyukur sangat sebab Allah bagi saya peluang untuk kenal baby, untuk ada dalam hidup baby walaupun mungkin tak sempurna. every moment dengan baby, walaupun kejap, sangat bermakna untuk saya. baby buat hidup saya lain, buat saya rasa nak jadi lebih baik.

for your birthday ni, saya tak mintak banyak. saya cuma doa supaya baby sentiasa diberi ketenangan, kebahagiaan, dan kekuatan untuk terus capai what you wish for. saya harap semua luka lama baby perlahan-lahan sembuh. baby layak untuk rasa tenang, layak untuk rasa disayangi tanpa rasa takut.

and baby, satu benda yang saya nak awak ingat, baby tak pernah kurang. baby tak perlu jadi lebih daripada diri baby untuk layak disayangi. In the right eyes, baby always cukup sempurna.

Thank you sebab teruskan jadi orang baik. Thank you sebab bagi saya ruang dalam hidup baby. Thank you sebab jadi diri sendiri.

Happy birthday again, baby ❤️
Saya sayang awak sangat sangat tau baby .`;

  const msgContainer = document.getElementById("message");
  let i = 0;

  function typeWriter() {
    if (i < message.length) {
      msgContainer.textContent += message.charAt(i);
      i++;
      
      // Random typing speed for more natural feel
      const baseSpeed = 40;
      const randomVariation = Math.random() * 20;
      const speed = baseSpeed + randomVariation;
      
      setTimeout(typeWriter, speed);
    } else {
      // Remove cursor when complete
      msgContainer.classList.add('complete');
      
      // After typing finishes, fade in signature with surprise
      setTimeout(() => {
        const s = document.getElementById('signature');
        if (s) { 
          s.style.opacity = '0'; 
          s.style.transition = 'opacity 1.5s ease, transform 1.5s ease'; 
          requestAnimationFrame(() => { 
            s.style.opacity = '1'; 
            s.style.transform = 'translateX(0)';
          }); 
        }
        
        // Create surprise sparkles around signature
        createSignatureSparkles();
      }, 500);
    }
  }

  // Start typing when card appears
  function startTypingWhenReady() {
    const wrapper = document.querySelector('.flowers-wrapper');
    if (!wrapper) {
      setTimeout(startTypingWhenReady, 100);
      return;
    }
    
    // Check if already visible
    if (wrapper.classList.contains('show')) {
      setTimeout(() => typeWriter(), 500);
      return;
    }
    
    // Watch for when card becomes visible
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          if (wrapper.classList.contains('show')) {
            setTimeout(() => typeWriter(), 500);
            observer.disconnect();
          }
        }
      });
    });
    
    observer.observe(wrapper, { attributes: true });
    
    // Fallback: also check periodically
    const checkInterval = setInterval(() => {
      if (wrapper.classList.contains('show')) {
        clearInterval(checkInterval);
        setTimeout(() => typeWriter(), 500);
        observer.disconnect();
      }
    }, 200);
  }
  
  startTypingWhenReady();

  // Enhanced hearts spawn with variety
  function spawnHeart() {
    const container = document.querySelector('.hearts');
    if (!container) return;
    
    const heart = document.createElement('div');
    const heartTypes = ['heart', 'heart-pink', 'heart-gold', 'heart-white'];
    const heartType = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    heart.className = `heart ${heartType}`;
    
    const size = Math.random() * 15 + 8; // 8 - 23px
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = '-20px';
    heart.style.animationDuration = `${Math.random() * 4 + 6}s`;
    heart.style.opacity = `${0.4 + Math.random() * 0.6}`;
    heart.style.animationDelay = `${Math.random() * 0.5}s`;
    
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 12000);
  }

  // Sparkles spawn function
  function spawnSparkle() {
    const container = document.querySelector('.sparkles');
    if (!container) return;
    
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 2}s`;
    sparkle.style.animationDuration = `${Math.random() * 2 + 2}s`;
    
    container.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 4000);
  }

  // Create sparkles around signature
  function createSignatureSparkles() {
    const signature = document.getElementById('signature');
    if (!signature) return;
    
    const rect = signature.getBoundingClientRect();
    const container = document.querySelector('.sparkles');
    if (!container) return;
    
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.position = 'fixed';
        sparkle.style.left = `${rect.left + Math.random() * rect.width}px`;
        sparkle.style.top = `${rect.top + Math.random() * rect.height}px`;
        sparkle.style.animation = 'sparkleFloat 1.5s ease-out forwards';
        sparkle.style.transform = 'scale(1.5)';
        container.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1500);
      }, i * 100);
    }
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (!prefersReduced) {
    // Spawn hearts more frequently
    setInterval(spawnHeart, 500);
    // Spawn sparkles less frequently
    setInterval(spawnSparkle, 2000);
    
    // Initial sparkles burst
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        setTimeout(spawnSparkle, i * 100);
      }
    }, 500);
  }
});
