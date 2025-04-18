import { DotLottie } from "https://esm.sh/@lottiefiles/dotlottie-web";

const iconTopNav = document.querySelector("#iconTopNav");
const dotLottieIconTopNav = new DotLottie({
    canvas:  iconTopNav,
    src: "/assets/lottie/waving.lottie",
    loop: true,
    autoplay: false
});
iconTopNav.addEventListener("mouseover", () => {
    dotLottieIconTopNav.play();
});

iconTopNav.addEventListener("mouseout", () => {
    dotLottieIconTopNav.pause();
});