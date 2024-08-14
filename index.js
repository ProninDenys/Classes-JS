// Circle Calculator
class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(newRadius) {
        if (newRadius > 0) {
            this._radius = newRadius;
        } else {
            console.error("Radius must be greater than 0");
        }
    }

    get diameter() {
        return this._radius * 2;
    }

    calculateArea() {
        return Math.PI * Math.pow(this._radius, 2);
    }

    calculateCircumference() {
        return 2 * Math.PI * this._radius;
    }
}

document.getElementById('calculateBtn').addEventListener('click', function() {
    const radiusValue = parseFloat(document.getElementById('radius').value);
    if (isNaN(radiusValue) || radiusValue <= 0) {
        alert('Please enter a valid radius greater than 0');
        return;
    }

    const myCircle = new Circle(radiusValue);

    document.getElementById('radiusResult').textContent = myCircle.radius;
    document.getElementById('diameterResult').textContent = myCircle.diameter;
    document.getElementById('areaResult').textContent = myCircle.calculateArea().toFixed(2);
    document.getElementById('circumferenceResult').textContent = myCircle.calculateCircumference().toFixed(2);
});

// Marker Demonstration
class Marker {
    constructor(color, inkPercentage) {
        this.color = color;
        this.inkPercentage = inkPercentage;
    }

    write(text) {
        let output = '';
        for (let i = 0; i < text.length; i++) {
            if (this.inkPercentage <= 0) {
                break;
            }
            if (text[i] !== ' ') {
                if (this.inkPercentage >= 0.5) {
                    output += text[i];
                    this.inkPercentage -= 0.5;
                } else {
                    break;
                }
            } else {
                output += text[i];
            }
        }
        return output;
    }
}

class RefillableMarker extends Marker {
    refill() {
        this.inkPercentage = 100;
        alert('Marker refilled to 100%.');
    }
}

const outputText = document.getElementById('outputText');
const textInput = document.getElementById('textInput');
const colorInput = document.getElementById('colorInput');
const inkInput = document.getElementById('inkInput');

let marker = new RefillableMarker(colorInput.value, parseFloat(inkInput.value));

document.getElementById('writeBtn').addEventListener('click', function() {
    marker.color = colorInput.value;
    const text = textInput.value;
    const writtenText = marker.write(text);
    outputText.innerHTML += `<span style="color: ${marker.color};">${writtenText}</span>`;
});

document.getElementById('refillBtn').addEventListener('click', function() {
    marker.refill();
});

// Класс Employee
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        if (this.employees.length === 0) {
            return '<p>No employees added yet.</p>';
        }

        let html = `
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
        `;

        this.employees.forEach(employee => {
            html += `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.position}</td>
                    <td>${employee.salary}</td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
        `;

        return html;
    }
}

// пустой массив работников
const employees = [];

function updateTable() {
    const empTable = new EmpTable(employees);
    document.getElementById('employeeTable').innerHTML = empTable.getHtml();
}

document.getElementById('addEmployeeBtn').addEventListener('click', function() {
    const name = document.getElementById('employeeName').value;
    const position = document.getElementById('employeePosition').value;
    const salary = document.getElementById('employeeSalary').value;

    if (name && position && salary) {
        const employee = new Employee(name, position, salary);
        employees.push(employee);
        updateTable();
        document.getElementById('employeeName').value = '';
        document.getElementById('employeePosition').value = '';
        document.getElementById('employeeSalary').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});

updateTable();