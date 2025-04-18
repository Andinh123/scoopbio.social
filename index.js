import { DotLottie } from "https://esm.sh/@lottiefiles/dotlottie-web";

const iconTopNav = document.querySelector("#iconTopNav");
const dotLottieIconTopNav = new DotLottie({
    canvas:  iconTopNav,
    src: "/assets/lottie/waving.lottie",
    loop: true,
    autoplay: false
});
const mainSectionScoopbio = new DotLottie({
    canvas: document.querySelector("#mainSectionScoopbio"),
    src: "/assets/lottie/test.lottie",
    loop: true,
    autoplay: false
});
iconTopNav.addEventListener("mouseover", () => {
    dotLottieIconTopNav.play();
});

iconTopNav.addEventListener("mouseout", () => {
    dotLottieIconTopNav.pause();
});

(() => {
    const scrollSpeed = 1;      // Controls how sensitive the scroll is
    const smoothness = 0.12;    // Controls how smooth the scroll feels (0.05 - 0.15 is good)
  
    const scrollElement = document.scrollingElement || document.documentElement;
    let current = scrollElement.scrollTop;
    let target = current;
    let isAnimating = false;
  
    function easeScroll() {
        current += (target - current) * smoothness;
        scrollElement.scrollTop = current;
    
        let percentage = current / (scrollElement.scrollHeight - window.innerHeight);
        mainSectionScoopbio.setFrame(Math.floor(percentage * mainSectionScoopbio.totalFrames));
    
        if (Math.abs(target - current) > 0.5) {
            requestAnimationFrame(easeScroll);
        } else {
            scrollElement.scrollTop = target;
            mainSectionScoopbio.setFrame(Math.floor(
                (target / (scrollElement.scrollHeight - window.innerHeight)) * mainSectionScoopbio.totalFrames
            ));
            isAnimating = false;
        }
    }
  
    function onWheel(e) {
        e.preventDefault();
    
        target += e.deltaY * scrollSpeed;
        target = Math.max(0, Math.min(target, scrollElement.scrollHeight - window.innerHeight));
        if (!isAnimating) {
            isAnimating = true;
            requestAnimationFrame(easeScroll);
        }
    }
  
    window.addEventListener('wheel', onWheel, { passive: false });
})();