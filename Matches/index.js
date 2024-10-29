const profiles = [
    { "id": 1, "name": "Alice", "age": 28, "occupation": "Teacher", "interests": ["reading", "traveling", "cooking"], "image": "https://randomuser.me/api/portraits/women/1.jpg", "education": "Master's in Education", "location": "New York", "height": "5'6\"", "religion": "Christian" },
    { "id": 2, "name": "John", "age": 34, "occupation": "Engineer", "interests": ["hiking", "technology", "photography"], "image": "https://randomuser.me/api/portraits/men/2.jpg", "education": "Bachelor's in Engineering", "location": "San Francisco", "height": "5'9\"", "religion": "Atheist" },
    { "id": 3, "name": "Sophia", "age": 26, "occupation": "Graphic Designer", "interests": ["drawing", "movies", "gaming"], "image": "https://randomuser.me/api/portraits/women/3.jpg", "education": "Bachelor's in Fine Arts", "location": "Los Angeles", "height": "5'4\"", "religion": "Catholic" },
    { "id": 4, "name": "Michael", "age": 29, "occupation": "Software Developer", "interests": ["coding", "sports", "traveling"], "image": "https://randomuser.me/api/portraits/men/4.jpg", "education": "Master's in Computer Science", "location": "Chicago", "height": "5'11\"", "religion": "Jewish" },
    { "id": 5, "name": "Emma", "age": 31, "occupation": "Marketing Manager", "interests": ["advertising", "yoga", "fashion"], "image": "https://randomuser.me/api/portraits/women/5.jpg", "education": "MBA in Marketing", "location": "Boston", "height": "5'5\"", "religion": "Christian" },
    { "id": 6, "name": "Liam", "age": 27, "occupation": "Chef", "interests": ["cooking", "baking", "cycling"], "image": "https://randomuser.me/api/portraits/men/6.jpg", "education": "Culinary Arts", "location": "New Orleans", "height": "5'8\"", "religion": "Christian" },
    { "id": 7, "name": "Olivia", "age": 32, "occupation": "Architect", "interests": ["design", "gardening", "interior decorating"], "image": "https://randomuser.me/api/portraits/women/7.jpg", "education": "Master's in Architecture", "location": "Seattle", "height": "5'7\"", "religion": "Buddhist" },
    { "id": 8, "name": "Noah", "age": 35, "occupation": "Accountant", "interests": ["finance", "golf", "fitness"], "image": "https://randomuser.me/api/portraits/men/8.jpg", "education": "Bachelor's in Accounting", "location": "Miami", "height": "5'10\"", "religion": "Christian" },
    { "id": 9, "name": "Ava", "age": 30, "occupation": "Lawyer", "interests": ["reading", "politics", "volunteering"], "image": "https://randomuser.me/api/portraits/women/9.jpg", "education": "JD in Law", "location": "Washington, D.C.", "height": "5'6\"", "religion": "Hindu" },
    { "id": 10, "name": "James", "age": 33, "occupation": "Doctor", "interests": ["medicine", "running", "traveling"], "image": "https://randomuser.me/api/portraits/men/10.jpg", "education": "MD in Medicine", "location": "Houston", "height": "6'0\"", "religion": "Muslim" },
    { "id": 11, "name": "Isabella", "age": 25, "occupation": "Content Writer", "interests": ["writing", "reading", "yoga"], "image": "https://randomuser.me/api/portraits/women/11.jpg", "education": "Bachelor's in Journalism", "location": "Austin", "height": "5'5\"", "religion": "Christian" },
    { "id": 12, "name": "Lucas", "age": 28, "occupation": "Data Scientist", "interests": ["AI", "big data", "chess"], "image": "https://randomuser.me/api/portraits/men/12.jpg", "education": "Master's in Data Science", "location": "Denver", "height": "5'11\"", "religion": "Atheist" },
    { "id": 13, "name": "Mia", "age": 29, "occupation": "Event Planner", "interests": ["event management", "traveling", "photography"], "image": "https://randomuser.me/api/portraits/women/13.jpg", "education": "Bachelor's in Business", "location": "Las Vegas", "height": "5'4\"", "religion": "Christian" },
    { "id": 14, "name": "Ethan", "age": 31, "occupation": "Financial Analyst", "interests": ["investing", "economics", "golf"], "image": "https://randomuser.me/api/portraits/men/14.jpg", "education": "MBA in Finance", "location": "Dallas", "height": "5'9\"", "religion": "Christian" },
    { "id": 15, "name": "Charlotte", "age": 34, "occupation": "Psychologist", "interests": ["mental health", "music", "hiking"], "image": "https://randomuser.me/api/portraits/women/15.jpg", "education": "PhD in Psychology", "location": "Portland", "height": "5'6\"", "religion": "Christian" },
    { "id": 16, "name": "Mason", "age": 27, "occupation": "Photographer", "interests": ["photography", "traveling", "hiking"], "image": "https://randomuser.me/api/portraits/men/16.jpg", "education": "Bachelor's in Photography", "location": "San Diego", "height": "5'10\"", "religion": "Atheist" },
    { "id": 17, "name": "Amelia", "age": 26, "occupation": "Nurse", "interests": ["healthcare", "baking", "fitness"], "image": "https://randomuser.me/api/portraits/women/17.jpg", "education": "Bachelor's in Nursing", "location": "Phoenix", "height": "5'5\"", "religion": "Christian" },
    { "id": 18, "name": "Logan", "age": 33, "occupation": "Entrepreneur", "interests": ["startups", "tech", "fitness"], "image": "https://randomuser.me/api/portraits/men/18.jpg", "education": "MBA in Entrepreneurship", "location": "Los Angeles", "height": "6'1\"", "religion": "Christian" },
    { "id": 19, "name": "Harper", "age": 24, "occupation": "Web Developer", "interests": ["coding", "movies", "gaming"], "image": "https://randomuser.me/api/portraits/women/19.jpg", "education": "Bachelor's in Computer Science", "location": "San Francisco", "height": "5'3\"", "religion": "Christian" },
    { "id": 20, "name": "Benjamin", "age": 30, "occupation": "Mechanical Engineer", "interests": ["mechanics", "sports", "gaming"], "image": "https://randomuser.me/api/portraits/men/20.jpg", "education": "Master's in Mechanical Engineering", "location": "Detroit", "height": "5'11\"", "religion": "Christian" },
    { "id": 21, "name": "Grace", "age": 28, "occupation": "Therapist", "interests": ["psychology", "music", "travel"], "image": "https://randomuser.me/api/portraits/women/21.jpg", "education": "Master's in Psychology", "location": "New York", "height": "5'6\"", "religion": "Christian" },
    { "id": 22, "name": "Henry", "age": 33, "occupation": "Civil Engineer", "interests": ["construction", "architecture", "fitness"], "image": "https://randomuser.me/api/portraits/men/22.jpg", "education": "Master's in Civil Engineering", "location": "San Diego", "height": "5'10\"", "religion": "Atheist" },
    { "id": 23, "name": "Chloe", "age": 29, "occupation": "HR Manager", "interests": ["people management", "reading", "movies"], "image": "https://randomuser.me/api/portraits/women/23.jpg", "education": "Bachelor's in Business Administration", "location": "Chicago", "height": "5'7\"", "religion": "Christian" },
    { "id": 24, "name": "Daniel", "age": 32, "occupation": "IT Consultant", "interests": ["technology", "cycling", "photography"], "image": "https://randomuser.me/api/portraits/men/24.jpg", "education": "Master's in Information Technology", "location": "Austin", "height": "6'0\"", "religion": "Jewish" },
    { "id": 25, "name": "Zoe", "age": 27, "occupation": "Product Manager", "interests": ["innovation", "reading", "fashion"], "image": "https://randomuser.me/api/portraits/women/25.jpg", "education": "MBA in Product Management", "location": "New York", "height": "5'5\"", "religion": "Christian" },
    { "id": 26, "name": "Jackson", "age": 34, "occupation": "Business Analyst", "interests": ["business strategy", "economics", "sports"], "image": "https://randomuser.me/api/portraits/men/26.jpg", "education": "Bachelor's in Business", "location": "San Francisco", "height": "5'9\"", "religion": "Christian" },
    { "id": 27, "name": "Scarlett", "age": 30, "occupation": "Biologist", "interests": ["research", "hiking", "wildlife"], "image": "https://randomuser.me/api/portraits/women/27.jpg", "education": "Master's in Biology", "location": "Seattle", "height": "5'6\"", "religion": "Atheist" },
    { "id": 28, "name": "David", "age": 35, "occupation": "Architect", "interests": ["design", "urban planning", "traveling"], "image": "https://randomuser.me/api/portraits/men/28.jpg", "education": "Master's in Architecture", "location": "Miami", "height": "6'0\"", "religion": "Christian" },
    { "id": 29, "name": "Lily", "age": 25, "occupation": "Graphic Designer", "interests": ["art", "fashion", "fitness"], "image": "https://randomuser.me/api/portraits/women/29.jpg", "education": "Bachelor's in Fine Arts", "location": "Denver", "height": "5'4\"", "religion": "Christian" },
    { "id": 30, "name": "Matthew", "age": 31, "occupation": "Software Engineer", "interests": ["coding", "sports", "gaming"], "image": "https://randomuser.me/api/portraits/men/30.jpg", "education": "Master's in Computer Science", "location": "Los Angeles", "height": "5'11\"", "religion": "Atheist" },
    { "id": 31, "name": "Hannah", "age": 28, "occupation": "Writer", "interests": ["writing", "reading", "traveling"], "image": "https://randomuser.me/api/portraits/women/31.jpg", "education": "Bachelor's in Literature", "location": "Boston", "height": "5'5\"", "religion": "Christian" },
    { "id": 32, "name": "Elijah", "age": 33, "occupation": "Cybersecurity Analyst", "interests": ["technology", "hiking", "fitness"], "image": "https://randomuser.me/api/portraits/men/32.jpg", "education": "Master's in Cybersecurity", "location": "Washington, D.C.", "height": "6'0\"", "religion": "Christian" },
    { "id": 33, "name": "Eleanor", "age": 26, "occupation": "Social Media Manager", "interests": ["social media", "marketing", "photography"], "image": "https://randomuser.me/api/portraits/women/33.jpg", "education": "Bachelor's in Communications", "location": "Las Vegas", "height": "5'4\"", "religion": "Buddhist" },
    { "id": 34, "name": "William", "age": 30, "occupation": "Research Scientist", "interests": ["science", "space exploration", "tech"], "image": "https://randomuser.me/api/portraits/men/34.jpg", "education": "PhD in Astrophysics", "location": "Houston", "height": "6'1\"", "religion": "Atheist" },
    { "id": 35, "name": "Victoria", "age": 27, "occupation": "Nutritionist", "interests": ["health", "cooking", "sports"], "image": "https://randomuser.me/api/portraits/women/35.jpg", "education": "Master's in Nutrition", "location": "Austin", "height": "5'5\"", "religion": "Christian" },
    { "id": 36, "name": "Joseph", "age": 29, "occupation": "Data Engineer", "interests": ["big data", "AI", "sports"], "image": "https://randomuser.me/api/portraits/men/36.jpg", "education": "Master's in Data Science", "location": "San Francisco", "height": "5'10\"", "religion": "Jewish" },
    { "id": 37, "name": "Ella", "age": 31, "occupation": "UX Designer", "interests": ["design", "technology", "fitness"], "image": "https://randomuser.me/api/portraits/women/37.jpg", "education": "Bachelor's in Design", "location": "New York", "height": "5'6\"", "religion": "Christian" },
    { "id": 38, "name": "Samuel", "age": 28, "occupation": "Mechanical Engineer", "interests": ["robotics", "cycling", "movies"], "image": "https://randomuser.me/api/portraits/men/38.jpg", "education": "Bachelor's in Mechanical Engineering", "location": "Chicago", "height": "5'9\"", "religion": "Christian" },
    { "id": 39, "name": "Madison", "age": 34, "occupation": "Marketing Executive", "interests": ["advertising", "yoga", "traveling"], "image": "https://randomuser.me/api/portraits/women/39.jpg", "education": "MBA in Marketing", "location": "Los Angeles", "height": "5'5\"", "religion": "Christian" },
    { "id": 40, "name": "Oliver", "age": 27, "occupation": "AI Engineer", "interests": ["AI", "machine learning", "gaming"], "image": "https://randomuser.me/api/portraits/men/40.jpg", "education": "Master's in Artificial Intelligence", "location": "Boston", "height": "6'0\"", "religion": "Atheist" },
    { "id": 41, "name": "Avery", "age": 26, "occupation": "Fashion Designer", "interests": ["fashion", "art", "traveling"], "image": "https://randomuser.me/api/portraits/women/41.jpg", "education": "Bachelor's in Fashion Design", "location": "New York", "height": "5'4\"", "religion": "Christian" },
  ];

    function getCurrentUser() {
        const userData = localStorage.getItem('currentUser');
        return userData ? JSON.parse(userData) : null;
    }

    function generateProfileHTML(profile) {
        return `
            <div class="profile" onclick="openProfile(${profile.id})">
                <img src="${profile.image}" alt="${profile.name}" class="profile-image">
                <h2>${profile.name}</h2>
                <p>Age: ${profile.age}</p>
            </div>
        `;
    }

    const profileGrid = document.getElementById("profileGrid");
    const currentUser = getCurrentUser();

    profiles.forEach(profile => {
        
        if (!currentUser || profile.id !== currentUser.id) {
            profileGrid.innerHTML += generateProfileHTML(profile);
        }

    });

    function openProfile(id) {
        window.location.href = `profile.html?id=${id}`;
    }

    document.addEventListener('DOMContentLoaded', function() {
        const authButton = document.getElementById('auth-button');
        const userData = JSON.parse(localStorage.getItem('currentUser'));
        
    
        if(userData){
            authButton.innerHTML = 'Logout';
            authButton.onclick = function() {
                localStorage.removeItem('currentUser');
            };
        }
        else{
            authButton.innerHTML = 'Login/Register';
        }
    });

    document.getElementById('loadUsers').addEventListener('click', async function() {
        const userList = document.getElementById('userList');
        userList.innerHTML = 'Loading users...';
    
        try {
            const response = await fetch('https://randomuser.me/api/?results=6');
            const data = await response.json();
            const users = data.results;


            function generateUserHTML(user) {
                return `
                     <div class="profile">
                <img src="${user.picture.medium}" alt="${user.name}" class="profile-image">
                <h2>${user.name}</h2>
                <p>Age: ${user.location}</p>
                </div>
                `;
            }

        
            users.forEach(user => {

                profileGrid.innerHTML += generateUserHTML(user);
                
                
            });
        } catch (error) {
            userList.innerHTML = 'Error loading users.';
            console.error('Error fetching users:', error);
        }
    });
    