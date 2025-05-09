// blog.js

// Copy Code Function
function copySnippet(button) {
    const code = button.closest('.snippet-container').querySelector('.code-content').innerText;
    navigator.clipboard.writeText(code).then(() => {
        button.innerText = "✅";
        setTimeout(() => {
            button.innerText = "📋";
        }, 2000);
    }).catch(err => {
        console.error("Copy failed:", err);
        button.innerText = "❌";
    });
}

// Search Blogs Function
function filterBlogs() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const articles = document.querySelectorAll(".blog-article");

    articles.forEach(article => {
        const text = article.innerText.toLowerCase();
        article.style.display = text.includes(filter) ? "block" : "none";
    });

    // Optionally handle "no results" message (optional)
  /* <p>Developed by Vijay shikhre</p> --- */

    const noResult = document.getElementById("noResult");
    if (noResult) {
        const anyVisible = Array.from(articles).some(article => article.style.display === "block");
        noResult.style.display = anyVisible ? "none" : "block";
    }
}

// Blog Show More / Show Less Logic
const blogs = document.querySelectorAll('.blog-article'); // Targeting your blog-article class
const showMoreBtn = document.getElementById('showMoreBtn');

let isExpanded = false;
const limit = 3; // Initially show 3 blogs

// Function to update display of blogs
function updateBlogsDisplay() {
    blogs.forEach((blog, index) => {
        if (isExpanded || index < limit) {
            blog.classList.remove('hidden'); // Show blog smoothly
            blog.classList.add('visible');   // Add visible class for smooth transition
        } else {
            blog.classList.add('hidden');    // Hide blog smoothly
            blog.classList.remove('visible');
        }
    });

    if (isExpanded) {
        showMoreBtn.textContent = "Show Less";
    } else {
        showMoreBtn.textContent = "Show More";
    }
}

// Button click to toggle Show More / Show Less
showMoreBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;
    updateBlogsDisplay();
});

// Initial Setup
document.addEventListener("DOMContentLoaded", () => {
    updateBlogsDisplay();
  /* <p>Developed by Vijay shikhre</p> --- */


    // Setup event listeners for copy functionality
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', () => copySnippet(button));
    });

    // Search functionality for blogs
    document.getElementById('searchInput').addEventListener('keyup', filterBlogs);
});
