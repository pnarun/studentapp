// Use array to hold all student objects
const students = [];
// Add event listener instead of onclick
const student_form = document.getElementById('student-form');
student_form.addEventListener('submit', addStudent);

function addStudent(event) {
    // prevent page from refreshing on clicking submit
    event.preventDefault();
    // fetch data in form_data object
    const student_form_data = new FormData(event.target);
    const student_info = {};
    const student_table = document.getElementById("student-display");
    // modifying tbody so that bootstrap classes such as table-striped work correctly
    var newRow = student_table.getElementsByTagName('tbody')[0].insertRow();
    // read data and store it in student_info object
    for (const [key, value] of student_form_data.entries()) {
        if(key == 'date') {
            var dob = new Date(value);
            //calculate month difference from current date in time
            var month_diff = Date.now() - dob.getTime();
            
            //convert the calculated difference in date format
            var age_dt = new Date(month_diff); 
            
            //extract year from date    
            var year = age_dt.getUTCFullYear();
            
            //now calculate the age of the user
            var age = Math.abs(year - 1970);

            student_info[key] = value;
            student_info['age'] = age;
            var cell = newRow.insertCell();
            cell.innerHTML = age;            
        } else {
            student_info[key] = value;
        }
        var cell = newRow.insertCell();
        cell.innerHTML = value;
    }
    students.push(student_info);
    // clear form after reading info
    student_form.reset();
}