const profiles = [
    
        { "id": 1, "email": "alice@example.com", "password": "pass1", "username": "alice28", "name": "Alice", "age": 28, "gender": "Female", "date_of_birth": "1996-01-15", "occupation": "Teacher", "interests": ["reading", "traveling", "cooking"], "image": "https://randomuser.me/api/portraits/women/1.jpg", "education": "Master's in Education", "location": "New York", "height": "5'6\"", "religion": "Christian" },
        { "id": 2, "email": "john@example.com", "password": "pass2", "username": "john34", "name": "John", "age": 34, "gender": "Male", "date_of_birth": "1990-04-21", "occupation": "Engineer", "interests": ["hiking", "technology", "photography"], "image": "https://randomuser.me/api/portraits/men/2.jpg", "education": "Bachelor's in Engineering", "location": "San Francisco", "height": "5'9\"", "religion": "Atheist" },
        { "id": 3, "email": "sophia@example.com", "password": "pass3", "username": "sophia26", "name": "Sophia", "age": 26, "gender": "Female", "date_of_birth": "1998-06-11", "occupation": "Graphic Designer", "interests": ["drawing", "movies", "gaming"], "image": "https://randomuser.me/api/portraits/women/3.jpg", "education": "Bachelor's in Fine Arts", "location": "Los Angeles", "height": "5'4\"", "religion": "Catholic" },
        { "id": 4, "email": "michael@example.com", "password": "pass4", "username": "mike29", "name": "Michael", "age": 29, "gender": "Male", "date_of_birth": "1995-08-05", "occupation": "Software Developer", "interests": ["coding", "sports", "traveling"], "image": "https://randomuser.me/api/portraits/men/4.jpg", "education": "Master's in Computer Science", "location": "Chicago", "height": "5'11\"", "religion": "Jewish" },
        { "id": 5, "email": "emma@example.com", "password": "pass5", "username": "emma31", "name": "Emma", "age": 31, "gender": "Female", "date_of_birth": "1993-09-14", "occupation": "Marketing Manager", "interests": ["advertising", "yoga", "fashion"], "image": "https://randomuser.me/api/portraits/women/5.jpg", "education": "MBA in Marketing", "location": "Boston", "height": "5'5\"", "religion": "Christian" },
        { "id": 6, "email": "liam@example.com", "password": "pass6", "username": "liam27", "name": "Liam", "age": 27, "gender": "Male", "date_of_birth": "1997-02-22", "occupation": "Chef", "interests": ["cooking", "baking", "cycling"], "image": "https://randomuser.me/api/portraits/men/6.jpg", "education": "Culinary Arts", "location": "New Orleans", "height": "5'8\"", "religion": "Christian" },
        { "id": 7, "email": "olivia@example.com", "password": "pass7", "username": "olivia32", "name": "Olivia", "age": 32, "gender": "Female", "date_of_birth": "1992-10-06", "occupation": "Architect", "interests": ["design", "gardening", "interior decorating"], "image": "https://randomuser.me/api/portraits/women/7.jpg", "education": "Master's in Architecture", "location": "Seattle", "height": "5'7\"", "religion": "Buddhist" },
        { "id": 8, "email": "noah@example.com", "password": "pass8", "username": "noah35", "name": "Noah", "age": 35, "gender": "Male", "date_of_birth": "1989-11-19", "occupation": "Accountant", "interests": ["finance", "golf", "fitness"], "image": "https://randomuser.me/api/portraits/men/8.jpg", "education": "Bachelor's in Accounting", "location": "Miami", "height": "5'10\"", "religion": "Christian" },
        { "id": 9, "email": "ava@example.com", "password": "pass9", "username": "ava30", "name": "Ava", "age": 30, "gender": "Female", "date_of_birth": "1994-12-13", "occupation": "Lawyer", "interests": ["reading", "politics", "volunteering"], "image": "https://randomuser.me/api/portraits/women/9.jpg", "education": "JD in Law", "location": "Washington, D.C.", "height": "5'6\"", "religion": "Hindu" },
        { "id": 10, "email": "james@example.com", "password": "pass10", "username": "james33", "name": "James", "age": 33, "gender": "Male", "date_of_birth": "1991-03-07", "occupation": "Doctor", "interests": ["medicine", "running", "traveling"], "image": "https://randomuser.me/api/portraits/men/10.jpg", "education": "MD in Medicine", "location": "Houston", "height": "6'0\"", "religion": "Muslim" },
        { "id": 11, "email": "isabella@example.com", "password": "pass11", "username": "bella25", "name": "Isabella", "age": 25, "gender": "Female", "date_of_birth": "1999-12-01", "occupation": "Content Writer", "interests": ["writing", "reading", "yoga"], "image": "https://randomuser.me/api/portraits/women/11.jpg", "education": "Bachelor's in Journalism", "location": "Austin", "height": "5'5\"", "religion": "Christian" },
        { "id": 12, "email": "lucas@example.com", "password": "pass12", "username": "lucas28", "name": "Lucas", "age": 28, "gender": "Male", "date_of_birth": "1996-02-14", "occupation": "Data Scientist", "interests": ["AI", "big data", "chess"], "image": "https://randomuser.me/api/portraits/men/12.jpg", "education": "Master's in Data Science", "location": "Denver", "height": "5'11\"", "religion": "Atheist" },
        { "id": 13, "email": "mia@example.com", "password": "pass13", "username": "mia29", "name": "Mia", "age": 29, "gender": "Female", "date_of_birth": "1995-04-10", "occupation": "Event Planner", "interests": ["event management", "traveling", "photography"], "image": "https://randomuser.me/api/portraits/women/13.jpg", "education": "Bachelor's in Business", "location": "Las Vegas", "height": "5'4\"", "religion": "Christian" },
        { "id": 14, "email": "ethan@example.com", "password": "pass14", "username": "ethan31", "name": "Ethan", "age": 31, "gender": "Male", "date_of_birth": "1993-07-23", "occupation": "Financial Analyst", "interests": ["investing", "economics", "golf"], "image": "https://randomuser.me/api/portraits/men/14.jpg", "education": "MBA in Finance", "location": "Dallas", "height": "5'9\"", "religion": "Christian" },
        { "id": 15, "email": "charlotte@example.com", "password": "pass15", "username": "charlotte34", "name": "Charlotte", "age": 34, "gender": "Female", "date_of_birth": "1990-11-18", "occupation": "Psychologist", "interests": ["mental health", "music", "hiking"], "image": "https://randomuser.me/api/portraits/women/15.jpg", "education": "PhD in Psychology", "location": "Portland", "height": "5'6\"", "religion": "Buddhist" },
        { "id": 16, "email": "mason@example.com", "password": "pass16", "username": "mason32", "name": "Mason", "age": 32, "gender": "Male", "date_of_birth": "1992-10-04", "occupation": "Product Manager", "interests": ["innovation", "startups", "sports"], "image": "https://randomuser.me/api/portraits/men/16.jpg", "education": "MBA in Product Management", "location": "New York", "height": "6'0\"", "religion": "Jewish" },
        { "id": 17, "email": "amelia@example.com", "password": "pass17", "username": "amelia27", "name": "Amelia", "age": 27, "gender": "Female", "date_of_birth": "1997-01-03", "occupation": "Nurse", "interests": ["healthcare", "traveling", "volunteering"], "image": "https://randomuser.me/api/portraits/women/17.jpg", "education": "Bachelor's in Nursing", "location": "Atlanta", "height": "5'5\"", "religion": "Christian" },
        { "id": 18, "email": "logan@example.com", "password": "pass18", "username": "logan30", "name": "Logan", "age": 30, "gender": "Male", "date_of_birth": "1994-08-11", "occupation": "Civil Engineer", "interests": ["infrastructure", "hiking", "sports"], "image": "https://randomuser.me/api/portraits/men/18.jpg", "education": "Master's in Civil Engineering", "location": "San Diego", "height": "5'10\"", "religion": "Atheist" },
        { "id": 19, "email": "lucy@example.com", "password": "pass19", "username": "lucy25", "name": "Lucy", "age": 25, "gender": "Female", "date_of_birth": "1999-05-25", "occupation": "UX Designer", "interests": ["design", "technology", "fitness"], "image": "https://randomuser.me/api/portraits/women/19.jpg", "education": "Bachelor's in Computer Science", "location": "San Francisco", "height": "5'4\"", "religion": "Atheist" },
        { "id": 20, "email": "benjamin@example.com", "password": "pass20", "username": "ben30", "name": "Benjamin", "age": 30, "gender": "Male", "date_of_birth": "1994-06-29", "occupation": "Lawyer", "interests": ["law", "history", "volunteering"], "image": "https://randomuser.me/api/portraits/men/20.jpg", "education": "JD in Law", "location": "New York", "height": "6'0\"", "religion": "Jewish" },
    { "id": 21, "email": "ella@example.com", "password": "pass21", "name": "Ella", "age": 26, "occupation": "HR Specialist", "interests": ["human resources", "reading", "yoga"], "image": "https://randomuser.me/api/portraits/women/21.jpg", "education": "Bachelor's in Business Administration", "location": "Chicago", "height": "5'6\"", "religion": "Christian" },
    { "id": 22, "email": "jacob@example.com", "password": "pass22", "name": "Jacob", "age": 28, "occupation": "Mechanical Engineer", "interests": ["engineering", "technology", "cycling"], "image": "https://randomuser.me/api/portraits/men/22.jpg", "education": "Master's in Engineering", "location": "San Diego", "height": "5'10\"", "religion": "Atheist" },
    { "id": 23, "email": "chloe@example.com", "password": "pass23", "name": "Chloe", "age": 29, "occupation": "HR Manager", "interests": ["people management", "reading", "movies"], "image": "https://randomuser.me/api/portraits/women/23.jpg", "education": "Bachelor's in Business Administration", "location": "Chicago", "height": "5'7\"", "religion": "Christian" },
    { "id": 24, "email": "daniel@example.com", "password": "pass24", "name": "Daniel", "age": 32, "occupation": "IT Consultant", "interests": ["technology", "cycling", "photography"], "image": "https://randomuser.me/api/portraits/men/24.jpg", "education": "Master's in Information Technology", "location": "Austin", "height": "6'0\"", "religion": "Jewish" },
    { "id": 25, "email": "zoe@example.com", "password": "pass25", "name": "Zoe", "age": 27, "occupation": "Product Manager", "interests": ["innovation", "reading", "fashion"], "image": "https://randomuser.me/api/portraits/women/25.jpg", "education": "MBA in Product Management", "location": "New York", "height": "5'5\"", "religion": "Christian" },
    { "id": 26, "email": "jackson@example.com", "password": "pass26", "name": "Jackson", "age": 34, "occupation": "Business Analyst", "interests": ["business strategy", "economics", "sports"], "image": "https://randomuser.me/api/portraits/men/26.jpg", "education": "Bachelor's in Business", "location": "San Francisco", "height": "5'9\"", "religion": "Christian" },
    { "id": 27, "email": "scarlett@example.com", "password": "pass27", "name": "Scarlett", "age": 30, "occupation": "Biologist", "interests": ["research", "hiking", "wildlife"], "image": "https://randomuser.me/api/portraits/women/27.jpg", "education": "Master's in Biology", "location": "Seattle", "height": "5'6\"", "religion": "Atheist" },
    { "id": 28, "email": "david@example.com", "password": "pass28", "name": "David", "age": 35, "occupation": "Architect", "interests": ["design", "urban planning", "traveling"], "image": "https://randomuser.me/api/portraits/men/28.jpg", "education": "Master's in Architecture", "location": "Miami", "height": "6'0\"", "religion": "Christian" },
    { "id": 29, "email": "lily@example.com", "password": "pass29", "name": "Lily", "age": 25, "occupation": "Graphic Designer", "interests": ["art", "fashion", "fitness"], "image": "https://randomuser.me/api/portraits/women/29.jpg", "education": "Bachelor's in Fine Arts", "location": "Denver", "height": "5'4\"", "religion": "Christian" },
    { "id": 30, "email": "matthew@example.com", "password": "pass30", "name": "Matthew", "age": 31, "occupation": "Software Engineer", "interests": ["coding", "sports", "gaming"], "image": "https://randomuser.me/api/portraits/men/30.jpg", "education": "Master's in Computer Science", "location": "Los Angeles", "height": "5'11\"", "religion": "Atheist" },
    { "id": 31, "email": "hello@example.com", "password": "pass31", "username": "ben30", "name": "Benjamin", "age": 30, "gender": "Male", "date_of_birth": "1994-06-29", "occupation": "Lawyer", "interests": ["law", "history", "volunteering"], "image": "https://randomuser.me/api/portraits/men/20.jpg", "education": "JD in Law", "location": "New York", "height": "6'0\"", "religion": "Jewish" },
];

  

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const authButton = document.getElementById('auth-button');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;

        const user = profiles.find(profile => 
            profile.email === email && profile.password === password
        );

        if (user) {

            alert(`Welcome, ${user.name}!`);

            localStorage.setItem('currentUser', JSON.stringify(user));

            authButton.innerHTML = 'Logout';

            window.location.href = '../Profile/index.html';
        } else {

            authButton.textContent = 'Login'; 

            alert('Invalid email or password. Please try again.');
        }
    });
});