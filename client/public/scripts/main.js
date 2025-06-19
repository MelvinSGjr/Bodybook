// URL Shortening Functionality
const shortenBtn = document.getElementById('shortenBtn');
if (shortenBtn) {
    shortenBtn.addEventListener('click', function() {
        const longUrl = document.getElementById('longUrl').value;
        if (!longUrl) {
            alert('Please enter a URL to shorten');
            return;
        }
        // Generate a random short code (like bbk.to/AbCdEf)
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let shortCode = '';
        for (let i = 0; i < 6; i++) {
            shortCode += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        const shortUrl = 'bbk.to/' + shortCode;
        document.getElementById('resultUrl').textContent = shortUrl;
        document.getElementById('resultUrl').href = shortUrl;
        document.getElementById('shortenedUrl').style.display = 'block';
        // Add to feed (simulated)
        const newFeed = document.createElement('div');
        newFeed.className = 'feed';
        newFeed.innerHTML = `
            <div class="feed-header">
                <div class="feed-pic">JD</div>
                <div>
                    <div class="feed-name">John Doe</div>
                    <div class="feed-time">Just now</div>
                </div>
            </div>
            <div class="feed-content">
                <p>I just shortened a URL with Bodybook!</p>
                <p>Short URL: <a href="${shortUrl}">${shortUrl}</a></p>
            </div>
            <div class="feed-actions">
                <a href="#" class="feed-action"><i class="fa fa-thumbs-up"></i> Like</a>
                <a href="#" class="feed-action"><i class="fa fa-comment"></i> Comment</a>
                <a href="#" class="feed-action"><i class="fa fa-share"></i> Share</a>
            </div>
        `;
        const urlShortener = document.querySelector('.url-shortener');
        urlShortener.parentNode.insertBefore(newFeed, urlShortener.nextSibling);
        document.getElementById('longUrl').value = '';
    });
}
// Simulate feed likes
addEventListener('click', function(e) {
    if (e.target.classList.contains('feed-action') && e.target.querySelector('.fa-thumbs-up')) {
        e.preventDefault();
        e.target.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked';
        e.target.style.color = '#3b5998';
        e.target.style.fontWeight = 'bold';
    }
}); 