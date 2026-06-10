let currentUser = null;

const officePrograms = {
    'CMO': [
        {code: '1000-2-01-OCM-1', name: 'General Supervision and Management of the City Mayor'},
        {code: '1000-2-01-OCM-2', name: 'Provision for donations' },
        {code: '1000-2-01-OCM-4', name: 'Team Building/Budget Preparation' },
        {code: '1000-2-01-OCM-5', name: 'Hosting Visitors/Committee Meetings' },
    ],

    'OCE': [
        {code: '8000-2-01-OCE-1', name: 'General Supervision and Management of the City Mayor'},
        {code: '8000-2-01-OCE-20', name: 'Construction/Rehabilitation/Improvement of drainage'},
        {code: '8000-2-01-OCE-16', name: 'Construction of Pavement'},
    ]
};

function loadReport() {

    let quarter = document.getElementById('quarter-select').value;
    let office = currentUser.office;
    let programs = officePrograms[office];

    if (!programs) {
        alert('No programs found for your office yet!');
        return;
    }

    let tableHTML = `
        <h3>${office} - ${quarter} Report </h3>
        <table border="1">
            <tr>
                <th>AIP Code</th>
                <th>Program / Project</th>
                <th>Actual Output</th>
                <th>Allotment Released</th>
                <th>Actual Obligations</th>
                <th>Variance</th>
                <th>Absorptive Capacity</th>
                <th>Remarks</th>
            </tr>
    `;
    
    programs.forEach(function(program, index) {
        tableHTML += `
            <tr>
                <td>${program.code}</td>
                <td>${program.name}</td>
                <td><input type="text" id="output_${index}"></td>
                <td><input type="number" id="allotment_${index}" oninput="calculate(${index})"></td>
                <td><input type="number" id="obligations_${index}" oninput="calculate(${index})"></td>
                <td><span id="variance_${index}">0</span></td>
                <td><span id="absorptive_${index}">0%</span></td>
                <td><input type="text" id="remarks_${index}"></td>
            </tr>
        `;
    });

    tableHTML += '</table><br><button onclick="submitReport()">Submit Report</button>';

    document.getElementById('report-container').innerHTML = tableHTML;

}

function calculate(index) {

    let allotment = parseFloat(document.getElementById('allotment_' + index).value) || 0;
    let obligations = parseFloat(document.getElementById('obligations_' + index).value) || 0;

    let variance = allotment - obligations;
    let absorptive = allotment > 0 ? ((obligations / allotment) * 100).toFixed(2) : 0;

    document.getElementById('variance_' + index).textContent = variance;
    document.getElementById('absorptive_' + index).textContent = absorptive + '%';
}

function login() {

    let office = document.getElementById('office-select').value;
    let role = document.getElementById('role-select').value;
    let password = document.getElementById('password-input').value;

    if (office === '') {
        alert('Please select your office');
        return;
    }

    if (password === '') {
        alert('Please enter your password');
        return;
    }

    currentUser = {
        office: office,
        role: role
    };
    alert('Welcome! You are logged in as ' + role + ' from ' + office);

    document.getElementById('login-screen').style.display = 'none';

    if (role === 'manager') {
        document.getElementById('manager-view').style.display = 'block';
    } else {
        document.getElementById('employee-view').style.display = 'block';
    }

}