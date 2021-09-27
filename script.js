document.addEventListener('DOMContentLoaded', ()=>{
    // sidebar
    let closeButtonSidebar = document.querySelector('.close-sidebar');
    closeButtonSidebar.addEventListener("click", ()=>{
        let sidebar = document.querySelector('.sidebar-background');
        let sidebarContent = document.querySelector(".sidebar-content");
        sidebar.style.width = "0%";
        sidebarContent.style.display = "none";
        
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
        sidebar.style.width = "100%";
        sidebarContent.style.display = "block";
    })
});