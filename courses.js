const courses = [
  {
    title: "Mastering React to Advanced Techniques",
    description: "Unlock the full potential of React with our comprehensive online course. Whether you're a beginner looking to build a strong foundation in web development or an experienced developer aiming to take your skills to the next level, this course is designed to cater to your needs.",
    image: "images/course4.jpg",
    price: 199.99, 
  },
  {
    title: "Financial Intelligence: From Basics to Advanced Strategies",
    description: "Gain control over your financial future online course on financial intelligence. Whether you're just starting your journey towards financial literacy or seeking advanced strategies to optimize your wealth, this course is tailored to meet your needs.",
    image: "images/course5.jpg",
    price: 59.99, 
  },
  {
    title: "Game Development Mastery",
    description: "Embark on an exciting journey into the world of game development with our comprehensive online course. Whether you're a beginner eager to create your first game or an experienced developer looking to hone your skills and build advanced gaming experiences, this course is designed to meet your aspirations.",
    image: "images/course6.jpg",
    price: 109.99, 
  },
  {
    title: "Online Reselling Strategies",
    description: "Discover the lucrative world of online reselling with our comprehensive online course. Whether you're a novice looking to start your online reselling venture or an experienced reseller seeking advanced strategies to boost your profits, this course is tailored to meet your goals and aspirations.",
    image: "images/course7.jpeg",
    price: 69.99, 
  },
  {
    title: "Math Mastery",
    description: "Unlock the power of mathematics with our comprehensive online math course. Whether you're a math enthusiast looking to deepen your understanding or a student seeking to excel in mathematics, this course is designed to cater to your mathematical needs.",
    image: "images/course8.jpg",
    price: 34.99,
  },
  {
    title: "IELTS Exam Preparation: Achieve Your Desired Band Score",
    description: "Prepare for success in the IELTS exam with our comprehensive online course. Whether you're planning to study abroad, immigrate, or advance your career, this course is designed to help you achieve your desired band score",
    image: "images/course9.jpg",
    price: 34.99, 
  }
];

function addCoursesToPage() {
  const coursesContainer = document.getElementById("courses-container");

  courses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.className = "col-md-4 mb-4"; // grid system to show courses

    courseCard.innerHTML = `
      <div class="card">
        <img src="${course.image}" class="card-img-top" alt="${course.title}">
        <div class="card-body">
          <h5 class="card-title"><b>${course.title}</b></h5>
          <p class="card-text">${course.description}</p>
          <button class="btn btn-secondary">${course.price}&euro;</button> <!-- Display the price -->
        </div>
      </div>
    `;

    // hover effect with js
    courseCard.addEventListener("mouseenter", () => {
      courseCard.querySelector(".card").classList.add("shadow-lg");
    });

    courseCard.addEventListener("mouseleave", () => {
      courseCard.querySelector(".card").classList.remove("shadow-lg");
    });

    coursesContainer.appendChild(courseCard);
  });
}
window.onload = addCoursesToPage;

