document.addEventListener('DOMContentLoaded', ()=>{
    // sidebar
    let closeButtonSidebar = document.querySelector('.close-sidebar');
    closeButtonSidebar.addEventListener("click", ()=>{
        let sidebar = document.querySelector('.sidebar-background');
        let sidebarContent = document.querySelector(".sidebar-content");
        sidebar.style.left = "-100%";
        
    });
             //sidebar button
    let sidebarButton = document.querySelector(".sidebar-button");
    
    //  setting/Removing Animation to sidebar button 
    sidebarButton.addEventListener("mouseover", ()=>{
        sidebarButton.style.animationName = "uptodown";
    });
    sidebarButton.addEventListener("mouseout", ()=>{
        sidebarButton.style.animationName = "";
    });

     // Sidebar click functionality
    sidebarButton.addEventListener("click", ()=>{
        let sidebar = document.querySelector('.sidebar-background');
        let sidebarContent = document.querySelector(".sidebar-content");
        sidebar.style.left = "0%";
    })
});