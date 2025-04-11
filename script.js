// document.addEventListener('DOMContentLoaded', function() {
//     // Get all collapsible buttons
//     const collapsibles = document.querySelectorAll('.collapsible');
    
//     // Add click event listener to each button
//     collapsibles.forEach(function(coll) {
//         coll.addEventListener('click', function() {
//             // Toggle active class
//             this.classList.toggle('active');
            
//             // Get the content element
//             const content = this.nextElementSibling;
            
//             // If content is open, close it
//             if (content.style.maxHeight) {
//                 content.style.maxHeight = null;
//                 content.classList.remove('open');
//             } else {
//                 // Otherwise, open it
//                 content.style.maxHeight = content.scrollHeight + "px";
//                 content.classList.add('open');
//             }
//         });
//     });
    
//     // Open the first section by default
//     if (collapsibles.length > 0) {
//         collapsibles[0].click();
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    // Get all collapsible buttons
    const collapsibles = document.querySelectorAll('.collapsible');
    
    // Add click event listener to each button
    collapsibles.forEach(function(coll) {
        coll.addEventListener('click', function() {
            // First check if this panel is already active
            const isActive = this.classList.contains('active');
            
            // If opening a new panel, close all others first
            if (!isActive) {
                // Close all panels
                collapsibles.forEach(function(otherColl) {
                    otherColl.classList.remove('active');
                    const otherContent = otherColl.nextElementSibling;
                    otherContent.style.maxHeight = null;
                    otherContent.classList.remove('open');
                });
            }
            
            // Toggle active class for the clicked button
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
