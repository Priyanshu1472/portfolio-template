 // Typing animation
 var typed = new Typed('.typing', {
    strings: ["Full Stack Developer", "Web Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Cursor trail effect
document.addEventListener("mousemove", (event) => {
    const line = document.createElement("div");
    line.className = "cursor-trail";
    line.style.position = "absolute";
    line.style.width = "5px";
    line.style.height = "5px";
    line.style.borderRadius = "50%";
    line.style.backgroundColor = "white";
    line.style.left = `${event.clientX}px`;
    line.style.top = `${event.clientY}px`;
    line.style.pointerEvents = "none";
    line.style.zIndex = "9999";

    document.body.appendChild(line);

    setTimeout(() => {
        line.remove();
    }, 200);
});

// Show More Projects functionality
const showMoreBtn = document.getElementById('showMoreBtn');
const hiddenProjects = document.querySelectorAll('.portfolio-item.hidden');
let isExpanded = false;

showMoreBtn.addEventListener('click', function() {
    if (!isExpanded) {
        // Show all hidden projects with animation
        hiddenProjects.forEach((project, index) => {
            setTimeout(() => {
                project.classList.remove('hidden');
                project.style.opacity = '0';
                project.style.transform = 'translateY(30px)';
                
                // Trigger animation
                requestAnimationFrame(() => {
                    project.style.transition = 'all 0.5s ease';
                    project.style.opacity = '1';
                    project.style.transform = 'translateY(0)';
                });
            }, index * 100); // Stagger the animation
        });

        // Update button text and state
        showMoreBtn.textContent = 'Show Less';
        isExpanded = true;
    } else {
        // Hide projects except first 3
        hiddenProjects.forEach((project, index) => {
            setTimeout(() => {
                project.style.transition = 'all 0.3s ease';
                project.style.opacity = '0';
                project.style.transform = 'translateY(-30px)';
                
                setTimeout(() => {
                    project.classList.add('hidden');
                    project.style.transform = 'translateY(30px)';
                }, 300);
            }, index * 50);
        });

        // Update button text and state
        showMoreBtn.textContent = 'Show More Projects';
        isExpanded = false;

        // Scroll back to portfolio section
        setTimeout(() => {
            document.getElementById('portfolio').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 500);
    }
});