document.addEventListener('DOMContentLoaded', function() {
    // Get all collapsible buttons
    const collapsibles = document.querySelectorAll('.collapsible');
    
    // Add click event listener to each button
    collapsibles.forEach(function(coll) {
        coll.addEventListener('click', function() {
            // Toggle active class
            this.classList.toggle('active');
            
            // Get the content element
            const content = this.nextElementSibling;
            
            // If content is open, close it
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.classList.remove('open');
            } else {
                // Otherwise, open it
                content.style.maxHeight = content.scrollHeight + "px";
                content.classList.add('open');
            }
        });
    });
    
    // Open the first section by default
    if (collapsibles.length > 0) {
        collapsibles[0].click();
    }
});
