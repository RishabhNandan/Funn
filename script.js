document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentId = document.getElementById('studentId').value;
    const password = document.getElementById('password').value;

    // Check if student exists in the system
    if (studentId === '12345' && password === 'password') {
        document.getElementById('message').innerText = 'Welcome, student!';
    } else {
        document.getElementById('message').innerText = 'Yad aa rhi to roommet se chup k Aditya ko call car lo Mai nhi Batau ga/gi';
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newStudentId = document.getElementById('newStudentId').value;
    const newPassword = document.getElementById('newPassword').value;

    // Register the new student
    document.getElementById('registerMessage').innerText = `Ka Ho ${newStudentId} Ka Hal ba kam se kam Velentine p collage Chali jati`;
});

function showRegister() {
    document.getElementById('registerContainer').style.display = 'block';
}
