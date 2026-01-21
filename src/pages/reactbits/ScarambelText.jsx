useEffect(() => {
  const el = ref.current;
  if (!el) return;

  const tween = gsap.fromTo(
    el,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration, ease: "power3.out" }
  );

  return () => tween.kill();
}, [duration]);
