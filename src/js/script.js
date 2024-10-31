window.onload = function() {



    fetch('res/json/myjson.json')
        .then((response) => response.json())
        .then(posts => {
            const contentDiv = document.querySelector('.content');
            
            posts.forEach(post => {
                
                console.log(post);
                const postDiv = document.createElement('div');
                postDiv.className = 'post';
    
                const postHeader = document.createElement('header');
                postHeader.className = 'postHeader';
    
                const logoPost =  document.createElement('a');
                logoPost.className = 'logoPost';
                logoPost.href = 'index.html';
    
                const profileImg = document.createElement('img');
                profileImg.src = post.profilePicture;
                profileImg.width = 40;
                profileImg.height = 40;
                profileImg.alt="picture";
                logoPost.appendChild(profileImg);
    
                const postDate = document.createElement('p');
                postDate.className = 'postDate';
                postDate.textContent = post.date;
    
                postHeader.appendChild(logoPost);
                postHeader.appendChild(postDate);
    
    
                const postContent = document.createElement('div');
                postContent.className = 'postContent';
    
                if(post.postContent.image){
                    const postPicture = document.createElement('img');
                    postPicture.className = 'postPicture';
                    postPicture.src = post.postContent.image;
                    postPicture.width = 40;
                    postPicture.height = 40;
                    postPicture.alt ="picture";
                    postContent.appendChild(postPicture);
                }
                const postText = document.createElement('p');
                postText.className = "postText";
                postText.textContent = post.postContent.text;
                
                const postThumbsup = document.createElement('img');
                postThumbsup.className = 'postThumbsup';
                postThumbsup.src = post.postContent.thumbsUp;
                postContent.appendChild(postText);
                postContent.appendChild(postThumbsup);
    
                postDiv.appendChild(postHeader);
                postDiv.appendChild(postContent);

                contentDiv.appendChild(postDiv);
            });

        });



}