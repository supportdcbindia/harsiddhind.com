// Modal

document.addEventListener('DOMContentLoaded', function () {
    var myModalEl = document.getElementById('brochureModal');
    myModalEl.addEventListener('show.bs.modal', function (event) {
        // Add your code here to handle the modal opening
        console.log('Modal is about to be shown');
        // You can perform any actions you want here
    });
});


// Year for footer
// Get the current year
const currentYear = new Date().getFullYear();

// Update the span element with the current year
document.getElementById('currentYear').textContent = currentYear;

// Resume
function uploadResume() {
    event.preventDefault(); 
    const fileInput = document.getElementById('resume');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a file.');
        return;
    }

    sendResume(file);
}

function sendResume(file) {
    const formData = new FormData();
    formData.append('resume', file);

    fetch('https://email-sending-nine.vercel.app/resumesending', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            alert('Resume sent successfully!');
        })
        .catch(error => {
            console.log('Error:', error);
            alert('Error sending resume. Please try again.');
        });
}


// Location 

// Fetch user's country and state based on IP address
function fetchUserLocation() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            document.getElementById("country").value = data.country_name;
            document.getElementById("state").value = data.region;
        })
        .catch(error => console.error('Error fetching user location:', error));
}

// Call the function to fetch user's location when the page loads
fetchUserLocation();

// Input box

const inputBox = document.querySelector('.input-box');

		inputBox.addEventListener('input', function () {
			if (this.value.length > 10) {
				this.classList.add('big');
			} else {
				this.classList.remove('big');
			}
		});

// Machines
var machineList = {
    'Vials': ["Automatic Servo Based Rotary Vial Washing Machine", "Automatic Vial Filling and Stoppering Machine", "Automatic Vial Inspection Machine", "Automatic External Vial Washing Machine", "Automatic Vial Sticker Labeling Machine"],
    'Ampoule': ["Automatic Servo Based Rotary Ampoule Washing Machine", "Automatic Ampoule Filling and Sealing Machine", "Automatic Ampoule External Washing Machine", "Automatic Ampoule Sticker Labeling Machine"],
    'Opthalmic': ["Automatic Bottle Unscrambler Machine with Bottle Feeder for Opthalmic", "Automatic Bottle Unscrambler Machine with Bottle Feeder1 for Opthalmic"],
    'Nasal Line': ["Nasal Line Rotary Type for Round Shape Bottle", "Nasal Line Rotary Type for Oval/Round Shape Bottle", "Nasal Line Linear Type for Round Shape Bottle"],
    'MDI': ["METERED DOSE INHALERS FILLING (MDI) LINE"],
    'PFS': ["Semi-Automatic Pre-Filled Syringe Filling & Stoppering Machine", "Automatic Pre-Filled Syringe Filling & Stoppering Machine"],
    'Tablet': ["Tablet/Capsule Elevator"],
    'IV Bags': ["Semi-Automatic Table top IV Bag Filling Machine"]
};

function showMachines() {
    var product = document.getElementById('productSelect').value;
    var machines = document.getElementById('machine');
    machines.innerHTML = '';
    machineList[product].forEach(function (machine) {
        var li = document.createElement('li');
        li.textContent = machine;
        li.setAttribute('data-value', machine);
        li.classList.add('option');
        li.addEventListener('click', function () {
            document.getElementById('selectedMachine').innerText = this.textContent;
            document.getElementById('selectedMachineInput').value = this.textContent;
        });
        machines.appendChild(li);
    });

    console.log('showMachines', product, document.getElementById('selectedMachine').innerText);
}

// Product
// Function to display product information
function displayProductInfo(productInfo) {
    productDescription.innerHTML = '';

    // Create a div for each row of product names
    let rowDiv;
    let rowCount = 0;
    productInfo.forEach(([product, { image, description }], index) => {
        if (index % 3 === 0) {
            rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            productDescription.appendChild(rowDiv);
            rowCount++;
        }

        const div = document.createElement('div');
        div.classList.add('col-md-2');
        div.classList.add('product-item');
        div.innerHTML = `
    <h3>${product}</h3>
    <span class="delete-btn" title="Delete">X</span>
`;
        // Add click event listener to scroll to machine section
        div.addEventListener('click', () => {
            scrollToMachineSection();
        });
        rowDiv.appendChild(div);

        // Add event listener to delete button
        const deleteButton = div.querySelector('.delete-btn');
        deleteButton.addEventListener('click', () => {
            // Remove the product item from the DOM
            div.remove();

            // Unselect the corresponding filter button
            const filterButton = document.querySelector(`[data-filter="${product.toLowerCase()}"]`);
            if (filterButton) {
                filterButton.classList.remove('active');
            }
        });
    });
}


const filterdivs = document.querySelectorAll('.filter-btn');
		const productDescription = document.getElementById('productDescription');
		const machineDetails = document.getElementById('machineDetails');

		// Sample data structure for mapping products to images and descriptions
		const productsToImagesAndDescriptions = {
			'vials': {
				image: 'path_to_image_vials.png',
				description: 'Description for vials'
			},
			'ampoule': {
				image: 'path_to_image_ampoule.png',
				description: 'Description for ampoule'
			},
			'ophthalmic ': {
				image: 'path_to_image_ophthalmic.png',
				description: 'Description for ophthalmic'
			},
			'nasal': {
				image: 'path_to_image_nasal.png',
				description: 'Description for nasal'
			},
			'mdi': {
				image: 'path_to_image_mdi.png',
				description: 'Description for mdi'
			},
			'PFS': {
				image: 'path_to_image_PFS.png',
				description: 'Description for PFS'
			},
			'tablet': {
				image: 'path_to_image_tablet.png',
				description: 'Description for tablet'
			},
			'IV Bags': {
				image: 'path_to_image_IV Bags.png',
				description: 'Description for IV Bags'
			},
			// Add more mappings as needed
		};

		// Sample data structure for mapping products to machines
		const productsToMachines = {
			'vials': [
				{ name: 'Automatic Servo Based Rotary Vial Washing Machine', image: 'img/machines/Auto Rotary Vial Washing Machine 2 1000.png', description: 'An automatic servo-based rotary vial washing machine efficiently cleans and sterilizes vials using advanced servo technology.' },
				{ name: 'Automatic Vial Filling and Stoppering Mc', image: 'img/machines/Vial Filling and Stoppering Mc 2 1000.png', description: 'The high speed stoppering station includes a st.st. 316L vibratory bowl which feed the stoppers directly on a stoppering carrousel with vacuum-operated wheel.' },
				{ name: 'Automatic Vial Alu. Cap Sealing Machine', image: 'img/machines/Vial Cap Sealing Machine 2 1000.png', description: 'An automatic servo-based rotary vial washing machine efficiently cleans and sterilizes vials using advanced servo technology.' },
				{ name: 'Automatic On-line Three Line Visual Vial Inspection Machine', image: 'img/machines/no-image.png', description: 'An automatic servo-based rotary vial washing machine efficiently cleans and sterilizes vials using advanced servo technology.' },
				{ name: 'Automatic External Vial Washing Machine', image: 'img/machines/no-image.png', description: 'An automatic servo-based rotary vial washing machine efficiently cleans and sterilizes vials using advanced servo technology.' },
				{ name: 'Automatic Vial Sticker Labeling Machine', image: 'img/machines/no-image.png', description: 'An automatic servo-based rotary vial washing machine efficiently cleans and sterilizes vials using advanced servo technology.' },
			],
			'ampoule': [
				{ name: 'Automatic Servo Based Rotary Ampoule Washing Machine', image: 'img/machines/Automatic Servo Based Rotary Ampoule Washing Machine 3 1000.png', description: 'The Automatic Servo-Based Rotary Ampoule Washing Machine 3-1000 offers high-speed, precise cleaning for small pharmaceutical ampoules using advanced servo control technology.' },
				{ name: 'Automatic Ampoule Filling and Sealing Machine', image: 'img/machines/no-image.png', description: 'The Automatic Ampoule Filling and Sealing Machine automates the process of filling and sealing ampoules, ensuring precision and efficiency in pharmaceutical manufacturing.' },
				{ name: 'Automatic Ampoule External Washing Machine', image: 'img/machines/no-image.png', description: 'The Automatic Ampoule External Washing Machine streamlines the external cleaning process for ampoules, ensuring thorough cleanliness and efficiency in pharmaceutical production lines.' },
				{ name: 'Automatic Ampoule Sticker Labelling Machine', image: 'img/machines/no-image.png', description: 'The Automatic Ampoule Sticker Labelling Machine efficiently applies labels onto ampoules, ensuring accurate and seamless labeling in pharmaceutical manufacturing processes.' }
			],
			'ophthalmic': [
				{ name: 'Automatic Bottle Unscrambler Machine with Bottle Feeder', image: 'img/machines/Ophathalmic Linear 3 1000.png', description: 'Automatic Monoblock Filling, Inner Placement, Screw Capping with Torque Measurement, Auto Sampling and Auto Rejection System. Ouput: 60 BPM' },
				{ name: 'Automatic Bottle Unscrambler Machine with Bottle Feeder1', image: 'img/machines/Automatic Bottle Unscrambler Machine with Bottle Feeder1.png', description: 'Automatic Monoblock Filling, Inner Placement, Screw Capping with Torque Measurement, Auto Sampling and Auto Rejection System. Ouput: 120 BPM' },
			],
			'nasal': [
				{ name: 'Nasal Line Rotary Type for Round Shape Bottle', image: 'img/machines/Nasal Line Rotary Type for Round Shape Bottle1000.png', description: 'Automatic Bottle Unscrambler Machine with Bottle Feeder Automatic Monoblock Filling, Pump Placement, Crimping and Actuator Placement Machine Ouput: 60 BPM' },
				{ name: 'Nasal Line Rotary Type for Oval/Round Shape Bottle', image: 'img/machines/Rotary Nasal Line 2 1000.png', description: 'Automatic Bottle Unscrambler Machine Automatic Airjet Cleaning Machine Automatic Continous Motion Filling, Pump Placement with Pressing and Screw Capping Machine Ouput: 150 BPM' },
				{ name: 'Nasal Line Linear Type for Round Shape Bottle', image: 'img/machines/nasal line (Linear) 2 1000.png', description: 'Automatic Bottle Unscrambler Machine Automatic Airjet Cleaning Machine Automatic Continous Motion Filling, Pump Placement with Pressing and Screw Capping Machine Ouput: 80 & 100 BPM' }
			],
			'mdi': [
				{ name: 'METERED DOSE INHALERS FILLING (MDI) LINE', image: 'img/machines/MDI Lines 1 1000.png', description: 'Automatic Can Unscrambler Machine with Can Feeder 1. Automatic Can Cleaning Machine 2. Automatic Valve Placement, Crimping and Filling Machine 3. Automatic Water Stress Bath Machine 4. Automatic Two Stage Tray Loader Machine' },
			],
			'PFS': [
				{ name: 'Semi-Automatic Pre-Filled Syringe Filling & Stoppering Machine', image: 'img/machines/AUTOMATIC_PFS_NEST_FILLING_CUM_RUBBER_STOPPERING_-_PHOTO-1-removebg-preview 1000.png', description: 'Automatic Can Unscrambler Machine with Can Feeder 1. Automatic Can Cleaning Machine 2. Automatic Valve Placement, Crimping and Filling Machine 3. Automatic Water Stress Bath Machine 4. Automatic Two Stage Tray Loader Machine' },
				{ name: 'Automatic Pre-Filled Syringe Filling & Stoppering Machine', image: 'img/machines/Nasal Line 60 2 1000-1.png', description: 'Automatic Can Unscrambler Machine with Can Feeder 1. Automatic Can Cleaning Machine 2. Automatic Valve Placement, Crimping and Filling Machine 3. Automatic Water Stress Bath Machine 4. Automatic Two Stage Tray Loader Machine' },
			],
			'tablet': [
				{ name: 'Tablet/Capsule Elevator', image: 'https://harshidhpharma1.netlify.app/img/machines/Tablet Capsule Elevator 2 1000.png', description: 'The Capsule Elevator efficiently transports capsules within pharmaceutical production lines, ensuring seamless vertical movement and integration into automated processes.' },
			],
			'IV Bags': [
				{ name: 'Semi-Automatic Table top IV Bag Filling Machine', image: 'img/machines/Table_Top_Semi_Auto_BAG_FILLING_MACHINE-01-removebg-preview 1 1000.png', description: 'The Semi-Automatic Tabletop IV Bag Filling Machine provides efficient and precise filling of IV bags on a compact tabletop design, enhancing workflow and accuracy in medical settings.' },
			],
			// Add more mappings as needed
		};

		function handledivClick(event) {
			const selectedFilters = Array.from(filterdivs)
				.filter(btn => btn.classList.contains('active'))
				.map(btn => btn.dataset.filter);


			const machines = selectedFilters.includes('all') ? Object.values(productsToMachines).flat() : selectedFilters.flatMap(filter => productsToMachines[filter] || []);
			displayMachineDetails(machines);

			// Hide machines of unselected products
			const allMachineItems = document.querySelectorAll('.machine-item');
			allMachineItems.forEach(machineItem => {
				const machineName = machineItem.querySelector('h3').innerText;
				if (!machines.some(machine => machine.name === machineName)) {
					machineItem.style.display = 'none';
				} else {
					machineItem.style.display = 'block';
				}
			});

			// Unselect filters that are not present in the displayed product info
			filterdivs.forEach(div => {
				const filter = div.dataset.filter;
				const isActive = selectedFilters.includes(filter);
				if (!isActive && div.classList.contains('active')) {
					div.classList.remove('active');
				}
			});
		}

		// Function to display machine details
		function displayMachineDetails(machines) {
			machineDetails.innerHTML = '';

			// Create a row div to contain machine items
			let rowDiv = document.createElement('div');
			rowDiv.classList.add('row');
			machineDetails.appendChild(rowDiv);

			machines.forEach(machine => {
				const div = document.createElement('div');
				div.classList.add('col-md-4');
				div.classList.add('machine-item');
				div.innerHTML = `
            <h3>${machine.name}</h3>
            <img src="${machine.image}" alt="${machine.name}">
            <p>${machine.description}</p>
        `;
				rowDiv.appendChild(div);
			});
		}

		// Add click event listener to each filter div
		filterdivs.forEach(div => {
			div.addEventListener('click', () => {
				// Remove 'active' class from other filter buttons
				filterdivs.forEach(btn => {
					if (btn !== div) {
						btn.classList.remove('active');
					}
				});

				// Toggle 'active' class for the clicked filter button
				div.classList.toggle('active');

				// Get the selected filter
				const selectedFilter = div.dataset.filter;

				// Display machines related to the selected filter
				displayMachineDetails(productsToMachines[selectedFilter]);

				// Scroll to machines section
				scrollToMachineSection();
			});
		});

		// Function to scroll to the machines section
		function scrollToMachineSection() {
			const machineSection = document.getElementById('machine-section');
			machineSection.scrollIntoView({ behavior: 'smooth' });
		}