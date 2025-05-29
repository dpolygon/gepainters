//      To use Gradient Animation use radial gradient
// 
//      background-image:
//      radial-gradient(at var(--p1x) var(--p1y), hsla(28, 100%, 74%, 1) 0px, transparent 50%),
//      radial-gradient(at var(--p2x) var(--p2y), hsla(189, 100%, 56%, 1) 0px, transparent 50%),

export function GradientAnimation() {

    const gradients_count = 5;
    const SPEED = 0.01;

    const gradients = Array.from({ length: gradients_count }, (_, i) => ({
        xVar: `--p${i + 1}x`,
        yVar: `--p${i + 1}y`,
        currentX: Math.random() * 100,
        currentY: Math.random() * 100,
        targetX: Math.random() * 100,
        targetY: Math.random() * 100,
    }));

    function setVars() {
        gradients.forEach(({ xVar, yVar, currentX, currentY }) => {
            document.body.style.setProperty(xVar, `${currentX}%`);
            document.body.style.setProperty(yVar, `${currentY}%`);
        });
    }

    function updateTargets() {
        const rand = (min, max) => min + Math.random() * (max - min);
        const ranges = [
            [0, 33, 66, 100],
            [33, 66, 0, 50],
            [0, 20, 30, 70],
            [0, 25, 80, 100],
            [40, 60, 50, 80],
        ];

        gradients.forEach((g, i) => {
            const [xMin, xMax, yMin, yMax] = ranges[i];
            g.targetX = rand(xMin, xMax);
            g.targetY = rand(yMin, yMax);
        });
    }

    function animate() {
        const lerp = (a, b, t) => a + (b - a) * t;
        gradients.forEach(g => {
            g.currentX = lerp(g.currentX, g.targetX, SPEED);
            g.currentY = lerp(g.currentY, g.targetY, SPEED);
        });

        setVars();
        requestAnimationFrame(animate);
    }

    setVars();
    animate();
    const intervalId = setInterval(updateTargets, 2000);

    return () => clearInterval(intervalId); // cleanup
}
