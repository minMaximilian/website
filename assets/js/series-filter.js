document.addEventListener('DOMContentLoaded', function() {
  const seriesButtons = document.querySelectorAll('.series-btn');
  const postPreviews = document.querySelectorAll('.post-preview');
  
  seriesButtons.forEach(button => {
    button.addEventListener('click', function() {
      const selectedSeries = this.dataset.series;
      
      // Update active button
      seriesButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter posts
      postPreviews.forEach(post => {
        const postSeries = post.dataset.series;
        
        if (selectedSeries === 'all' || postSeries === selectedSeries) {
          post.classList.remove('hidden');
        } else {
          post.classList.add('hidden');
        }
      });
    });
  });
}); 