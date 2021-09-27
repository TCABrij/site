document.addEventListener('DOMContentLoaded', ()=>{
    // sidebar
    let closeButtonSidebar = document.querySelector('.close-sidebar');
    closeButtonSidebar.addEventListener("click", ()=>{
        let sidebar = document.querySelector('.sidebar-background');
        sidebar.style.width = "0%";
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
        sidebar.style.width = "100%";
    })
});