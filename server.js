const http = require("http");

const server = http.createServer((req, res) => {

    // =========================
    // Home Route
    // =========================
    if (req.url === "/") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>Home Page</h1>
            <p>Welcome to my website.</p>

            <nav>
                <a href="/">Home</a> |
                <a href="/blog">Blog</a> |
                <a href="/contact">Contact</a> |
                <a href="/about">About</a>
            </nav>
        `);

    }

    // =========================
    // Blog Route
    // =========================
    else if (req.url === "/blog") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>Blog Page</h1>
            <p>Welcome to our blog.</p>

            <nav>
                <a href="/">Home</a> |
                <a href="/blog">Blog</a> |
                <a href="/contact">Contact</a> |
                <a href="/about">About</a>
            </nav>
        `);

    }

    // =========================
    // Contact Route
    // =========================
    else if (req.url === "/contact") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>Contact Page</h1>
            <p>Contact us for more information.</p>

            <nav>
                <a href="/">Home</a> |
                <a href="/blog">Blog</a> |
                <a href="/contact">Contact</a> |
                <a href="/about">About</a>
            </nav>
        `);

    }

    // =========================
    // About Route
    // =========================
    else if (req.url === "/about") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>About Page</h1>
            <p>This is the about page.</p>

            <nav>
                <a href="/">Home</a> |
                <a href="/blog">Blog</a> |
                <a href="/contact">Contact</a> |
                <a href="/about">About</a>
            </nav>
        `);

    }

    // =========================
    // Invalid Route
    // =========================
    else {

        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>

            <a href="/">Go to Home Page</a>
        `);
    }

});


// =========================
// Start Server
// =========================

server.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});