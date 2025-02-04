document.addEventListener("DOMContentLoaded", function() {
    fetch('../leftnav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;

            // 左侧导航栏加载完成后绑定点击事件
            const assignments = document.getElementById("assignments");
            const assignmentsSubmenu = document.getElementById("assignments-submenu");

            assignments.addEventListener("click", function() {
                if (assignmentsSubmenu.style.display === "block") {
                    assignmentsSubmenu.style.display = "none";
                } else {
                    assignmentsSubmenu.style.display = "block";
                }
            });

            document.getElementById("about").addEventListener("click", function() {
                loadContent("about.html");
            });

            document.getElementById("week1").addEventListener("click", function() {
                loadContent("../assignments/01_documentation-website.html");
            });

            document.getElementById("week2").addEventListener("click", function() {
                loadContent("../assignments/02_media-optimization-and-copyright.html");
            });

            document.getElementById("week3").addEventListener("click", function() {
                loadContent("../assignments/03_Computer-Aided-Design.html");
            });
        })
        .catch(error => console.error('Error loading the sidebar:', error));

    const loadContent = (page) => {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error('文件加载失败');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById("content-area").innerHTML = data;
            })
            .catch(error => {
                document.getElementById("content-area").innerHTML = "<p>加载失败，请重试。</p>";
                console.log(error);
            });
    };
});
