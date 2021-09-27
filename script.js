document.addEventListener('DOMContentLoaded', ()=>{
    // sidebar
    let closeButtonSidebar = document.querySelector('.close-sidebar');
    closeButtonSidebar.addEventListener("click", ()=>{
        let sidebar = document.querySelector('.sidebar-background');
        sidebar.style.width = "0%";
    });
    //sidebar button
    let sidebarButton = document.querySelector(".sidebar-button");
    sidebarButton.addEventListener("mouseover", ()=>{
        sidebarButton.style.animationName = "uptodown";
    });
    sidebarButton.addEventListener("mouseout", ()=>{
        sidebarButton.style.animationName = "";
    });
    sidebarButton.addEventListener("click", ()=>{
        let sidebar = document.querySelector('.sidebar-background');
        sidebar.style.backdropFilter = "blur(0px)";
        sidebar.style.backgrounColor = "transparent";
        sidebar.style.width = "100%";
    })
});