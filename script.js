let currentUser = null;

const officePrograms = {
    'CMO': [
        { code: '1000-2-01-OCM-1', name: 'General Supervision and Management of the Office of the City Mayor' },
        { code: '1000-2-01-OCM-2', name: 'Provision for donations' },
        { code: '1000-2-01-OCM-4', name: 'Team Building/Budget Preparation' },
        { code: '1000-2-01-OCM-5', name: 'Hosting Visitors/Committee Meetings' },
    ],
    'OCVM': [
        { code: '1000-2-01-OCVM/OSP-1', name: 'General Supervision and Management of the Office of the City Vice Mayor and Sangguniang Panlungsod' },
        { code: '1000-2-01-OCVM/OSP-8', name: 'Participation of City Events and Activities' },
        { code: '1000-2-01-OCVM/OSP-4', name: 'Consultation Meetings, Public Hearings, Budget Hearings' },
    ],
    'OSS': [
        { code: '1000-2-01-OSS-1', name: 'General Supervision and Management of the Office of the Secretary to the Sanggunian' },
        { code: '1000-2-01-OSS-1', name: 'Information and Communication Technology Equipment' },
    ],
    'CAdmin': [
        { code: '1000-2-01-OCA-1', name: 'General Supervision and Management of the Office of the City Administrator' },
    ],
    'OCHRMO': [
        { code: '1000-2-03-OCHRMO-1', name: 'General supervision and management of the Office of the City Human Resources and Management Officer' },
        { code: '1000-2-03-OCHRMO-6', name: 'Human Resource incentives, awards, assistance, and benefits' },
        { code: '1000-2-03-OCHRMO-4.2', name: 'Learning & Development Program for Officials and employees' },
        { code: '1000-2-03-OCHRMO-5', name: 'Wellness and Development for employees' },
    ],
    'CPDO': [
        { code: '1000-2-01-OCPDC-1', name: 'General supervision and management of the Office of the City Planning and Development Coordinator' },
        { code: '1000-2-01-OCPDC-6', name: 'Drafting of sectoral plans and development plans' },
        { code: '1000-2-01-OCPDC-7', name: 'Updating of the Local Development Investment Program and Annual Investment Program' },
    ],
    'OCBO': [
        { code: '1000-2-01-OCBO-1', name: 'General Supervision and Management of the Office of the City Budget Officer' },
    ],
    'OCT': [
        { code: '1000-2-01-OCT-1', name: 'General Supervision and Management of the Office of the City Treasurer' },
    ],
    'OAcct': [
        { code: '1000-2-01-OCAcct-1', name: 'General Supervision and Management of the Office of the City Accountant' },
    ],
    'OCCR': [
        { code: '1000-2-01-OCCR-1', name: 'General Supervision and Management of the Office of the City Civil Registrar' },
        { code: '1000-2-01-OCCR-4', name: 'Civil Registration Month' },
    ],
    'OCGSO': [
        { code: '1000-2-01-OCGSO-1', name: 'General supervision and management of the Office of the City General Services Officer' },
        { code: '1000-2-01-OCGSO-2', name: 'Provision for fuel, oil, and lubricants Expense' },
        { code: '8000-2-03-Cemetery-1', name: 'Maintenance of city cemetery' },
    ],
    'OCAss': [
        { code: '1000-2-01-OCAss-1', name: 'General supervision and management of the Office of the City Assessor' },
        { code: '1000-2-01-OCAss-3', name: 'Implementation of RA 12001 (Real Property Valuation and Assessment Reform Act)' },
    ],
    'OCICTO': [
        { code: '1000-2-02-OCICTO-1', name: 'General supervision and management of the Office of City Information and Communication Technology Officer' },
        { code: '1000-2-02-OCICTO-6', name: 'Local area network restructuring using fiber cable' },
    ],
    'OCMAO': [
        { code: '1000-2-02-OCMAO-1', name: 'General supervision and management of the Office of the City Media Affairs Officer' },
        { code: '1000-2-02-OCMAO-4', name: 'City public information campaigns' },
        { code: '1000-2-02-OCMAO-6', name: 'Laoag: Alisto, Asenso, Progreso Programs and Projects' },
    ],
    'OCLO': [
        { code: '1000-2-01-OCLO-1', name: 'General Supervision and Management of the Office of the City Legal Officer' },
        { code: '1000-2-01-OCLO-3', name: 'Orientation Seminars/Litigation Support Services' },
    ],
    'OCCAO': [
        { code: '3000-2-03-OCCAO-1', name: 'General supervision and management of the Office of the City Community Affairs Officer' },
        { code: '3000-2-03-OCCAO-4', name: 'Support to Barangay Social, Health, Economic and Environmental Management Services' },
        { code: '3000-2-03-OCCAO-8', name: 'Support to Sports Development Program' },
    ],
    'OCHO': [
        { code: '3000-2-01-OCHO-1', name: 'General supervision and management of the Office of the City Health Officer' },
        { code: '3000-2-01-OCHO-8', name: 'Support to Blood Donation Program' },
        { code: '3000-2-01-OCHO-16', name: 'Community-Based Drug Rehabilitation Program' },
    ],
    'PopCom': [
        { code: '3000-2-02-CPD-1', name: 'General supervision and management of the Office of the Population Program Officer' },
        { code: '3000-2-02-CPD-3', name: 'RPFP/RH/AHD/POPDEV Programs' },
        { code: '3000-2-02-CPD-16', name: 'Operation and Management of Gender Sensitive Teen Center' },
    ],
    'OCSWDO': [
        { code: '3000-2-01-OCSWDO-1', name: 'General Supervision and Management of the Office of the City Social Welfare and Development Officer' },
        { code: '3000-2-01-OCSWDO-10', name: 'Operation & strengthening the Local Council for the Protection of Children' },
        { code: '3000-2-01-OCSWDO-41', name: 'Health care program for Senior Citizens' },
    ],
    'OCDRRMO': [
        { code: '3000-2-03-OCDRRMO-1', name: 'General Supervision and Management of the Office of the City Disaster Risk Reduction and Management Officer' },
        { code: '3000-2-03-OCDRRMO-6', name: 'Quick Response' },
        { code: '3000-2-03-OCDRRMO-3-1', name: 'Conduct of various trainings on disaster preparedness and response' },
    ],
    'PDAO': [
        { code: '3000-2-01-CPDAO-1', name: 'General Supervision and Management of the Office of the City Persons with Disability Affairs Officer' },
    ],
    'OCAg': [
        { code: '8000-2-02-OCAg-1', name: 'General Supervision and Management of the Office of the City Agriculturist' },
        { code: '8000-2-02-OCAg-8', name: 'Establishment of Community Vegetable Garden and Gulayan Sa Barangay' },
        { code: '8000-2-02-OCAg-11', name: 'Establishment of Dairy/Livestock Project' },
    ],
    'OCTO': [
        { code: '8000-2-02-OCTO-1', name: 'General Supervision and Management of the Office of the City Tourism Officer' },
        { code: '8000-2-02-OCTO-10', name: 'Tourism promotions and marketing' },
        { code: '8000-2-02-OCTO-11', name: 'Provision for special events and activities of the city' },
    ],
    'OCVET': [
        { code: '8000-2-01-OCV-1', name: 'General Supervision and Management of the Office of the City Veterinarian' },
        { code: '8000-2-01-OCV-4-1', name: 'Conduct of vaccination to domestic animals' },
        { code: '8000-2-01-OCV-4-6', name: 'Livestock and poultry development program' },
    ],
    'OCENRO': [
        { code: '8000-2-02-OCENRO-1', name: 'General Supervision and Management of the Office of the City Environment and Natural Resources Officer' },
        { code: '8000-2-02-OCENRO-2', name: 'Improvement/maintenance of the Sanitary Landfill' },
        { code: '8000-2-02-OCENRO-34', name: 'Forest Land Use Plan Programs/Projects and Activities Implementation' },
    ],
    'OCE': [
        { code: '8000-2-01-OCE-1', name: 'General Supervision and Management of the Office of the City Engineer' },
        { code: '8000-2-01-OCE-20', name: 'Construction/Rehabilitation/Improvement of drainage at various locations' },
        { code: '8000-2-01-OCE-16', name: 'Construction of Concrete Pavement at various Barangays' },
    ],
    'LCGH': [
        { code: '8000-2-03-LCGH-1', name: 'General Supervision and Management of the Laoag City General Hospital' },
        { code: '8000-2-03-LCGH-9', name: 'Procurement of drugs and medicines' },
        { code: '8000-2-03-LCGH-10', name: 'Procurement of medical, dental, laboratory, radiology, and dialysis supplies' },
    ],
    'LCPMCC': [
        { code: '8000-2-03-LCPMCC-1', name: 'General Supervision and Management of the Laoag City Public Market and Commercial Complex' },
    ],
    'LCSH': [
        { code: '8000-2-03-LCSH-1', name: 'General Supervision and Management of the Laoag City Slaughterhouse' },
    ],
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

function submitReport() {
    let quarter = document.getElementById('quarter-select').value; 
    let office = currentUser.office; 

    let reportKey = office + '_' + quarter; 
    if (localStorage.getItem(reportKey)) {
        alert('Your office has already submitted a report for this quarter');
        return;
    }

    let programs = officePrograms[office];
    let results = [];

    programs.forEach(function(program, index) {
        let actualOutput = document.getElementById('output_' + index).value;
        let allotment = parseFloat(document.getElementById('allotment_' + index).value) || 0;
        let obligations = parseFloat(document.getElementById('obligations_' + index).value) || 0;
        let remarks = document.getElementById('remarks_' + index).value;
        let variance = allotment - obligations; 
        let absorptive = allotment > 0 ? ((obligations / allotment) * 100).toFixed(2) : 0;

        results.push({
            code: program.code,
            name: program.name,
            actualOutput: actualOutput,
            allotment: allotment,
            obligations: obligations,
            variance: variance,
            absorptive: absorptive,
            remarks: remarks
        });
    });

    let reportData = {
        office: office,
        quarter: quarter,
        year: 2026,
        status: 'submitted', 
        submittedAt: new Date().toISOString(),
        programs: results
    };

    localStorage.setItem(reportKey, JSON.stringify(reportData));
    alert('Report Submitted Successfully!');
}

function loadManagerDashboard() {
    let quarter = document.getElementById('manager-quarter-select').value; 
    const allOffices = Object.keys(officePrograms);
    const tableBody = document.getElementById('submission-table-body');
    tableBody.innerHTML = '';
    
    allOffices.forEach(office => {
        let reportKey = office + '_' + quarter;
        const hasSubmitted = localStorage.getItem(reportKey) != null;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${office}</td>
            <td style="color: ${hasSubmitted ? 'green' : 'red'}">
                ${hasSubmitted ? 'Submitted' : 'Pending'}
            </td>
        `;
        tableBody.innerHTML(row);
    })
}

function login() {  

    let office = document.getElementById('office-select').value;
    let role = document.getElementById('role-select').value;
    let password = document.getElementById('password-input').value;

    if (role === 'manager') {
        document.getElementById('manager-view').style.display = 'block';
        loadManagerDashboard();
    }

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

function logout() {
    currentUser = null; 
    document.getElementById('employee-view').style.display = 'none';
    document.getElementById('manager-view').style.display = 'none';
    document.getElementById('login-screen').style.display = 'block';
}