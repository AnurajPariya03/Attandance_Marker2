document.addEventListener('DOMContentLoaded', () => {
  const studentSelect = document.getElementById('studentSelect');
  const markAttendanceBtn = document.getElementById('markAttendanceBtn');
  const totalPresent = document.getElementById('totalPresent');
  const totalAbsent = document.getElementById('totalAbsent');
  const studentList = document.getElementById('studentList');
  const submitAttendanceBtn = document.getElementById('submitAttendanceBtn');

  const students = [
    { id: '001', name: 'Anuraj Pariya', attendance: false },
    { id: '002', name: 'Sajal Sharma', attendance: false },
    { id: '003', name: 'Tiyasha Pariya', attendance: false },
    { id: '004', name: 'Harsh Raj', attendance: false },
    { id: '005', name: 'Ashwin Chhetri', attendance: false },
    { id: '006', name: 'Barkat Ulla', attendance: false },
    { id: '007', name: 'Dhruv', attendance: false },
    { id: '008', name: 'Ishita', attendance: false },
    { id: '009', name: 'Sejal', attendance: false },
    { id: '010', name: 'Akanksha', attendance: false },
  ];

  students.forEach((student) => {
    const option = document.createElement('option');
    option.value = student.id;
    option.textContent = student.name;
    studentSelect.appendChild(option);
  });

  markAttendanceBtn.addEventListener('click', () => {
    const selectedStudentId = studentSelect.value;
    if (!selectedStudentId) return;

    const selectedStudent = students.find((student) => student.id === selectedStudentId);
    selectedStudent.attendance = !selectedStudent.attendance;

    updateStudentList();
  });

  function updateStudentList() {
    studentList.innerHTML = '';
    let presentCount = 0;

    students.forEach((student) => {
      const card = document.createElement('div');
      card.className = 'student-card';
      card.innerHTML = `
        <h2>${student.name}</h2>
        <p>Roll Number: ${student.id}</p>
        <p>Status: ${student.attendance ? 'Present' : 'Absent'}</p>
      `;

      if (student.attendance) presentCount++;

      studentList.appendChild(card);
    });

    totalPresent.textContent = presentCount;
    totalAbsent.textContent = students.length - presentCount;
  }

  submitAttendanceBtn.addEventListener('click', () => {
    // Redirect to success page upon submission
    window.location.href = 'success.html';
  });

  updateStudentList();
});
