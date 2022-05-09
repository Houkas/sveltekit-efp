<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import "../app.css";

    import { onMount } from "svelte";

    onMount(() => {
        const body = document.body,
            scrollWrap = document.getElementsByClassName(
                "smooth-scroll-wrapper"
            )[0],
            height = scrollWrap.getBoundingClientRect().height - 1,
            speed = 0.04;
        var offset = 0;

        body.style.height = Math.floor(height) + "px";
        function smoothScroll() {
            offset += (window.pageYOffset - offset) * speed;
            var scroll = "translateY(-" + offset + "px) translateZ(0)";
            // @ts-ignore
            scrollWrap.style.transform = scroll;
            const callScroll = requestAnimationFrame(smoothScroll);
        }

        smoothScroll();
    });
</script>

<Header />

<main>
    <slot />
</main>

<Footer />

<style lang="scss">
</style>
